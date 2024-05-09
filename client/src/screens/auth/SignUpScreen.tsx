import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
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

type FormStateType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [formState, setFormState] = useState<FormStateType>(initialState);

  const handleChangeInput = (name: string, value: string) => {
    setFormState(prevState => ({...prevState, [name]: value}));
  };
  return (
    <ContainerComponent isImageBackground isScrollable back>
      <SectionComponent>
        <TextComponent
          text="Sign Up"
          size={24}
          color={appColors.text}
          font={fontFamilies.medium}
        />
        <SpaceComponent height={22} />
        <InputComponent
          onChange={value => handleChangeInput('username', value)}
          value={formState.username}
          affix={<User size={22} color={appColors.gray} />}
          placeholder="Full name"
        />
        <SpaceComponent height={19} />
        <InputComponent
          onChange={value => handleChangeInput('email', value)}
          value={formState.email}
          affix={<Sms size={22} color={appColors.gray} />}
          placeholder="Email"
          type="email-address"
        />
        <SpaceComponent height={19} />
        <InputComponent
          onChange={value => handleChangeInput('password', value)}
          value={formState.password}
          affix={<Lock size={22} color={appColors.gray} />}
          placeholder="Password"
          isPassword={true}
        />
        <SpaceComponent height={19} />
        <InputComponent
          onChange={value => handleChangeInput('confirmPassword', value)}
          value={formState.confirmPassword}
          affix={<Lock size={22} color={appColors.gray} />}
          placeholder="Password"
          isPassword={true}
        />
        <SpaceComponent height={20} />
      </SectionComponent>
      <SectionComponent
        styles={{
          alignItems: 'center',
        }}>
        <ButtonComponent
          text="SIGN IN"
          type="primary"
          size={16}
          styles={{
            width: '80%',
          }}
          font={fontFamilies.medium}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Aldready have an account? " size={15} />
          <ButtonComponent
            text="Sign in"
            type="link"
            size={15}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
