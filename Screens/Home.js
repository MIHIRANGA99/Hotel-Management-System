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
    </View>
  )
}

export default Home