import AnimatedLottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'

const HotelSS = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("ViewHotels");
        }, 3000);
    }, [])

  return (
    <View style={{ flex: 1 }}>
        <AnimatedLottieView
          autoPlay
          source={require('../../assets/purple-hotel.json')}
          loop={true}
        />
      </View>
  )
}

export default HotelSS