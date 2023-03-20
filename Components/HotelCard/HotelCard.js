import React from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../Button/Button'
import hotelCardStyles from './hotelCardStyles'

const HotelCard = ({hotelName, ratings, bedRooms, location, price, photoURL, onEdit, onDelete, extraStyles}) => {
  return (
    <View style = {[hotelCardStyles.cardBackground, extraStyles]}>
        <View style = {{flex: 3, backgroundColor: 'gray', borderRadius: 6, width: "100%", maxHeight: 200}}>
            <Image style = {{height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 6}}  source={{
                uri: photoURL
            }} />
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: "100%", paddingTop: 12}}>
            <View>
                <Text style = {{fontSize: 18, fontWeight: "600"}}>{hotelName}</Text>
            </View>
            <View>
                <Text>{ratings}</Text>
            </View>
        </View>
        <View style = {{flex: 2, justifyContent: 'flex-start', width: "100%", marginTop: 12, paddingHorizontal: 12}}>
            <Text>{bedRooms} Bed Rooms</Text>
            <Text>{location}</Text>
            <Text>LKR {price} Per Day</Text>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: "100%"}}>
            <View style = {{flex: 1, marginRight: 6}}>
                <Button onClick={() => onEdit()} title="Edit" />
            </View>
            <View style = {{flex: 1, marginLeft: 6}}>
                <Button onClick={() => onDelete()} extraStyles={{backgroundColor: "#730000"}} title="Delete" />
            </View>
        </View>
    </View>
  )
}

export default HotelCard