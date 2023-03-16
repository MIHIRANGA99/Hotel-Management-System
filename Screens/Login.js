import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { loginUser } from '../firebase/utils';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPaswword] = useState("");

  return (
    <View>
        <TextInput onChange={(e) => setEmail(e.nativeEvent.text)} placeholder='E mail Address' />
        <TextInput onChange={(e) => setPaswword(e.nativeEvent.text)} placeholder='Password' />
        <Button onPress={() => loginUser(email, password, () => navigation.navigate("Home"))} title='Login' />
    </View>
  )
}

export default Login