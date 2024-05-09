import React, {ReactNode} from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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
  font?: string;
  size?: number;
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
    size,
    onPress,
    font,
  } = props;
  return (
    <>
      {type === 'primary' ? (
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              globalStyles.button,
              globalStyles.shadow,

              {
                backgroundColor: color ?? appColors.primary,
                width: '90%',
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
                  // flex: icon && iconFlex === 'right' ? 1 : 0,
                },
              ]}
              font={font ? font : fontFamilies.regular}
              size={size ?? 14}
            />
            {icon && iconFlex === 'right' && icon}
          </TouchableOpacity>
        </View>
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
