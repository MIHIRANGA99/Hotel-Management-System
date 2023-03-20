import React, { useState } from 'react'
import { Button, View } from 'react-native'
import AlertPop from '../../Components/AlertPop/AlertPop'

const AlertPopComponent = () => {

    const [show, setShow] = useState(false);

  return (
    <View>
        <Button title='Toggle' onPress={() => setShow(!show)} />
        <AlertPop show={show} setShow = {setShow} message = "Sample Message" />
    </View>
  )
}

export default AlertPopComponent