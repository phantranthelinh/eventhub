import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {InputComponent, SpaceComponent, TextComponent} from '../../components';
import {Lock1, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants';
import ContainerComponent from '../../components/ContainerComponent';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContainerComponent isScrollable>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo1.png')}
          style={{
            width: 162,
            height: 144,
            resizeMode: 'contain',
          }}
        />
      </View>
      <SpaceComponent height={31} />
      <TextComponent text="Sigin" size={24} color={appColors.text} />
      <SpaceComponent height={22} />

      <InputComponent
        onChange={value => setEmail(value)}
        value={email}
        affix={<Sms size={22} color={appColors.gray} />}
        placeholder="Email"
        type="email-address"
      />
      <SpaceComponent height={19} />
      <InputComponent
        onChange={value => setPassword(value)}
        value={password}
        affix={<Lock1 size={22} color={appColors.gray} />}
        placeholder="Password"
        isPassword={true}
      />
    </ContainerComponent>
  );
};

export default LoginScreen;
