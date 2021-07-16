import React, {Fragment, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';
import Colors from '../../themes/colors/colors';
import normalize from '../../utils/helpers/normalize';
import ImagePath from '../../themes/icon';
const moment = require('moment');
export default function DatePicker(props) {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [selectedValue, setSelectedValue] = useState(props.initialValue);

  function onSelectDate(data) {
    if (props.onSelectDate) {
      props.onSelectDate(data);
    }
  }

  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }

  function onFocus() {
    if (props.onFocus) {
      props.onFocus();
    }
  }

  function onBlur() {
    if (props.onBlur) {
      props.onBlur();
    }
  }

  function openModal() {
    return (
      <SafeAreaView>
        <Modal
          animationIn={'slideInRight'}
          animationOut={'slideOutLeft'}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          isVisible={modalVisible}
          style={{width: '100%', alignSelf: 'center', margin: normalize(100)}}
          animationInTiming={800}
          animationOutTiming={1000}
          onBackdropPress={() => setModalVisible(false)}>
          <View
            style={{
              margin: 0,
              backgroundColor: Colors.white,
              height: normalize(350),
              bottom: 0,
              position: 'absolute',
              width: '95%',
              alignSelf: 'center',
              marginLeft: normalize(10),
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: normalize(12),
                  marginLeft: normalize(20),
                  marginTop: normalize(10),
                  fontFamily: 'Poppins-Bold',
                  color: '#2E3E5C',
                }}>
                Calendar {moment().format('YYYY')}
              </Text>
            </View>
            <Calendar
              current={Date.now()}
              minDate={Date.now()}
              enableSwipeMonths={true}
              theme={{
                selectedDayTextColor: '#1461de',
                todayTextColor: '#00adf5',
              }}
              onDayPress={day => {
                console.log('selected day', day);
                onSelectDate(day);
                setSelectedValue(day.dateString);
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: normalize(20),
              }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    fontSize: normalize(12),
                    marginLeft: normalize(20),
                    marginTop: normalize(10),
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    color: '#FF0000',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  height: normalize(30),
                  width: normalize(60),
                  backgroundColor: '#17B009',
                  marginRight: normalize(20),
                  alignItems: 'center',
                  borderRadius: normalize(20),
                }}>
                <Text
                  style={{
                    fontSize: normalize(12),
                    marginTop: normalize(7),

                    alignSelf: 'center',
                    color: Colors.white,
                    fontWeight: 'bold',
                    fontFamily: 'Inter',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: normalize(280),
        height: normalize(40),
        backgroundColor: Colors.cream,
        borderRadius: normalize(15),
        marginLeft: normalize(15),
        borderWidth: normalize(1),
        borderColor: 'rgba(0, 0, 0, 0.21)',
        marginTop: props.marginTop,
      }}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: 'row',
          width: '90%',
          marginRight: normalize(10),
          height: normalize(40),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: normalize(14),
            color: Colors.black,
            paddingLeft: normalize(16),
          }}>
          {selectedValue !== '' ? selectedValue : 'Date of Birth'}
        </Text>

        <Image
          resizeMode="contain"
          style={{
            height: normalize(21),
            width: normalize(25),
            marginLeft: normalize(5),
            marginTop: 3,
            alignItems: 'flex-end',
          }}
          source={ImagePath.CalendarIcon}
        />
      </TouchableOpacity>

      <TextInput
        style={{
          flex: 1,
          fontSize: normalize(12),
          color: props.textInputColor,
        }}
        maxLength={15}
        onFocus={() => {
          onFocus();
        }}
        onBlur={() => {
          onBlur();
        }}
        keyboardType="phone-pad"
        value={props.value}
        onChangeText={text => {
          onChangeText(text);
        }}
      />
      {openModal()}
    </View>
  );
}

DatePicker.propTypes = {
  dataList: PropTypes.array,
  onSelectData: PropTypes.func,
  modalVisible: PropTypes.bool,
  onChangeText: PropTypes.func,
  value: PropTypes.any,
  initialValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  borderColor: PropTypes.string,
  marginTop: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  dailColor: PropTypes.string,
  textInputColor: PropTypes.string,
};

DatePicker.defaultProps = {
  dataList: [],
  onSelectData: null,
  modalVisible: false,
  onChangeText: null,
  value: null,
  initialValue: '',
  onFocus: null,
  onBlur: null,
  borderColor: '',
  marginTop: 0,
  placeholder: '',
  placeholderTextColor: '',
  dailColor: Colors.themeColor,
  textInputColor: Colors.themeColor,
};
