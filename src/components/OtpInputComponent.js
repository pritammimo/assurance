/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../themes/colors/colors';
import normalize from '../utils/helpers/normalize';

const OtpInputcomponents = props => {
  return (
    <View
      style={{
        width: normalize(60),
        height: normalize(60),
        backgroundColor: colors.cream,
        borderRadius: normalize(15),
        marginLeft: normalize(15),
        borderWidth: normalize(1),
        borderColor: 'rgba(0, 0, 0, 0.21)',
        marginTop: props.marginTop,
      }}>
      <TextInput
        multiline={props.multiline}
        textAlignVertical={props.textAlignVertical}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={colors.black}
        scrollEnabled={props.scrollEnabled}
        maxLength={props.maxlength}
        style={{
          paddingLeft: normalize(20),
          color: colors.black,
          height: props.height,
          borderRadius: normalize(5),
          paddingTop: props.multiline ? normalize(14) : normalize(14),
          fontSize: normalize(35),
        }}
      />
    </View>
  );
};

export default OtpInputcomponents;
