import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Colors from '../../themes/colors/colors';
import normalize from './normalize';
import ImagePath from '../../themes/images';
export default function CountryPicker(props) {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [selectedValue, setSelectedValue] = useState(props.initialValue);
  const [price, setPrice] = useState(props.initialValue);

  function onSelectData(id, title, price) {
    // console.log(id, title, price);
    if (props.onSelectData) {
      props.onSelectData(id, title, price);
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

  function renderData(data) {
    if (props.type === 'taskType') {
      return (
        <View
          style={{
            height: normalize(50),
            width: normalize(200),
            borderWidth: 1,
            borderColor: Colors.textLigtGrey,
            alignItems: 'center',
            marginTop: normalize(15),
            borderRadius: normalize(30),
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              onSelectData(data.item._id, data.item.title, data.item.price);
              setSelectedValue(data.item.title);
              setPrice(data.item.price);
            }}
            style={{
              flexDirection: 'row',
              marginTop: normalize(12),
            }}>
            <Text
              style={{
                fontSize: normalize(14),
                marginRight: normalize(10),
                color: Colors.black,
                fontFamily: 'Poppins-Bold',
              }}>
              {data.item.title}
            </Text>
            {data.item.price && (
              <Text
                style={{
                  fontSize: normalize(12.5),
                  color: Colors.buttonColor,
                  // fontFamily: getFont('bold'),
                }}>
                ${data.item.price}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: normalize(50),
            width: normalize(200),
            borderWidth: 1,
            borderColor: Colors.textLigtGrey,
            alignItems: 'center',
            marginTop: normalize(15),
            borderRadius: normalize(30),
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              onSelectData(data.item.time, data.item.id);
              setSelectedValue(data.item.time);
            }}
            style={{
              flexDirection: 'row',
              marginTop: normalize(12),
            }}>
            <Text
              style={{
                fontSize: normalize(14),
                marginRight: normalize(10),
                color: Colors.black,
                fontFamily: 'Poppins-Bold',
              }}>
              {data.item.time}
            </Text>

            {/* <Text
          numberOfLines={1}
          style={{
            fontSize: normalize(14.5),
            width: normalize(220),
            color: Colors.black,
            fontFamily: getFont('bold'),
          }}>
          Content
        </Text> */}
          </TouchableOpacity>
        </View>
      );
    }
  }

  function openModal() {
    return (
      <SafeAreaView>
        <View style={{marginTop: normalize(30)}}>
          <Modal
            animationIn={'slideInDown'}
            animationOut={'slideOutUp'}
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            isVisible={modalVisible}
            style={{
              margin: 0,
              backgroundColor: Colors.white,
              height: normalize(200),
              bottom: 0,
              position: 'absolute',
              width: '100%',
              alignSelf: 'center',
              marginLeft: normalize(10),
              marginRight: normalize(30),
            }}
            onBackdropPress={() => setModalVisible(false)}>
            {/* <View
            style={{
              flex: 1,
              backgroundColor: '#ddd',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              backgroundColor: Colors.white,
              // borderRadius: normalize(20),
              borderTopLeftRadius: normalize(20),
              borderTopRightRadius: normalize(20),
              height: normalize(400),
              paddingLeft: normalize(20),
              paddingBottom: normalize(15),
            }}> */}
            <View style={{alignItems: 'center', alignSelf: 'center'}}>
              <FlatList
                data={props.dataList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderData}
              />
              {/* <TouchableOpacity style={{marginBottom: normalize(20)}}>
              <Text>Close</Text>
          </TouchableOpacity> */}
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: props.width,
        alignSelf: 'center',
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        marginTop: props.marginTop,
        borderRadius: normalize(30),
        justifyContent: 'center',
        backgroundColor: Colors.white,
        marginTop: normalize(20),
        height: normalize(40),
      }}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: 'row',
          width: '90%',

          marginRight: normalize(10),
          marginLeft: normalize(10),
          height: normalize(30),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {props.sideimage === true ? (
          <Image
            source={ImagePath.clock}
            resizeMode="contain"
            style={{
              height: normalize(15),
              width: normalize(15),
              marginLeft: normalize(10),
            }}
          />
        ) : null}
        <Text
          style={{
            fontSize: normalize(11.5),
            color: props.dailColor,
          }}>
          {selectedValue !== '' ? selectedValue : props.placeholder}
        </Text>

        <Image
          resizeMode="contain"
          style={{
            height: normalize(9),
            width: normalize(9),
            marginLeft: normalize(5),
            marginTop: 3,
            alignItems: 'flex-end',
          }}
          source={ImagePath.arrowDown}
        />
      </TouchableOpacity>

      {/* <TextInput
        style={{
          flex: 1,
          fontSize: normalize(12),
          color: props.textInputColor,
          // fontFamily: getFont('med'),
        }}
        maxLength={15}
        onFocus={() => {
          onFocus();
        }}
        onBlur={() => {
          onBlur();
        }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType="phone-pad"
        value={props.value}
        onChangeText={text => {
          onChangeText(text);
        }}
      /> */}
      {openModal()}
    </View>
  );
}

CountryPicker.propTypes = {
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
  sideimage: PropTypes.bool,
  type: PropTypes.string,
  borderWidth: PropTypes.number,
  width: PropTypes.string,
};

CountryPicker.defaultProps = {
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
  sideimage: true,
  type: null,
  borderWidth: 1,
  width: '90%',
};
