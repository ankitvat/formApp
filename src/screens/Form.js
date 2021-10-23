import React, {useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomText from '../components/CustomText';
import {scale} from '../utils/fonts';
import TextButton from '../components/TextButton';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Form() {
  const identificationTypes = [
    {
      id: 1,
      name: 'Driver License',
      marginTop: 0,
      marginLeft: 0,
    },
    {
      id: 2,
      name: 'Non-Driver/State ID',
      marginTop: 0,
      marginLeft: '3%',
    },
    {
      id: 3,
      name: 'US Military',
      marginTop: '3%',
      marginLeft: 0,
    },
    {
      id: 4,
      name: 'US Passport',
      marginTop: '3%',
      marginLeft: '3%',
    },
  ];
  const [selectedIdType, setSelectedIdType] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  };

  const handleDateOfBirth = value => {
    var input = value;
    let currentYear = new Date().getFullYear();
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    if (values[2]) values[2] = checkValue(values[2], currentYear);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + ' / ' : v;
    });
    value = output.join('').substr(0, 14);
    setDateOfBirth(value);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: () => 0,
        android: () => -200,
      })()}
      style={styles.container}>
      <ScrollView onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <CustomText
            variant="h3"
            text="Customer Information"
            style={{letterSpacing: -1}}
          />
          <CustomText
            variant="text"
            bold
            text="Personal details"
            style={{letterSpacing: -1, paddingVertical: '2%'}}
          />
          <View style={styles.personal}>
            <View style={styles.box}>
              <CustomText variant="sosmall" gray text="First Name" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginLeft: '3%'}]}>
              <CustomText variant="sosmall" gray text="Last Name" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginTop: '3%', width: w / 1.065}]}>
              <CustomText
                variant="sosmall"
                gray
                text="Email"
                style={{marginTop: '1%'}}
              />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginTop: '3%'}]}>
              <CustomText variant="sosmall" gray text="Date of Birth" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                keyboardType="number-pad"
                maxLength={14}
                returnKeyType="done"
                onChangeText={val => handleDateOfBirth(val)}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginLeft: '3%', marginTop: '3%'}]}>
              <CustomText variant="sosmall" gray text="Phone Number" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="number-pad"
                maxLength={10}
                placeholder="+91"
                placeholderTextColor="gray"
                returnKeyType="done"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
          </View>
          <CustomText
            variant="text"
            bold
            text="Address"
            bold
            style={{letterSpacing: -1, marginVertical: '4%'}}
          />
          <View style={styles.address}>
            <View style={[styles.box, {width: w / 1.065}]}>
              <CustomText
                variant="sosmall"
                gray
                text="Street Address"
                style={{marginTop: '1%'}}
              />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginTop: '3%'}]}>
              <CustomText variant="sosmall" gray text="Apartment Number" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>

            <View style={[styles.box, {marginLeft: '3%', marginTop: '3%'}]}>
              <CustomText variant="sosmall" gray text="ZIP Code" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {width: w / 1.065, marginTop: '3%'}]}>
              <CustomText
                variant="sosmall"
                gray
                text="State"
                style={{marginTop: '1%'}}
              />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
          </View>
          <CustomText
            variant="text"
            bold
            text="Identification"
            bold
            style={{letterSpacing: -1, marginVertical: '4%'}}
          />
          <View style={styles.identification}>
            {identificationTypes.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedIdType(item.name);
                    console.log(selectedIdType);
                  }}
                  style={[
                    styles.box,
                    {
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      alignItems: 'center',

                      marginTop: item.marginTop,
                      marginLeft: item.marginLeft,
                      backgroundColor:
                        selectedIdType === item.name ? '#DBFFF2' : 'white',

                      borderWidth: selectedIdType === item ? 3 : 1,

                      borderColor:
                        selectedIdType === item.name ? '#2AD196' : 'lightgray',
                    },
                  ]}>
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: '#',
                      borderRadius: 100,
                      position: 'absolute',
                      top: 16,
                      left: 10,
                      backgroundColor: '#FCFCFC',
                      borderWidth: 3,
                      borderColor:
                        selectedIdType === item.name ? '#2AD196' : 'lightgray',
                    }}></View>
                  <CustomText
                    variant="small"
                    text={item.name}
                    style={{
                      marginLeft: '10%',
                      color: selectedIdType === item.name ? '#000' : '#8e8e8e',
                    }}
                  />
                </TouchableOpacity>
              );
            })}
            <View style={[styles.box, {marginTop: '3%'}]}>
              <CustomText variant="sosmall" gray text="ID Number" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
            <View style={[styles.box, {marginTop: '3%', marginLeft: '3%'}]}>
              <CustomText variant="sosmall" gray text="ID State" />
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={true}
                style={styles.input}
              />
            </View>
          </View>
          <TextButton />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inner: {
    width: w,
    justifyContent: 'flex-start',
    padding: '3%',
  },
  personal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: w,
  },
  box: {
    width: w / 2.2,
    height: h / 16,
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'column',
    backgroundColor: '#FCFCFC',
    borderRadius: scale(5),
  },
  input: {
    borderWidth: 0,
    color: '#000',
    fontFamily: 'Circular Std Book',
    fontSize: scale(14),
    top: 5,
    left: 15,
    width: '100%',
    position: 'absolute',
  },
  address: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: w,
  },
  identification: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: w,
  },
});
