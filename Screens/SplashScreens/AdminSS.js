import React, { useEffect } from 'react'
import { Image, View } from 'react-native'

const AdminSS = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("AdminDB");
        }, 3000)
    }, [])

  return (
    <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 300, height: "100%", resizeMode: 'contain' }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/hotel-management-native.appspot.com/o/Indigo%20Hotels.png?alt=media&token=640525c2-6948-4d03-a18b-8988e25059a4",
          }}
        />
      </View>
  )
}

export default AdminSS