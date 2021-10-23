import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomText from '../components/CustomText';
import {RippleLoader} from 'react-native-indicator';
export default function Loading({navigation: {replace}}) {
  useEffect(() => {
    setTimeout(() => {
      replace('Form');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <RippleLoader color="#37A77F" />
      <CustomText
        variant="subtext"
        black
        style={{letterSpacing: -0.5, marginVertical: '5%'}}
        text="Loading.."
      />
    </View>
  );
}
