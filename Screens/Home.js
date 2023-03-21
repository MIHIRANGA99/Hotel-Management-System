import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../Components/Button/Button';
import { getCurrentUser } from '../firebase/utils';

const Home = ({navigation}) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser().displayName);
    }, []);

    useEffect(() => {
      if (getCurrentUser().email === 'runkavisha@gmail.com') {
        navigation.navigate("AdminDB");
      }
    }, [user])

  return (
    <View style = {{flex: 1, justifyContent: 'space-between', margin: "5%"}}>
        <View style = {{display: 'flex', alignItems: 'center', flex: 1}}>
          <Text style = {{fontSize: 20, color: "#341B54", fontWeight: "500"}}>Welcome Back,</Text>
          <Text style = {{fontSize: 36, color: "#341B54", fontWeight: "500"}}>{user}</Text>
        </View>
        <View style = {{display: 'flex', flex: 1, justifyContent: "flex-end"}}>
          <Button extraStyles={{marginTop: 12}} title="Book a Hotel" />
          <Button extraStyles={{marginTop: 12}} title="Order Food" />
          <Button extraStyles={{marginTop: 12}} title="Manage Bookings" />
        </View>
    </View>
  )
}

export default Home