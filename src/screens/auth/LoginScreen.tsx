import {Lock1, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, Switch} from 'react-native';
import {
  ButtonComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import ContainerComponent from '../../components/ContainerComponent';
import {appColors, fontFamilies} from '../../constants';
import SocialLogin from './components/SocialLogin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  return (
    <ContainerComponent isImageBackground isScrollable>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 73,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 144,
            resizeMode: 'contain',
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent
          text="Sigin"
          size={24}
          color={appColors.text}
          font={fontFamilies.medium}
        />
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
        <SpaceComponent height={20} />

        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              onChange={() => setIsRemember(!isRemember)}
              value={isRemember}
            />
            <SpaceComponent width={8.7} />
            <TextComponent text="Remember me" size={14} />
          </RowComponent>
          <ButtonComponent text="Forgot password?" type="text" />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" size={16} />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? " size={15} />
          <ButtonComponent text="Sign up" type="link" size={15} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
