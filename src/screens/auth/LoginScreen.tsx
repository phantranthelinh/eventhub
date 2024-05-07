import React from 'react';
import {Text, View} from 'react-native';
import {ButtonComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <Text>LoginScreen</Text>
      <ButtonComponent text="Login" type="primary" />
    </View>
  );
};

export default LoginScreen;
