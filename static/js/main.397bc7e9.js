(()=>{"use strict";var e={2516:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var r=n(467),i=n(4467),a=n(5458),o=n(296),l=n(7225),s=n(5675),d=n(3929),c=n(4701),u=n(6283),g=n(9685),f=n(6725),h=n(484),p=n(9632),m=n(367),v=n(6665),w=n(9627);const x=JSON.parse('{"events":[{"id":"1","title":"Relus ter Beek overleden","description":"Commissaris van de koningin Relus ter Beek overlijdt op 64-jarige leeftijd.","date":"29 september, 2008","imageUrl":"https://i.regiogroei.cloud/ff65cf43-89b7-3619-b8a3-8229937d5f77.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/37794/cdk-relus-ter-beke-overleden"},{"id":"2","title":"De koning opent Wildlands","description":"Koning Willem-Alexander opent de nieuwe dierentuin in Emmen.","date":"18 maart, 2016","imageUrl":"https://i.regiogroei.cloud/4fd570f3-494d-398b-8d0b-2bd87694b4df.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/106965/in-beeld-koning-willem-alexander-opent-wildlands-adventure-zoo"},{"id":"3","title":"Dani\xebl Lohues op 1 van eerste Drentse 1000","description":"Hier kom ik weg stond in de eerste editie op nummer \xe9\xe9n.","date":"31 december, 2021","imageUrl":"https://i.regiogroei.cloud/42d8a1c1-d6e9-3ce2-8c91-db45997622f3.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/176904/dit-is-de-lijst-van-de-drentse-1000-met-daniel-lohues-als-nummer-1"},{"id":"4","title":"\'Boerderijgezin\' Ruinerwold ontdekt","description":"In een afgelegen boerderij in Ruinerwold wordt een gezin ontdekt dat wacht op het einde der tijden.","date":"15 oktober, 2019","imageUrl":"https://i.regiogroei.cloud/0fbe1042-4fef-3a6b-b035-784f30a97315.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/153029/vader-met-zes-kinderen-zit-jaren-in-kelder-ruinerwold-familie-wachtte-op-einde-der-tijden"},{"id":"5","title":"De wolf wordt na honderden jaren gezien in Drenthe","description":"Voor het eerst sinds 1780 loopt het dier in onze provincie.","date":"15 maart, 2015","imageUrl":"https://i.regiogroei.cloud/f00a139e-ee85-3ebb-bcb8-e55479b9bdb8.jpg","articleUrl":"https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/"},{"id":"6","title":"Wolf doodgeschoten in Wapse","description":"De wolf beet een schapenhouder in zijn arm. Burgemeester Rikus Jager liet het beest afschieten.","date":"9 juli, 2023","imageUrl":"https://i.regiogroei.cloud/e2f2f5dc-c861-3553-958b-5c18946b4639.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/15710279/wolf-doodgeschoten-na-bijtincident-met-schapenboer-wapse"},{"id":"7","title":"FC Emmen voor het eerst naar de Eredivisie","description":"FC Emmen verslaat Sparta en promoveert voor het eerst naar het hoogste niveau.","date":"20 mei, 2018","imageUrl":"https://i.regiogroei.cloud/78f3e5ac-39db-38dc-8218-8eb5be3c9309.jpg","articleUrl":"https://www.rtvdrenthe.nl/nieuws/134862/kijk-terug-de-huldiging-van-fc-emmen"}]}');var y=n(397);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=f.default.get("window").width,O=x.events,I=function(e){var t=e.replace(",","").split(" "),n=(0,o.default)(t,3),r=n[0],i=n[1],a=n[2],l={januari:0,februari:1,maart:2,april:3,mei:4,juni:5,juli:6,augustus:7,september:8,oktober:9,november:10,december:11}[i.toLowerCase()];return new Date(parseInt(a),l,parseInt(r))},D=function(){var e=(0,a.default)(O).sort((function(){return Math.random()-.5})).slice(0,6),t=Math.floor(Math.random()*e.length);return{prePlaced:e[t],remaining:e.filter((function(e,n){return n!==t}))}},_={code:"function AppTsx1(){const{isDragging,cardPosition,index,dropIndex,withSpring}=this.__closure;if(!isDragging){return{transform:[{translateY:0}]};}const GAP_SIZE=100;const cardY=cardPosition.value;const itemPosition=index*80;const distance=cardY-itemPosition;let translateY=0;if(dropIndex!==null){if(index<dropIndex){translateY=0;}else if(index>=dropIndex){translateY=GAP_SIZE;}}return{transform:[{translateY:withSpring(translateY,{damping:15})}]};}"},k=function(e){var t=e.fact,n=(e.isFirst,e.isLast,e.dropIndex),r=e.index,i=e.cardPosition,a=e.isDragging,o=(0,w.useAnimatedStyle)(function(){var e=function(){if(!a)return{transform:[{translateY:0}]};i.value;var e=0;return null!==n&&(r<n?e=0:r>=n&&(e=100)),{transform:[{translateY:(0,w.withSpring)(e,{damping:15})}]}};return e.__closure={isDragging:a,cardPosition:i,index:r,dropIndex:n,withSpring:w.withSpring},e.__workletHash=0x9b7d416b7d4,e.__initData=_,e}());return(0,y.jsx)(w.default.View,{style:[E.timelineItemContainer,o],children:(0,y.jsxs)(d.default,{style:[E.timelineFact,n===r&&E.timelineFactHighlight],children:[(0,y.jsx)(h.default,{source:{uri:t.imageUrl},style:E.timelineImage,resizeMode:"cover"}),(0,y.jsxs)(d.default,{style:E.timelineFactContent,children:[(0,y.jsx)(u.default,{style:E.timelineTitle,children:t.title}),(0,y.jsx)(u.default,{style:E.timelineDate,children:t.date})]})]})})},C={code:"function AppTsx2(){const{translateX,translateY,withSpring,isDragging,withTiming}=this.__closure;return{transform:[{translateX:translateX.value},{translateY:translateY.value},{scale:withSpring(isDragging?1.05:1)}],opacity:withTiming(isDragging?0.8:1)};}"},F={code:"function AppTsx3(event){const{translateX,translateY,runOnJS,setDropZoneIndex,placedFacts}=this.__closure;translateX.value=event.nativeEvent.translationX;translateY.value=event.nativeEvent.translationY;const MIN_DRAG_Y=20;if(Math.abs(event.nativeEvent.translationY)<MIN_DRAG_Y){runOnJS(setDropZoneIndex)(null);return;}const cardHeight=120;const timelineItemHeight=80;const timelineStartY=200;const cardCenterY=event.nativeEvent.absoluteY;const relativeY=cardCenterY-timelineStartY;const targetIndex=Math.round(relativeY/timelineItemHeight);const clampedIndex=Math.max(0,Math.min(targetIndex,placedFacts.length));if(clampedIndex>=0&&clampedIndex<=placedFacts.length){runOnJS(setDropZoneIndex)(clampedIndex);}}"},T={code:"function AppTsx4(){const{runOnJS,setIsDragging,setDropZoneIndex}=this.__closure;runOnJS(setIsDragging)(true);runOnJS(setDropZoneIndex)(null);}"},P={code:"function AppTsx5(){const{runOnJS,setIsDragging,dropZoneIndex,translateY,translateX,checkPlacement,withSpring,setDropZoneIndex}=this.__closure;runOnJS(setIsDragging)(false);if(dropZoneIndex!==null&&(Math.abs(translateY.value)>20||Math.abs(translateX.value)>20)){runOnJS(checkPlacement)(dropZoneIndex);}translateX.value=withSpring(0);translateY.value=withSpring(0);runOnJS(setDropZoneIndex)(null);}"};function Y(){var e=(0,v.useState)("initial"),t=(0,o.default)(e,2),n=t[0],i=t[1],s=(0,v.useState)(0),f=(0,o.default)(s,2),x=f[0],S=f[1],j=(0,v.useState)([]),_=(0,o.default)(j,2),Y=_[0],z=_[1],M=(0,v.useState)(null),B=(0,o.default)(M,2),H=B[0],J=B[1],U=(0,v.useState)(0),R=(0,o.default)(U,2),A=R[0],Z=R[1],L=(0,v.useState)(0),W=(0,o.default)(L,2),X=W[0],G=W[1],V=(0,v.useState)(!1),N=(0,o.default)(V,2),$=N[0],K=N[1],q=(0,v.useState)(null),Q=(0,o.default)(q,2),ee=Q[0],te=Q[1],ne=(0,v.useState)([]),re=(0,o.default)(ne,2),ie=re[0],ae=re[1],oe=(0,v.useState)([]),le=(0,o.default)(oe,2),se=le[0],de=le[1],ce=(0,v.useState)((function(){return D().prePlaced})),ue=(0,o.default)(ce,2),ge=ue[0],fe=(ue[1],(0,w.useSharedValue)(0)),he=(0,w.useSharedValue)(0);(0,v.useEffect)((function(){var e;return"playing"===n&&H&&(e=setInterval((function(){G(Math.floor((Date.now()-H)/1e3))}),1e3)),function(){return clearInterval(e)}}),[n,H]);var pe=function(){var e=(0,a.default)(O).filter((function(e){return e.id!==ge.id})).sort((function(){return Math.random()-.5})).slice(0,5);ae([ge].concat((0,a.default)(e))),de(e),i("playing"),J(Date.now()),S(0),z([b(b({},ge),{},{position:0})]),Z(0),G(0),K(!1),te(null),fe.value=0,he.value=0},me=function(e){var t=se[x],n=ve(t,e);if(console.log("Placement result:",{fact:t.title,dropIndex:e,isCorrect:n,currentScore:A}),n){var r=(0,a.default)(Y);r.splice(e,0,b(b({},t),{},{position:e})),z(r);var i=r.length-1;console.log("Updating score:",{placedFactsLength:r.length,newScore:i}),Z(i),x<se.length-1?S((function(e){return e+1})):we(!0)}else we(!1)},ve=function(e,t){var n=I(e.date);if(console.log("Checking placement:",{fact:e.title,factDate:n.toISOString(),dropIndex:t}),0===t){var r=I(Y[0].date);return console.log("Comparing with first:",r.toISOString()),n<r}if(t===Y.length){var i=I(Y[Y.length-1].date);return console.log("Comparing with last:",i.toISOString()),n>i}var a=I(Y[t-1].date),o=I(Y[t].date);return console.log("Comparing between:",{before:a.toISOString(),after:o.toISOString()}),n>a&&n<o},we=function(e){i("gameOver"),J(null),e&&Z(5)},xe=function(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`},ye=(0,w.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:fe.value},{translateY:he.value},{scale:(0,w.withSpring)($?1.05:1)}],opacity:(0,w.withTiming)($?.8:1)}};return e.__closure={translateX:fe,translateY:he,withSpring:w.withSpring,isDragging:$,withTiming:w.withTiming},e.__workletHash=283004719374,e.__initData=C,e}()),Se=function(){var e=function(e){fe.value=e.nativeEvent.translationX,he.value=e.nativeEvent.translationY;if(Math.abs(e.nativeEvent.translationY)<20)(0,w.runOnJS)(te)(null);else{var t=e.nativeEvent.absoluteY-200,n=Math.round(t/80),r=Math.max(0,Math.min(n,Y.length));r>=0&&r<=Y.length&&(0,w.runOnJS)(te)(r)}};return e.__closure={translateX:fe,translateY:he,runOnJS:w.runOnJS,setDropZoneIndex:te,placedFacts:Y},e.__workletHash=0x95c075a20fe,e.__initData=F,e}(),be=function(){var e=function(){(0,w.runOnJS)(K)(!0),(0,w.runOnJS)(te)(null)};return e.__closure={runOnJS:w.runOnJS,setIsDragging:K,setDropZoneIndex:te},e.__workletHash=7464251419816,e.__initData=T,e}(),je=function(){var e=function(){(0,w.runOnJS)(K)(!1),null!==ee&&(Math.abs(he.value)>20||Math.abs(fe.value)>20)&&(0,w.runOnJS)(me)(ee),fe.value=(0,w.withSpring)(0),he.value=(0,w.withSpring)(0),(0,w.runOnJS)(te)(null)};return e.__closure={runOnJS:w.runOnJS,setIsDragging:K,dropZoneIndex:ee,translateY:he,translateX:fe,checkPlacement:me,withSpring:w.withSpring,setDropZoneIndex:te},e.__workletHash=3409746306700,e.__initData=P,e}();if("initial"===n)return(0,y.jsx)(m.GestureHandlerRootView,{style:{flex:1},children:(0,y.jsxs)(c.default,{style:E.container,children:[(0,y.jsxs)(d.default,{style:E.content,children:[(0,y.jsx)(u.default,{style:E.header,children:"Hitster"}),(0,y.jsx)(d.default,{style:E.factCard,children:(0,y.jsxs)(d.default,{style:E.cardContent,children:[(0,y.jsx)(h.default,{source:{uri:ge.imageUrl},style:E.cardImage,resizeMode:"cover"}),(0,y.jsxs)(d.default,{style:E.cardTextContent,children:[(0,y.jsx)(u.default,{style:E.factTitle,children:ge.title}),(0,y.jsx)(u.default,{style:E.factDescription,children:ge.description})]})]})}),(0,y.jsx)(g.default,{style:E.playButton,onPress:pe,children:(0,y.jsx)(u.default,{style:E.playButtonText,children:"SPELEN"})})]}),(0,y.jsx)(l.StatusBar,{style:"auto"})]})});if("gameOver"===n){var Oe=(0,a.default)(ie).sort((function(e,t){var n=I(e.date),r=I(t.date);return n.getTime()-r.getTime()})),Ie=function(){var e=(0,r.default)((function*(e){try{(yield p.default.canOpenURL(e))?yield p.default.openURL(e):console.log("Don't know how to open URL: "+e)}catch(t){console.error("An error occurred while opening the URL:",t)}}));return function(t){return e.apply(this,arguments)}}();return(0,y.jsx)(m.GestureHandlerRootView,{style:{flex:1},children:(0,y.jsxs)(c.default,{style:E.container,children:[(0,y.jsxs)(d.default,{style:E.content,children:[(0,y.jsx)(u.default,{style:E.header,children:"Game Over!"}),(0,y.jsxs)(u.default,{style:E.scoreText,children:["Score: ",A,"/5"]}),(0,y.jsxs)(u.default,{style:E.timeText,children:["Time: ",xe(X)]}),(0,y.jsx)(u.default,{style:E.chronologyHeader,children:"De juiste volgorde:"}),(0,y.jsx)(d.default,{style:E.chronologyList,children:Oe.map((function(e,t){return(0,y.jsxs)(g.default,{style:E.chronologyItem,onPress:function(){return Ie(e.articleUrl)},children:[(0,y.jsx)(h.default,{source:{uri:e.imageUrl},style:E.chronologyImage,resizeMode:"cover"}),(0,y.jsxs)(d.default,{style:E.chronologyContent,children:[(0,y.jsx)(u.default,{style:E.chronologyTitle,children:e.title}),(0,y.jsx)(u.default,{style:E.chronologyDate,children:e.date}),(0,y.jsx)(u.default,{style:E.readMore,children:"Lees meer \u2192"})]})]},e.id)}))}),(0,y.jsx)(g.default,{style:E.playButton,onPress:pe,children:(0,y.jsx)(u.default,{style:E.playButtonText,children:"SPEEL OPNIEUW"})})]}),(0,y.jsx)(l.StatusBar,{style:"auto"})]})})}var De=se[x];return(0,y.jsx)(m.GestureHandlerRootView,{style:{flex:1},children:(0,y.jsxs)(c.default,{style:E.container,children:[(0,y.jsxs)(d.default,{style:E.content,children:[(0,y.jsx)(u.default,{style:E.header,children:"Hitster"}),(0,y.jsx)(u.default,{style:E.timer,children:xe(X)}),(0,y.jsx)(d.default,{style:E.timeline,children:Y.map((function(e,t){return(0,y.jsx)(k,{fact:e,isFirst:0===t,isLast:t===Y.length-1,dropIndex:ee,index:t,cardPosition:he,isDragging:$},e.id)}))}),(0,y.jsx)(m.PanGestureHandler,{onBegan:be,onEnded:je,onGestureEvent:Se,minDist:10,enabled:!0,children:(0,y.jsx)(w.default.View,{style:[E.factCard,ye],children:(0,y.jsxs)(d.default,{style:E.cardContent,children:[(0,y.jsx)(h.default,{source:{uri:De.imageUrl},style:E.cardImage,resizeMode:"cover"}),(0,y.jsxs)(d.default,{style:E.cardTextContent,children:[(0,y.jsx)(u.default,{style:E.factTitle,children:De.title}),(0,y.jsx)(u.default,{style:E.factDescription,children:De.description})]})]})})}),(0,y.jsx)(u.default,{style:E.dragHint,children:"Sleep omhoog voor eerder, omlaag voor later"})]}),(0,y.jsx)(l.StatusBar,{style:"auto"})]})})}var E=s.default.create({container:{flex:1,backgroundColor:"#fff"},content:{flex:1,alignItems:"center",paddingTop:20},header:{fontSize:32,fontWeight:"bold",marginBottom:20},timer:{fontSize:24,fontWeight:"600",color:"#666",marginBottom:20},timeline:{width:"100%",paddingHorizontal:20,marginBottom:20,paddingBottom:100},timelineItemContainer:{width:"100%",marginBottom:8},timelineFact:{backgroundColor:"#F5F5F5",borderRadius:8,overflow:"hidden",flexDirection:"row",shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.1,shadowRadius:2,elevation:1},timelineImage:{width:60,height:60,backgroundColor:"#E0E0E0"},timelineFactContent:{flex:1,padding:10},timelineTitle:{fontSize:16,fontWeight:"600"},timelineDate:{fontSize:14,color:"#666",marginTop:4},factCard:{width:.9*j,backgroundColor:"#FFFFFF",borderRadius:12,marginBottom:20,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4,elevation:3,overflow:"hidden"},cardContent:{flexDirection:"row"},cardImage:{width:120,height:120,backgroundColor:"#F5F5F5"},cardTextContent:{flex:1,padding:15},factTitle:{fontSize:20,fontWeight:"bold",marginBottom:10},factDescription:{fontSize:16,color:"#666",lineHeight:24},dragHint:{fontSize:16,color:"#666",textAlign:"center",marginTop:10,marginBottom:20},playButton:{backgroundColor:"#34C759",paddingVertical:15,paddingHorizontal:40,borderRadius:8,marginTop:20},playButtonText:{color:"#FFFFFF",fontSize:18,fontWeight:"600"},scoreText:{fontSize:24,fontWeight:"600",marginBottom:10},timeText:{fontSize:20,color:"#666",marginBottom:20},chronologyHeader:{fontSize:20,fontWeight:"600",marginTop:20,marginBottom:10,alignSelf:"flex-start",paddingHorizontal:20},chronologyList:{width:"100%",paddingHorizontal:20},chronologyItem:{flexDirection:"row",backgroundColor:"#F5F5F5",borderRadius:8,marginBottom:12,overflow:"hidden",elevation:2,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.1,shadowRadius:2},chronologyImage:{width:70,height:70,backgroundColor:"#E0E0E0"},chronologyContent:{flex:1,padding:12,justifyContent:"center"},chronologyTitle:{fontSize:16,fontWeight:"600",marginBottom:4},chronologyDate:{fontSize:14,color:"#666"},readMore:{color:"#007AFF",fontSize:14,marginTop:4},timelineFactHighlight:{backgroundColor:"#E3F2FD",borderColor:"#007AFF",borderWidth:2}})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,i,a]=e[c],l=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,l,s]=r,d=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var c=s(n)}for(t&&t(r);d<o.length;d++)a=o[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[539],(()=>n(5036)));r=n.O(r)})();
//# sourceMappingURL=main.397bc7e9.js.map