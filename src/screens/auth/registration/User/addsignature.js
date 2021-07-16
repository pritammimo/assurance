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
  Image,
} from 'react-native';
import Header from '../../../../components/HeaderComponent';
import Inputcomponents from '../../../../components/Inputcomponents';
import MyStatusBar from '../../../../components/MyStatusBar';
import colors from '../../../../themes/colors/colors';
import {ProgressBar, Checkbox} from 'react-native-paper';
import normalize from '../../../../utils/helpers/normalize';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../../../themes/icon';
const Addsignature = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View>
        <MyStatusBar backgroundColor={colors.red} />
        <Header
          title="ADD SIGNATURE"
          logo={false}
          notification={true}
          isBackvisible={true}
          marginLeft={normalize(10)}
        />
        <Inputcomponents
          marginTop={normalize(35)}
          placeholder="Write Your Signature"
          heightBox={true}
          multiline={true}
          height={normalize(140)}
        />
        <View
          style={{
            paddingHorizontal: normalize(20),
            paddingTop: normalize(30),
            paddingBottom: normalize(10),
            flexDirection: 'row',
          }}>
          <Image
            style={{height: normalize(40), width: normalize(40)}}
            source={Icons.brokerMandateIcon}
            resizeMode="contain"
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalize(18),
              paddingHorizontal: normalize(10),
              paddingTop: normalize(2),
            }}>
            Show Broker Mandate
          </Text>
          <Image
            style={{
              height: normalize(20),
              width: normalize(17),
              marginTop: normalize(6),
              marginLeft: normalize(15),
            }}
            source={Icons.rightIcon}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: normalize(5),
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={colors.red}
            uncheckedColor={colors.black}
          />
          <Text style={{fontSize: normalize(14), paddingRight: normalize(15)}}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </Text>
        </View>
        <Text
          style={{
            fontSize: normalize(14),
            paddingHorizontal: normalize(15),
            textAlign: 'justify',
          }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took.
        </Text>
        <View
          style={{
            paddingHorizontal: normalize(23),
            paddingTop: normalize(10),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              height: normalize(32),
              borderRadius: normalize(5),
            }}
            onPress={() => navigation.navigate('Policy')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalize(16),
                paddingTop: normalize(4),
                color: colors.white,
                fontWeight: '700',
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Addsignature;
