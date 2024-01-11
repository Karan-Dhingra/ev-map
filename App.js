import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from './app/screen/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigation from './app/navigations/TabNavigation';
import * as SecureStore from "expo-secure-store";
import * as Location from 'expo-location';
import * as SplashScreen from 'expo-splash-screen';
import { UserLocationContext } from './app/contexts/UserLocationContext';

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={`pk_test_Y29vbC1mbGFtaW5nby04NC5jbGVyay5hY2NvdW50cy5kZXYk`}>
      <UserLocationContext.Provider value={{location, setLocation}}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  },
});
