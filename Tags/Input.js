import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const Input = (props) => {
  const {
    value,
    onChangeText,
    onBlur,
    onSubmitEditing,
    inputStyle,
    inputContainerStyle,
    textInputProps,
  } = props;

  return (
    <View style={[styles.textInputContainer, inputContainerStyle]}>
      <TextInput
        {...textInputProps}
        style={[styles.textInput, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export { Input };
export default Input;
