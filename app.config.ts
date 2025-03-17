import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'Hitster',
  slug: 'hitster',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff'
    }
  }
}

export default config; 