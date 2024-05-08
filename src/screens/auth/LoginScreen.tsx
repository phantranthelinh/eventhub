import React from 'react';
import {Text, View} from 'react-native';
import {ButtonComponent, InputComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <Text>LoginScreen</Text>
      <ButtonComponent text="Login" type="primary" />
      <InputComponent />
    </View>
  );
};

export default LoginScreen;
