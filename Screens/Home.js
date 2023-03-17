import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { getCurrentUser } from '../firebase/utils';

const Home = ({navigation}) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser().displayName);
    })

  return (
    <View>
        <Text>Hello, {user}</Text>

        <Button onPress={() => navigation.navigate("CRUD")} title="View My Sample Crud" />
        <Text style = {{fontSize: 24, textAlign: 'center', marginVertical: 24}}>View Components</Text>
        <Button onPress={() => navigation.navigate("Button")} title="Button Component" />
        <Button onPress={() => navigation.navigate("TextField")} title="Text Field Component" />
    </View>
  )
}

export default Home