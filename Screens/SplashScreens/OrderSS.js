import AnimatedLottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'

const OrderSS = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Food Items");
        }, 3000);
    }, []);

  return (
    <View style={{ flex: 1 }}>
        <AnimatedLottieView
          autoPlay
          source={require('../../assets/bookings.json')}
          loop={true}
        />
      </View>
  )
}

export default OrderSS