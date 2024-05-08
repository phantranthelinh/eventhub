import {
  View,
  ImageBackground,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  isImageBackground?: boolean;
  isScrollable?: boolean;
  title?: string;
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScrollable, title, styles, children} = props;

  const returnContainer = isScrollable ? (
    <ScrollView contentContainerStyle={isScrollable && styles}>
      {children}
    </ScrollView>
  ) : (
    <View>{children}</View>
  );
  return (
    <>
      {isImageBackground ? (
        <ImageBackground
          source={require('../assets/images/splash.png')}
          style={[globalStyles.container]}
          imageStyle={{
            flex: 1,
          }}>
          <SafeAreaView style={[globalStyles.container, styles]}>
            {children}
          </SafeAreaView>
        </ImageBackground>
      ) : (
        <SafeAreaView style={[globalStyles.container]}>
          <View style={[globalStyles.container, styles]}>
            {returnContainer}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default ContainerComponent;
