import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../Components/Button/Button'

const Dashboard = () => {
  return (
    <View style = {{flex: 1, justifyContent: 'space-between', padding: 12}}>
        <View>
            <Text>Status</Text>
        </View>
        <View style = {{marginBottom: "3%"}}>
            <Button extraStyles={{marginTop: 12}} title='Manage Bookings' />
            <Button extraStyles={{marginTop: 12}} title='Manage Hotels' />
            <Button extraStyles={{marginTop: 12}} title='Add New Hotel' />
            <Button extraStyles={{marginTop: 12}} title='Manage Food' />
        </View>
    </View>
  )
}

export default Dashboard