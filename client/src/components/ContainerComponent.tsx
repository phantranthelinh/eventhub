import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftSvg} from '../assets/svgs';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';

interface Props {
  isImageBackground?: boolean;
  isScrollable?: boolean;
  title?: string;
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScrollable, back, title, styles, children} =
    props;

  const navigation: any = useNavigation();
  const headerComponent = () => {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        {back && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              minHeight: 48,
              minWidth: 48,
              paddingVertical: 10,
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.canGoBack() && navigation.goBack()}>
                <ArrowLeftSvg />
              </TouchableOpacity>
            )}
          </RowComponent>
        )}

        {returnContainer}
      </View>
    );
  };

  const returnContainer = isScrollable ? (
    <ScrollView
      contentContainerStyle={isScrollable && styles}
      showsVerticalScrollIndicator={false}>
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
          <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
        </ImageBackground>
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <View style={[globalStyles.container, styles]}>
            {headerComponent()}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default ContainerComponent;
