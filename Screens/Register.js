import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { registerUser } from '../firebase/utils';

const Register = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPaswword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const validateUser = () => {
        if(password === confPassword) {
            registerUser(email, password, username, () => navigation.navigate("Home"));
        }
        else {
            console.error("Passwords not matching")
        }
    }

  return (
    <View>
        <TextInput placeholder='Username' onChange={(e) => setUsername(e.nativeEvent.text)} />
        <TextInput placeholder='E mail Address' onChange={(e) => setEmail(e.nativeEvent.text)} />
        <TextInput placeholder='Password' onChange={(e) => setPaswword(e.nativeEvent.text)} />
        <TextInput placeholder='Confirm Password' onChange={(e) => setConfPassword(e.nativeEvent.text)} />
        <Button title='Register' onPress={() => validateUser()} />
        <Text>Already registered? <TouchableOpacity onPress={() => navigation.navigate("Login") }><Text>Login</Text></TouchableOpacity></Text>
    </View>
  )
}

export default Register