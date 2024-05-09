import React from 'react';
import {
  ButtonComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../../components';
import {appColors, fontFamilies} from '../../../constants';
import {Google} from 'iconsax-react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <RowComponent justify="center">
        <TextComponent
          text="OR"
          color={appColors.gray4}
          font={fontFamilies.medium}
          size={16}
        />
      </RowComponent>
      <ButtonComponent
        type="primary"
        text="Login with Google"
        size={16}
        textColor={appColors.text}
        color={appColors.white}
        icon={<Google size={24} color={appColors.primary} />}
        iconFlex="left"
      />
      <ButtonComponent
      styles={{
        borderRadius: 
      }}
        type="primary"
        text="Login with Facebook"
        size={16}
        textColor={appColors.text}
        color={appColors.white}
        icon={<Google size={24} color={appColors.primary} />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
