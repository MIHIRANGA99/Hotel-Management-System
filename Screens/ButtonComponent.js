import React from 'react'
import { Text, View } from 'react-native'
import Button from '../Components/Button/Button'

const ButtonComponent = () => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title='Press Me' onClick={() => console.log("Print")} />
    </View>
  )
}

export default ButtonComponent