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
  console.log("input");
  return (
    <View style={[styles.textInputContainer, inputContainerStyle]}>
      <TextInput
        {...textInputProps}
        style={[styles.textInput, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        // onBlur={onBlur}
        onBlur={() => {
          console.log("blurr blur");
          onBlur();
        }}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export { Input };
export default Input;
