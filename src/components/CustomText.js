import React from 'react';
import {Text} from 'react-native';
import theme from '../utils/theme';
import {scale} from '../utils/fonts.js';

export default function CustomText(props) {
  return (
    <Text
      style={[
        {
          color: props.textColor
            ? props.textColor
            : props.primary
            ? theme.colors.primary
            : props.secondary
            ? theme.colors.secondary
            : props.error
            ? theme.colors.red
            : props.white
            ? theme.colors.white
            : props.gray
            ? theme.colors.darkGray
            : theme.colors.black,

          fontSize: scale(theme.fontSizes[props.variant]),
          fontFamily: props.bold
            ? 'Circular Std Bold'
            : theme.fontFamilies[props.variant],
          textDecorationLine: props.underline ? 'underline' : 'none',
          marginVertical: props.noDefaultMargin ? 0 : '2%',
          textAlign: props.center ? 'center' : 'left',
        },
        props.style || {},
      ]}
      numberOfLines={props.numberOfLines}
      onPress={props.onPress}>
      {props.text}
      {props.children}
    </Text>
  );
}
