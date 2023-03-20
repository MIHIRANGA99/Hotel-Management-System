import React from 'react'
import { Button, Text, View } from 'react-native'
import mainStyles from '../styles/mainStyles'

const Welcome = ({navigation}) => {

  return (
    <View style = {mainStyles.centerPage}>
        <Button title='Register' onPress={() => navigation.navigate('Register')} />
        <Button onPress={() => navigation.navigate("CRUD")} title="View My Sample Crud" />
        <Text style = {{fontSize: 24, textAlign: 'center', marginVertical: 24}}>View Components</Text>
        <Button onPress={() => navigation.navigate("Button")} title="Button Component" />
        <Button onPress={() => navigation.navigate("TextField")} title="Text Field Component" />
        <Button onPress={() => navigation.navigate("HotelCard")} title="Hotel Card Component" />
        <Button onPress={() => navigation.navigate("AlertPop")} title="Alert Pop Component" />
    </View>
  )
}

export default Welcome