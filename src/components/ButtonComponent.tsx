import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';
import {appColors} from '../constants';

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
              backgroundColor: color ?? appColors.primary,
            },
            styles,
          ]}
          onPress={onPress}>
          {icon && icon}
          <TextComponent
            text={text}
            color={textColor ?? appColors.white}
            styles={[
              textStyles,
              {
                marginLeft: icon ? 12 : 0,
              },
            ]}
            font={fontFamilies.medium}
          />
          {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <TextComponent
            text={text}
            color={type === 'link' ? appColors.primary : appColors.text}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonComponent;
