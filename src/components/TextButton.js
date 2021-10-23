import React from 'react';
import {Text, TouchableOpacity, StyleSheet , Pressable} from 'react-native';
import CustomText from '../texts/CustomText.js';
import theme from '../../utils/theme.js';
import {scale} from '../../utils/fonts.js';

export default function TextButton(props) {
  const textVariants = {
    transparent: 'text',
    stroke: 'text',
    option: 'text',
    filled: 'subtext',
    unfilled: 'text',
  };

  const primaryVariants = ['stroke', 'transparent', 'option'];
  const grayVariants = ['unfilled'];
  const whiteVariants = ['filled'];
  const boldVariants = ['stroke', 'transparent'];

  return (
    <Pressable
      disabled={props.disabled}
      style={[
        styles.button,
        styles[props.variant],
        {
          opacity: props.disabled ? 0.3 : 1,
          textTransform: props.capitalize ? 'capitalize' : 'none',
        },
        props.style || {},
      ]}
      activeOpacity={0.6}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      delayPressIn={0}
      onFocus = {props.onFocus}
      onPress={props.onPress}
      // key={props.key || `${Math.random()}-t`}
    >
      <CustomText
        variant={props.textVariant || textVariants[props.variant]}
        textColor ={props.textColor}
        primary={!props.secondary && primaryVariants.includes(props.variant)}
        gray={grayVariants.includes(props.variant)}
        secondary={props.secondary}
        white={whiteVariants.includes(props.variant)}
        bold={boldVariants.includes(props.variant)}
        noDefaultMargin={props.noDefaultMargin}
        onPress = {props.onPress}
        text={props.text}>
        {props.children}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    paddingHorizontal: '13%',
  },
  transparent: {
    paddingVertical: '3%',
    paddingHorizontal: '5%',
  },
  stroke: {
    borderWidth: scale(2.1),
    borderRadius: theme.roundness,
    borderColor: theme.colors.primary,
  },
  filled: {
    borderWidth: scale(2.1),
    borderRadius: theme.roundness,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  option: {
    borderWidth: scale(1.4),
    borderRadius: theme.roundness,
    borderColor: theme.colors.primary,
  },
});
