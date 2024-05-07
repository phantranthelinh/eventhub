import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/theme';
import {fontFamily} from '../constants/fontFamily';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    iconFlex,
    text,
    type,
    color,
    textColor,
    textStyles,
    styles,
    onPress,
  } = props;
  return (
    <>
      {type === 'primary' ? (
        <TouchableOpacity
          style={[
            globalStyles.button,
            {
              backgroundColor: color ?? colors.primary,
            },
            styles,
          ]}
          onPress={onPress}>
          {icon && icon}
          <TextComponent
            text={text}
            color={textColor ?? colors.white}
            styles={[
              textStyles,
              {
                marginLeft: icon ? 12 : 0,
              },
            ]}
            font={fontFamily.medium}
          />
          {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <TextComponent
            text={text}
            color={type === 'link' ? colors.primary : colors.text}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonComponent;
