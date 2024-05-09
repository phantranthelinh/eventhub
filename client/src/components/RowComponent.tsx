import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {justify, onPress, styles, children} = props;
  return onPress ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        globalStyles.row,
        styles,
        {
          justifyContent: justify,
        },
      ]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View
      style={[
        globalStyles.row,
        styles,
        {
          justifyContent: justify,
        },
      ]}>
      {children}
    </View>
  );
};

export default RowComponent;
