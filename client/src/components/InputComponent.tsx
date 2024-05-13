import {EyeSlash} from 'iconsax-react-native';
import React, {ReactNode, useState} from 'react';
import {
  KeyboardType,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '../constants';
interface Props {
  onChange: (val: string) => void;
  value: string;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    isPassword,
    placeholder,
    suffix,
    allowClear,
    type,
  } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        onChangeText={value => onChange(value)}
        placeholder={placeholder ?? ''}
        value={value ?? ''}
        secureTextEntry={isPassword ?? false}
        style={[styles.input]}
        placeholderTextColor={'#747688'}
        keyboardType={type}
        autoCapitalize="none"
      />
      {suffix ?? suffix}
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }>
        {isPassword ? (
          <EyeSlash size={22} color={appColors.gray} />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.gray} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    minHeight: 56,
    width: '100%',
    borderColor: appColors.gray3,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    marginLeft: 14,
    fontSize: 14,
    lineHeight: 23,
    color: appColors.text,
  },
});
