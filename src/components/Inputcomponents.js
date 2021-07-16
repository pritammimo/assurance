/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../themes/colors/colors';
import normalize from '../utils/helpers/normalize';

const Inputcomponents = props => {
  return (
    <View
      style={{
        width: normalize(280),
        height: props.heightBox === true ? normalize(210) : normalize(40),
        backgroundColor: colors.cream,
        borderRadius: normalize(15),
        marginHorizontal: normalize(18),
        borderWidth: normalize(1),
        borderColor: 'rgba(0, 0, 0, 0.21)',
        marginTop: props.marginTop,
        justifyContent: 'center',
      }}>
      <TextInput
        multiline={props.multiline}
        textAlignVertical={props.textAlignVertical}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={
          props.heightBox === true ? colors.red : colors.black
        }
        scrollEnabled={props.scrollEnabled}
        maxLength={15}
        style={{
          paddingLeft: normalize(16),
          color: colors.black,
          height: props.height,
          borderRadius: normalize(5),
          paddingTop: props.multiline ? normalize(1) : 0,
          fontSize: props.heightBox === true ? normalize(27) : normalize(14),
        }}
      />
    </View>
  );
};

export default Inputcomponents;
