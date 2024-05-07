import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {fontFamily} from '../constants/fontFamily';
import {colors} from '../constants/theme';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, font} = props;
  return (
    <Text
      style={[
        {
          color: color ?? colors.text,
          flex: flex ?? 0,
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamily.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
