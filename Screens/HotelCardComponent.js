import React from 'react'
import { ScrollView } from 'react-native'
import HotelCard from '../Components/HotelCard/HotelCard'

const HotelCardComponent = () => {
  return (
    <ScrollView style = {{padding: 12}}>
        <HotelCard onEdit={() => console.log("edit")} onDelete = {() => console.log("delete")} location="Panadura" bedRooms={3} price = {2500} hotelName="Sample Hotel" photoURL="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
    </ScrollView>
  )
}

export default HotelCardComponent