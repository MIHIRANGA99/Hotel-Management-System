import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import buttonStyles from './buttonStyles'

const Button = ({title, onClick}) => {
  return (
    <View>
        <TouchableOpacity style = {buttonStyles.primaryButton} onPress={onClick}>
            <Text style = {buttonStyles.primaryTitle}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button