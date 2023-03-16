import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Welcome = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Register");
        }, 1000);
    }, [])

  return (
    <View>
        <Text>
            {/* start from here */}
        </Text>
    </View>
  )
}

export default Welcome