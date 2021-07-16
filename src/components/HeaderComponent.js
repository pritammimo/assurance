/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import colors from '../themes/colors/colors';
import Icons from '../themes/icon';
import Images from '../themes/images';
import {useNavigation} from '@react-navigation/native';
export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        maxHeight: normalize(40),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: normalize(10),
        paddingRight: normalize(10),
        height: normalize(40),
        zIndex: 100,
        backgroundColor: colors.white,
        borderBottomWidth: normalize(1),
      }}>
      {props.isBackvisible ? (
        <TouchableOpacity
          style={{width: normalize(75)}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: normalize(15)}}
            source={Icons.leftIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: normalize(80)}} />
      )}
      {props.logo == true ? (
        <View>
          <Image
            style={{
              height: normalize(70),
              width: normalize(100),
              marginLeft: normalize(35),
            }}
            source={Images.Logo}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View style={{marginLeft: props.marginLeft, justifyContent: 'center'}}>
          <Text style={{fontSize: normalize(15), textAlign: 'center'}}>
            {props.title}
          </Text>
        </View>
      )}
      {props.notification == true ? (
        <TouchableOpacity>
          <Image
            style={{width: normalize(22), marginLeft: normalize(80)}}
            source={Icons.infoicon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
