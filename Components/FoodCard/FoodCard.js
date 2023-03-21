import React from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../Button/Button'
import FoodCardStyles from './FoodCardStyles'

const FoodCard = ({FoodName, Price, photoURL, onEdit, onDelete, extraStyles}) => {
  return (
    <View style = {[FoodCardStyles.cardBackground, extraStyles]}>
        <View style = {{flex: 3, backgroundColor: 'gray', borderRadius: 6, width: "100%", maxHeight: 200}}>
            <Image style = {{height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 6}}  source={{
                uri: photoURL
            }} />
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: "100%", paddingTop: 12}}>
            <View>
                <Text style = {{fontSize: 18, fontWeight: "600"}}>{FoodName}</Text>
            </View>
       
        </View>
        <View style = {{flex: 2, justifyContent: 'flex-start', width: "100%", marginTop: 12, paddingHorizontal: 12}}>
            <Text>Price:{Price}.00/=  </Text>
    
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: "100%"}}>
            <View style = {{flex: 1, marginRight: 6}}>
                <Button onClick={() => onEdit()} title="Edit" />
            </View>
            <View style = {{flex: 1, marginLeft: 6}}>
                <Button onClick={() => onDelete()} extraStyles={{backgroundColor: "#CC0E0E"}} title="Delete" />
            </View>
        </View>
    </View>
  )
}

export default FoodCard