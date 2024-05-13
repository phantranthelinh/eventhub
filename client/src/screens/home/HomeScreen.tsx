import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';
import {Button} from 'react-native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{
      paddingTop: 50
    }}>
      <Text>HomeScreen</Text>
      <Button title="logout" onPress={() => dispatch(removeAuth())} />
    </View>
  );
};

export default HomeScreen;
