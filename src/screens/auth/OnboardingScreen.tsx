import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {TextComponent} from '../../components';
import {info} from '../../constants/info';
import {colors} from '../../constants/theme';
import {globalStyles} from '../../styles/globalStyles';
import {fontFamily} from '../../constants/fontFamily';

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
          <TextComponent
            text="Skip"
            size={16}
            color={colors.white}
            font={fontFamily.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent
            text="Next"
            size={16}
            color={colors.white}
            font={fontFamily.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
