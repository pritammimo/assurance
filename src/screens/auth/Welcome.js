/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import colors from '../../themes/colors/colors';
import normalize from '../../utils/helpers/normalize';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from '../../themes/icon';
// import Icon from 'react-native-vector-icons/FontAwesome5';
const Welcome = props => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            marginLeft: 43,
            marginRight: 44,
          }}>
          <View
            style={{
              height: normalize(300),
              width: normalize(250),
              backgroundColor: colors.white,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              shadowColor: colors.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.18,
              shadowRadius: 10,
              elevation: 2,
            }}>
            <View
              style={{
                paddingLeft: normalize(25),
                paddingTop: normalize(30),
                paddingRight: normalize(23),
              }}>
              <View
                style={{
                  width: normalize(200),
                  height: normalize(300),
                  borderWidth: normalize(1),
                  borderColor: 'rgba(0, 0, 0, 0.21)',
                  borderTopRightRadius: normalize(12),
                  borderTopLeftRadius: normalize(12),
                }}>
                {/* Logo set */}
                <View
                  style={{
                    paddingTop: normalize(11),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    height: normalize(31),
                  }}>
                  <Image source={require('../../assets/images/logo1.png')} />
                </View>
                {/* Logo end */}
                <View
                  style={{
                    borderWidth: normalize(0.7),
                    borderColor: 'rgba(0, 0, 0, 0.21)',
                    marginTop: normalize(3),
                  }}
                />
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: normalize(22),
                    paddingTop: normalize(8),
                    fontWeight: '400',
                  }}>
                  What insurance Do you Have?
                </Text>
                {/* 1st row */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: normalize(8),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginLeft: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(35)}}
                        source={Icons.carIcon}
                        resizeMode="contain"
                      />
                      <Text>Car</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(35)}}
                        source={Icons.motoIcon}
                        resizeMode="contain"
                      />
                      <Text>Moto</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginRight: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(26)}}
                        source={Icons.LiabilityIcon}
                        resizeMode="contain"
                      />
                      <Text>Private Liability</Text>
                    </View>
                  </View>
                </View>
                {/* 1st row end */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: normalize(6),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginLeft: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(26)}}
                        source={Icons.HouseholdIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={{textAlign: 'center', fontSize: normalize(10)}}>
                        Household Contents
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(35)}}
                        source={Icons.BuildingIcon}
                        resizeMode="contain"
                      />
                      <Text>Building</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginRight: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(26)}}
                        source={Icons.RentalIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={{textAlign: 'center', fontSize: normalize(10)}}>
                        Rental Guarantee
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: normalize(6),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginLeft: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(26)}}
                        source={Icons.HealthIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={{textAlign: 'center', fontSize: normalize(10)}}>
                        Health Insurance
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(26)}}
                        source={Icons.LifeIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={{textAlign: 'center', fontSize: normalize(10)}}>
                        Life Insurance
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: normalize(55),
                      height: normalize(63),
                      backgroundColor: colors.cream,
                      borderWidth: normalize(1),
                      borderColor: 'rgba(0, 0, 0, 0.21)',
                      borderRadius: normalize(10),
                      marginRight: normalize(10),
                    }}>
                    <View
                      style={{alignItems: 'center', paddingTop: normalize(5)}}>
                      <Image
                        style={{height: normalize(35)}}
                        source={Icons.MortageIcon}
                        resizeMode="contain"
                      />
                      <Text>Mortage</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Lower Part start */}
        <View
          style={{
            height: normalize(300),
            backgroundColor: colors.white,
            borderTopColor: colors.white,
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.18,
            shadowRadius: 10,
            elevation: 2,
          }}>
          <View
            style={{
              alignItems: 'center',
              fontWeight: '1000',
              paddingTop: normalize(20),
              justifyContent: 'center',
              paddingLeft: normalize(40),
              paddingRight: normalize(40),
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: normalize(30),
                textAlign: 'center',
              }}>
              All Insurance In One Spot
            </Text>
          </View>
          <View
            style={{paddingRight: normalize(34), paddingLeft: normalize(33)}}>
            <Text style={{textAlign: 'center', fontSize: normalize(12)}}>
              Find all your insurance policies in one place. A personal advisor
              who answers your questions and defends your interests. Simple,
              available and transparent.
            </Text>
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
              onPress={() => props.navigation.navigate('RegistrationStep1')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: normalize(16),
                  paddingTop: normalize(4),
                  color: colors.white,
                  fontWeight: '700',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingRight: normalize(34),
              paddingLeft: normalize(33),
              paddingTop: normalize(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.lightblack,
                height: normalize(32),
                borderRadius: normalize(5),
              }}
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: normalize(16),
                  paddingTop: normalize(4),
                  color: colors.white,
                  fontWeight: '700',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
