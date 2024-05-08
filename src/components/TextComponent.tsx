import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {fontFamilies} from '../constants/fontFamilies';
import {appColors} from '../constants';

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
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamilies.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
