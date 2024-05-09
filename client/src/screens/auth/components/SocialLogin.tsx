import React from 'react';
import {
  ButtonComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../../components';
import {appColors, fontFamilies} from '../../../constants';
import {FacebookSvg, GoogleSvg} from '../../../assets/svgs';

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
        styles={{
          borderRadius: 12,
          marginBottom: 12,
          gap: 6,
        }}
        text="Login with Google"
        size={16}
        textColor={appColors.text}
        color={appColors.white}
        icon={<GoogleSvg />}
        iconFlex="left"
      />
      <ButtonComponent
        styles={{
          borderRadius: 12,
          gap: 6,
        }}
        type="primary"
        text="Login with Facebook"
        size={16}
        textColor={appColors.text}
        color={appColors.white}
        icon={<FacebookSvg />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
