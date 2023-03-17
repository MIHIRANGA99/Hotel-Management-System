import React from 'react'
import { Text, TextInput, View } from 'react-native'
import textFieldStyles from './textFieldStyles'

const TextField = ({placeholder, onChange, keyboardType, isPassword, extraStyles}) => {
  return (
    <View>
        <TextInput style = {[textFieldStyles.primaryTextField, extraStyles]} secureTextEntry = {isPassword} keyboardType = {keyboardType} placeholder={placeholder} onChange = {(e) => onChange(e.nativeEvent.text)} />
    </View>
  )
}

export default TextField