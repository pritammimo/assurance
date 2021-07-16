/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../../../components/HeaderComponent';
import Inputcomponents from '../../../../components/Inputcomponents';
import MyStatusBar from '../../../../components/MyStatusBar';
import colors from '../../../../themes/colors/colors';
import {ProgressBar, Checkbox} from 'react-native-paper';
import normalize from '../../../../utils/helpers/normalize';
import {useNavigation} from '@react-navigation/native';
import OtpInputcomponents from '../../../../components/OtpInputComponent';
const SetPassword = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View>
        <MyStatusBar backgroundColor={colors.red} />
        <Header
          title="SET PASSWORD"
          logo={false}
          notification={false}
          isBackvisible={true}
          marginLeft={normalize(13)}
        />
        <View
          style={{paddingTop: normalize(29), paddingHorizontal: normalize(20)}}>
          <ProgressBar progress={0.8} color={colors.red} />
        </View>
        <Inputcomponents
          marginTop={normalize(15)}
          placeholder="Choose Password"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(7)}
          placeholder="Confirm Password"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <View
          style={{
            paddingRight: normalize(34),
            paddingLeft: normalize(25),
            paddingTop: normalize(20),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              height: normalize(32),
              borderRadius: normalize(5),
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalize(16),
                paddingTop: normalize(4),
                color: colors.white,
                fontWeight: '700',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SetPassword;

const styles = StyleSheet.create({});
