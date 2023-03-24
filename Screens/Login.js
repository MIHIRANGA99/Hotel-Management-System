import React, { useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import Button from "../Components/Button/Button";
import TextField from "../Components/TextField/TextField";
import { loginUser } from "../firebase/utils";
import mainStyles from "../styles/mainStyles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={mainStyles.centerPage}>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 300, height: "100%" }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/hotel-management-native.appspot.com/o/Indigo%20Hotels.png?alt=media&token=640525c2-6948-4d03-a18b-8988e25059a4",
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-start", width: "90%" }}>
        <TextField
          onChange={(text) => setEmail(text)}
          placeholder="E mail Address"
        />
        <TextField
          isPassword
          onChange={(text) => setPassword(text)}
          placeholder="Password"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() =>
              loginUser(email, password, () => navigation.navigate("Home"))
            }
            title="Login"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
