import React, {useEffect, useState} from 'react';
import AuthNavigator from './src/navigations/AuthNavigator';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigations/MainNavigator';
const TIME = 1500;
const App = () => {
  //*STATES
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  //*CONTANTS
  const {getItem} = useAsyncStorage('accsessToken');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, TIME);

    checkLogin();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    console.log('🚀 ~ token:', token);
    token && setAccessToken(token);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {isShowSplashScreen ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
