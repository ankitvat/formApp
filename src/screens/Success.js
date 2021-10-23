import React from 'react';
import {View, Text} from 'react-native';
import CustomText from '../components/CustomText';

export default function Success() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <CustomText variant="h4" gray text="Form has been submitted" />
      <CustomText variant="h4" gray text="Thank you" />
    </View>
  );
}
