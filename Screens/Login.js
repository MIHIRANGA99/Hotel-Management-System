import React, { useState } from 'react'
import { View } from 'react-native'
import Button from '../Components/Button/Button';
import TextField from '../Components/TextField/TextField';
import { loginUser } from '../firebase/utils';
import mainStyles from '../styles/mainStyles';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View style = {mainStyles.centerPage}>
        <View style={{flex: 1, justifyContent: "center", width: "90%"}}>
        <TextField onChange={(text) => setEmail(text)} placeholder='E mail Address' />
        <TextField isPassword onChange={(text) => setPassword(text)} placeholder='Password' />
        <View style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          <Button onClick={() => loginUser(email, password, () => navigation.navigate("Home"))} title='Login' />
        </View>
        </View>
    </View>
  )
}

export default Login