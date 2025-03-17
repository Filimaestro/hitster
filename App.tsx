import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Dimensions, Image, Linking, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import Animated, { 
  useAnimatedStyle, 
  withSpring,
  useSharedValue,
  withTiming,
  runOnJS,
  SharedValue
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import eventsData from './events.json';

const { width } = Dimensions.get('window');

// Use events from JSON file
const mockEvents = eventsData.events;

// Function to parse Dutch date format
const parseDate = (dateStr: string) => {
  const months: { [key: string]: number } = {
    'januari': 0, 'februari': 1, 'maart': 2, 'april': 3, 'mei': 4, 'juni': 5,
    'juli': 6, 'augustus': 7, 'september': 8, 'oktober': 9, 'november': 10, 'december': 11
  };
  
  const [day, monthStr, year] = dateStr.replace(',', '').split(' ');
  const month = months[monthStr.toLowerCase()];
  return new Date(parseInt(year), month, parseInt(day));
};

// Function to randomly select and order events
const selectRandomEvents = () => {
  // Shuffle all events
  const shuffled = [...mockEvents].sort(() => Math.random() - 0.5);
  
  // Select first 6 events (or all if less than 6)
  const selected = shuffled.slice(0, 6);
  
  // Randomly choose one event to be pre-placed
  const prePlacedIndex = Math.floor(Math.random() * selected.length);
  const prePlaced = selected[prePlacedIndex];
  
  // Remove the pre-placed event and shuffle the remaining ones
  const remaining = selected.filter((_, index) => index !== prePlacedIndex);
  
  return { prePlaced, remaining };
};

type GameState = 'initial' | 'playing' | 'gameOver';
type Placement = 'before' | 'after' | 'between';

interface PlacedFact {
  id: string;
  title: string;
  description: string;
  date: string;
  position: number;
  imageUrl: string;
}

// Add this component above the App component
const TimelineItem = ({ 
  fact, 
  isFirst,
  isLast,
  dropIndex,
  index,
  cardPosition,
  isDragging
}: { 
  fact: PlacedFact, 
  isFirst: boolean,
  isLast: boolean,
  dropIndex: number | null,
  index: number,
  cardPosition: SharedValue<number>,
  isDragging: boolean
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    if (!isDragging) {
      return { transform: [{ translateY: 0 }] };
    }

    const GAP_SIZE = 100; // Size of the gap to create
    const cardY = cardPosition.value;
    const itemPosition = index * 80; // 80 is the height of each item
    const distance = cardY - itemPosition;
    
    let translateY = 0;
    
    if (dropIndex !== null) {
      if (index < dropIndex) {
        translateY = 0; // Items above the drop point stay in place
      } else if (index >= dropIndex) {
        translateY = GAP_SIZE; // Items below the drop point move down
      }
    }

    return {
      transform: [
        { translateY: withSpring(translateY, { damping: 15 }) }
      ],
    };
  });

  return (
    <Animated.View style={[styles.timelineItemContainer, animatedStyle]}>
      <View style={[
        styles.timelineFact,
        dropIndex === index && styles.timelineFactHighlight
      ]}>
        <Image 
          source={{ uri: fact.imageUrl }} 
          style={styles.timelineImage}
          resizeMode="cover"
        />
        <View style={styles.timelineFactContent}>
          <Text style={styles.timelineTitle}>{fact.title}</Text>
          <Text style={styles.timelineDate}>{fact.date}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>('initial');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [placedFacts, setPlacedFacts] = useState<PlacedFact[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dropZoneIndex, setDropZoneIndex] = useState<number | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<typeof mockEvents>([]);
  const [remainingEvents, setRemainingEvents] = useState<typeof mockEvents>([]);
  const [prePlacedEvent, setPrePlacedEvent] = useState(() => {
    const { prePlaced } = selectRandomEvents();
    return prePlaced;
  });

  // Animation values
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing' && startTime) {
      interval = setInterval(() => {
        setGameTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, startTime]);

  const startGame = () => {
    // Use the existing prePlacedEvent and get new remaining events
    const shuffled = [...mockEvents].filter(event => event.id !== prePlacedEvent.id)
      .sort(() => Math.random() - 0.5);
    const remaining = shuffled.slice(0, 5); // Get exactly 5 remaining events
    
    setSelectedEvents([prePlacedEvent, ...remaining]);
    setRemainingEvents(remaining);
    
    setGameState('playing');
    setStartTime(Date.now());
    setCurrentFactIndex(0);
    setPlacedFacts([{ ...prePlacedEvent, position: 0 }]);
    setScore(0);
    setGameTime(0);
    setIsDragging(false);
    setDropZoneIndex(null);
    translateX.value = 0;
    translateY.value = 0;
  };

  const checkPlacement = (dropIndex: number) => {
    const currentFact = remainingEvents[currentFactIndex];
    const isCorrect = isCorrectPlacement(currentFact, dropIndex);
    console.log('Placement result:', {
      fact: currentFact.title,
      dropIndex,
      isCorrect,
      currentScore: score
    });

    if (isCorrect) {
      const newPlacedFacts = [...placedFacts];
      newPlacedFacts.splice(dropIndex, 0, { ...currentFact, position: dropIndex });
      setPlacedFacts(newPlacedFacts);
      
      // Update score after successful placement
      const newScore = newPlacedFacts.length - 1; // -1 because we don't count the pre-placed fact
      console.log('Updating score:', {
        placedFactsLength: newPlacedFacts.length,
        newScore
      });
      setScore(newScore);
      
      if (currentFactIndex < remainingEvents.length - 1) {
        setCurrentFactIndex(prev => prev + 1);
      } else {
        endGame(true);
      }
    } else {
      endGame(false);
    }
  };

  const isCorrectPlacement = (fact: typeof mockEvents[0], dropIndex: number): boolean => {
    const factDate = parseDate(fact.date);
    console.log('Checking placement:', {
      fact: fact.title,
      factDate: factDate.toISOString(),
      dropIndex,
    });
    
    if (dropIndex === 0) {
      const firstDate = parseDate(placedFacts[0].date);
      console.log('Comparing with first:', firstDate.toISOString());
      return factDate < firstDate;
    } else if (dropIndex === placedFacts.length) {
      const lastDate = parseDate(placedFacts[placedFacts.length - 1].date);
      console.log('Comparing with last:', lastDate.toISOString());
      return factDate > lastDate;
    } else {
      const beforeDate = parseDate(placedFacts[dropIndex - 1].date);
      const afterDate = parseDate(placedFacts[dropIndex].date);
      console.log('Comparing between:', {
        before: beforeDate.toISOString(),
        after: afterDate.toISOString()
      });
      return factDate > beforeDate && factDate < afterDate;
    }
  };

  const endGame = (won: boolean) => {
    setGameState('gameOver');
    setStartTime(null);
    // If won, ensure score shows all 5 facts were placed correctly
    if (won) {
      setScore(5);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: withSpring(isDragging ? 1.05 : 1) }
      ],
      opacity: withTiming(isDragging ? 0.8 : 1),
    };
  });

  const handleGestureEvent = (event: any) => {
    'worklet';
    translateX.value = event.nativeEvent.translationX;
    translateY.value = event.nativeEvent.translationY;

    // Only start detecting position after some minimum drag distance
    const MIN_DRAG_Y = 20; // Minimum vertical drag distance required
    if (Math.abs(event.nativeEvent.translationY) < MIN_DRAG_Y) {
      runOnJS(setDropZoneIndex)(null);
      return;
    }

    // Get the card's position relative to the screen
    const cardHeight = 120;
    const timelineItemHeight = 80;
    const timelineStartY = 200;
    
    // Calculate the card's center position
    const cardCenterY = event.nativeEvent.absoluteY;
    
    // Calculate which position we're over
    const relativeY = cardCenterY - timelineStartY;
    const targetIndex = Math.round(relativeY / timelineItemHeight);
    
    // Clamp the index between 0 and placedFacts.length
    const clampedIndex = Math.max(0, Math.min(targetIndex, placedFacts.length));
    
    if (clampedIndex >= 0 && clampedIndex <= placedFacts.length) {
      runOnJS(setDropZoneIndex)(clampedIndex);
    }
  };

  const handleGestureBegin = () => {
    'worklet';
    runOnJS(setIsDragging)(true);
    runOnJS(setDropZoneIndex)(null); // Reset drop zone index when starting drag
  };

  const handleGestureEnd = () => {
    'worklet';
    runOnJS(setIsDragging)(false);
    
    // Only check placement if we have a valid drop zone and some movement occurred
    if (dropZoneIndex !== null && 
        (Math.abs(translateY.value) > 20 || Math.abs(translateX.value) > 20)) {
      runOnJS(checkPlacement)(dropZoneIndex);
    }
    
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
    runOnJS(setDropZoneIndex)(null);
  };

  if (gameState === 'initial') {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Hitster</Text>
            <View style={styles.factCard}>
              <View style={styles.cardContent}>
                <Image 
                  source={{ uri: prePlacedEvent.imageUrl }} 
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardTextContent}>
                  <Text style={styles.factTitle}>{prePlacedEvent.title}</Text>
                  <Text style={styles.factDescription}>{prePlacedEvent.description}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.playButton} onPress={startGame}>
              <Text style={styles.playButtonText}>SPELEN</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }

  if (gameState === 'gameOver') {
    // Sort all selected events chronologically
    const allEvents = [...selectedEvents].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    const openArticle = async (url: string) => {
      try {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log("Don't know how to open URL: " + url);
        }
      } catch (error) {
        console.error("An error occurred while opening the URL:", error);
      }
    };

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Game Over!</Text>
            <Text style={styles.scoreText}>Score: {score}/5</Text>
            <Text style={styles.timeText}>Time: {formatTime(gameTime)}</Text>
            
            <Text style={styles.chronologyHeader}>De juiste volgorde:</Text>
            <View style={styles.chronologyList}>
              {allEvents.map((event, index) => (
                <TouchableOpacity 
                  key={event.id}
                  style={styles.chronologyItem}
                  onPress={() => openArticle(event.articleUrl)}
                >
                  <Image 
                    source={{ uri: event.imageUrl }} 
                    style={styles.chronologyImage}
                    resizeMode="cover"
                  />
                  <View style={styles.chronologyContent}>
                    <Text style={styles.chronologyTitle}>{event.title}</Text>
                    <Text style={styles.chronologyDate}>{event.date}</Text>
                    <Text style={styles.readMore}>Lees meer →</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.playButton} onPress={startGame}>
              <Text style={styles.playButtonText}>SPEEL OPNIEUW</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }

  const currentFact = remainingEvents[currentFactIndex];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Hitster</Text>
          <Text style={styles.timer}>{formatTime(gameTime)}</Text>
          
          <View style={styles.timeline}>
            {placedFacts.map((fact, index) => (
              <TimelineItem
                key={fact.id}
                fact={fact}
                isFirst={index === 0}
                isLast={index === placedFacts.length - 1}
                dropIndex={dropZoneIndex}
                index={index}
                cardPosition={translateY}
                isDragging={isDragging}
              />
            ))}
          </View>

          <PanGestureHandler
            onBegan={handleGestureBegin}
            onEnded={handleGestureEnd}
            onGestureEvent={handleGestureEvent}
            minDist={10}
            enabled={true}
          >
            <Animated.View style={[styles.factCard, animatedStyle]}>
              <View style={styles.cardContent}>
                <Image 
                  source={{ uri: currentFact.imageUrl }} 
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardTextContent}>
                  <Text style={styles.factTitle}>{currentFact.title}</Text>
                  <Text style={styles.factDescription}>{currentFact.description}</Text>
                </View>
              </View>
            </Animated.View>
          </PanGestureHandler>

          <Text style={styles.dragHint}>Sleep omhoog voor eerder, omlaag voor later</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginBottom: 20,
  },
  timeline: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 100,
  },
  timelineItemContainer: {
    width: '100%',
    marginBottom: 8,
  },
  timelineFact: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  timelineImage: {
    width: 60,
    height: 60,
    backgroundColor: '#E0E0E0',
  },
  timelineFactContent: {
    flex: 1,
    padding: 10,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  timelineDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  factCard: {
    width: width * 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 120,
    height: 120,
    backgroundColor: '#F5F5F5',
  },
  cardTextContent: {
    flex: 1,
    padding: 15,
  },
  factTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  factDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  dragHint: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  chronologyHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  chronologyList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  chronologyItem: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  chronologyImage: {
    width: 70,
    height: 70,
    backgroundColor: '#E0E0E0',
  },
  chronologyContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  chronologyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  chronologyDate: {
    fontSize: 14,
    color: '#666',
  },
  readMore: {
    color: '#007AFF',
    fontSize: 14,
    marginTop: 4,
  },
  timelineFactHighlight: {
    backgroundColor: '#E3F2FD',
    borderColor: '#007AFF',
    borderWidth: 2,
  },
}); 