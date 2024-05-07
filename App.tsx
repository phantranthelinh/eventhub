import React, {useEffect, useState} from 'react';
import AuthNavigator from './src/navigations/AuthNavigator';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
const TIME = 2000;
const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, TIME);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {!isShowSplashScreen ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
