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
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
const Registrationstep1 = props => {
  const [checked, setChecked] = useState(false);
  const [selectedCity, setSelectedCity] = useState();
  const navigation = useNavigation();
  const city = [
    {
      label: 'Kolkata',
      value: 'Kolkata',
    },
    {
      label: 'Delhi',
      value: 'Delhi',
    },
    {
      label: 'Mumbai',
      value: 'Mumbai',
    },
  ];
  const placeholder = {
    label: 'City',
    value: 'City',
    color: colors.black,
  };
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
          <ProgressBar progress={0.2} color={colors.red} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: normalize(30),
            paddingTop: normalize(10),
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={colors.red}
            uncheckedColor={colors.black}
          />
          <Text style={{fontSize: normalize(17)}}>Individuals</Text>
          <View style={{paddingLeft: normalize(15)}}>
            <Checkbox
              status={checked ? 'unchecked' : 'checked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={colors.red}
              uncheckedColor={colors.black}
            />
          </View>
          <Text style={{fontSize: normalize(17)}}>Company</Text>
        </View>
        {/* Form Field Start */}
        <Inputcomponents
          marginTop={normalize(8)}
          placeholder="Name"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(8)}
          placeholder="Surname"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(8)}
          placeholder="Address"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <Inputcomponents
          marginTop={normalize(8)}
          placeholder="Zipcode"
          multiline={false}
          height={normalize(40)}
          heightBox={false}
        />
        <View
          style={{
            width: normalize(280),
            height: normalize(40),
            backgroundColor: colors.cream,
            borderRadius: normalize(15),
            marginLeft: normalize(15),
            borderWidth: normalize(1),
            borderColor: 'rgba(0, 0, 0, 0.21)',
            marginTop: normalize(8),
          }}>
          <RNPickerSelect
            placeholder={placeholder}
            items={city}
            onValueChange={value => console.log(value)}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={selectedCity}
          />
        </View>
        <View
          style={{
            paddingRight: normalize(34),
            paddingLeft: normalize(33),
            paddingTop: normalize(10),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              height: normalize(32),
              borderRadius: normalize(5),
            }}
            onPress={() => navigation.navigate('RegistrationStep2')}>
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: normalize(16),
    paddingHorizontal: normalize(12),
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default Registrationstep1;
