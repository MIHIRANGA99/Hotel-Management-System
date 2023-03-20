import React from "react";
import { View } from "react-native";
import TextField from "../../Components/TextField/TextField";

const TextFieldComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: "85%" }}>
        {/* email */}
        <TextField
          keyboardType="email-address"
          placeholder="Sample email Placeholder"
          onChange={(text) => console.log(text)}
        />

        {/* password */}
        <TextField
          isPassword
          placeholder="Sample password Placeholder"
          onChange={(text) => console.log(text)}
        />

        {/* normal */}
        <TextField
          placeholder="Sample normal Placeholder"
          onChange={(text) => console.log(text)}
        />
      </View>
    </View>
  );
};

export default TextFieldComponent;
