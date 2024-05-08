import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {SpaceComponent} from '../components';
import {appColors, appInfo} from '../constants';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash.png')}
      style={styles.container}
      imageStyle={{
        flex: 1,
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
