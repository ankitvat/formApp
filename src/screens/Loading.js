import React from 'react';
import {View, Text} from 'react-native';
import CustomText from '../components/CustomText';
import RippleLoader from 'react-native-indicator';
export default function Loading() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomText
        variant="subtext"
        black
        style={{letterSpacing: -0.5}}
        text="Loading"
      />
    </View>
  );
}
