import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../Components/Button/Button'

const Dashboard = ({navigation}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'space-between', padding: 12}}>
        <View>
            <Text>Status</Text>
        </View>
        <View style = {{marginBottom: "3%"}}>
            <Button extraStyles={{marginTop: 12}} title='Manage Bookings' />
            <Button onClick={() => navigation.navigate("ManageHotels")} extraStyles={{marginTop: 12}} title='Manage Hotels' />
            <Button onClick={() => navigation.navigate("AddHotel")} extraStyles={{marginTop: 12}} title='Add New Hotel' />
            <Button onClick={() => navigation.navigate("AddNewFood")} extraStyles={{marginTop: 12}} title='Add New Food Menu' />

            <Button onClick={() => navigation.navigate("ManageAllFoodsMenu")} extraStyles={{marginTop: 12}} title='All Food Menu' />
            

            <Button extraStyles={{marginTop: 12}} title='Manage Food' />
        </View>
    </View>
  )
}

export default Dashboard