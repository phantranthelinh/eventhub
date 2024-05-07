import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {info} from '../../constants/info';
import {colors} from '../../constants/theme';
import {globalStyles} from '../../styles/globalStyles';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        activeDotColor={colors.white}
        index={index}
        onIndexChanged={num => setIndex(num)}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: info.sizes.WIDTH,
            height: info.sizes.HEIGHT,
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: info.sizes.WIDTH,
            height: info.sizes.HEIGHT,
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: info.sizes.WIDTH,
            height: info.sizes.HEIGHT,
          }}
        />
      </Swiper>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 12,
          position: 'absolute',
          bottom: 12,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
