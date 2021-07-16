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
const Emailconfirmation = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View>
        <MyStatusBar backgroundColor={colors.red} />
        <Header
          title="EMAIL CONFIRMATION"
          logo={false}
          notification={false}
          isBackvisible={true}
          marginLeft={normalize(0)}
        />
        <View
          style={{paddingTop: normalize(29), paddingHorizontal: normalize(20)}}>
          <ProgressBar progress={0.6} color={colors.red} />
        </View>
        <View style={{paddingTop: normalize(27)}}>
          <Text style={{textAlign: 'center', fontSize: normalize(20)}}>
            Enter The Code Sent to abc@gmail.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: normalize(20),
          }}>
          <OtpInputcomponents
            multiline={false}
            keyboardType="numeric"
            maxlength={1}
          />
          <OtpInputcomponents
            multiline={false}
            keyboardType="numeric"
            maxlength={1}
          />
          <OtpInputcomponents
            multiline={false}
            keyboardType="numeric"
            maxlength={1}
          />
          <OtpInputcomponents
            multiline={false}
            keyboardType="numeric"
            maxlength={1}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: normalize(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: normalize(12)}}>
            Didn't Receive the code? {'  '}{' '}
          </Text>
          <Text
            style={{
              color: colors.red,
              textAlign: 'center',
              fontSize: normalize(12),
            }}>
            RESEND CODE
          </Text>
        </View>
        <View
          style={{
            paddingRight: normalize(34),
            paddingLeft: normalize(25),
            paddingTop: normalize(12),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              height: normalize(32),
              borderRadius: normalize(5),
            }}
            onPress={() => navigation.navigate('SetPassword')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalize(14),
                paddingTop: normalize(4),
                color: colors.white,
                fontWeight: '700',
              }}>
              Verify & proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Emailconfirmation;
