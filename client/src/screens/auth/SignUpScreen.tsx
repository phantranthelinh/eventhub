import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
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
import {LoadingModal} from '../../modals';
import authenticationAPI from '../../apis/authApi';
import {Validate} from '../../utils/validate';

type FormStateType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [formState, setFormState] = useState<FormStateType>(initialState);
  const [loading, setLoading] = useState(false);
  const handleChangeInput = (name: string, value: string) => {
    setFormState(prevState => ({...prevState, [name]: value}));
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    const {email, password, confirmPassword} = formState;

    const emailValidation = Validate.Email(email);
    const passValidation = Validate.Password(password);
    if (email && password && confirmPassword) {
      if (emailValidation && passValidation) {
        setLoading(true);
        setErrorMessage('');
        try {
          const response = await authenticationAPI.HandleAuthentication(
            '/register',
            {email, password},
            'post',
          );

          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      } else {
        setErrorMessage('Email không đúng định dạng');
      }
    } else {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin');
    }
  };

  useEffect(() => {
    if (formState.email && formState.password) {
      setErrorMessage('');
    }
  }, [formState.email, formState.password]);
  return (
    <>
      <LoadingModal visible={loading} />
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
            onChange={value => handleChangeInput('fullName', value)}
            value={formState.fullName}
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

        {errorMessage && (
          <SectionComponent>
            <TextComponent
              text={errorMessage}
              color={appColors.danger}
              font={fontFamilies.medium}
            />
          </SectionComponent>
        )}

        <SectionComponent>
          <ButtonComponent
            text="SIGN IN"
            type="primary"
            size={16}
            styles={{
              width: '80%',
            }}
            onPress={handleRegister}
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
    </>
  );
};

export default SignUpScreen;
