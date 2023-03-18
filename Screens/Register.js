import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TextField from "../Components/TextField/TextField";
import Button from "../Components/Button/Button";
import { registerUser } from "../firebase/utils";
import mainStyles from "../styles/mainStyles";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const validateUser = () => {
    if (password === confPassword) {
      registerUser(email, password, username, () =>
        navigation.navigate("Home")
      );
    } else {
      console.error("Passwords not matching");
    }
  };

  return (
    <View style={mainStyles.centerPage}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: "90%",
          position: "relative",
        }}
      >
        <TextField
          placeholder="Username"
          onChange={(text) => setUsername(text)}
        />
        <TextField
          placeholder="E mail Address"
          keyboardType="email-address"
          onChange={(text) => setEmail(text)}
        />
        <TextField
          placeholder="Password"
          isPassword
          onChange={(text) => setPaswword(text)}
        />
        <TextField
          placeholder="Confirm Password"
          isPassword
          onChange={(text) => setConfPassword(text)}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button title="Register" onClick={() => validateUser()} />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "3%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style = {{color: "#382514"}}>Already registered? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
