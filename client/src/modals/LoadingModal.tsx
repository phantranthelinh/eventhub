import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {TextComponent} from '../components';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants';

interface Props {
  visible: boolean;
  message?: string;
  onClose?: () => void;
}

const LoadingModal = (props: Props) => {
  const {visible, onClose, message} = props;
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      style={[globalStyles.container]}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <ActivityIndicator color={appColors.white} size={32} />
        <TextComponent text="loading" flex={0} color={appColors.white} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
