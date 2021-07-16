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
import DatePicker from '../../../../utils/helpers/DatePicker';
const Registrationstep2 = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View>
        <MyStatusBar backgroundColor={colors.red} />
        <Header
          title="REGISTER"
          logo={false}
          notification={false}
          isBackvisible={true}
          marginLeft={normalize(45)}
        />
        <View
          style={{paddingTop: normalize(29), paddingHorizontal: normalize(20)}}>
          <ProgressBar progress={0.4} color={colors.red} />
        </View>
        <View style={{marginTop: normalize(20)}}>
          <DatePicker
            // value={selectedDate}
            borderColor={'#D0DBEA'}
            dailColor={'#333333'}
            // onSelectDate={data => setSelectedDate(data.dateString)}
          />
        </View>
        <Inputcomponents
          marginTop={normalize(10)}
          placeholder="Nationality"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(10)}
          placeholder="Phone Number"
          multiline={false}
          height={normalize(40)}
        />
        <Inputcomponents
          marginTop={normalize(10)}
          placeholder="Email"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(10)}
          placeholder="Referral Value"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
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
            onPress={() => navigation.navigate('EmailConfirmation')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalize(16),
                paddingTop: normalize(4),
                color: colors.white,
                fontWeight: '700',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registrationstep2;
