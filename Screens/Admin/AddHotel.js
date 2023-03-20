import React, { useState } from 'react'
import { Modal, Text, View } from 'react-native'
import AlertPop from '../../Components/AlertPop/AlertPop'
import Button from '../../Components/Button/Button'
import TextField from '../../Components/TextField/TextField'
import { createData } from '../../firebase/utils'
import mainStyles from '../../styles/mainStyles'

const AddHotel = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState();
    const [description, setDesc] = useState("");
    const [amount, setAmount] = useState();
    const [url, setURL] = useState("");

    const [popup, setPopup] = useState(false);
    const [errors, setErrors] = useState(false);

    const clearFields = () => {
        setName("");
        setLocation("");
        setRooms();
        setDesc("");
        setAmount();
        setURL("");
    }

    const addRoom = () => {
        data = {
            "hotelName": name,
            "location": location,
            "rooms": rooms,
            "description": description,
            "amount": amount,
            "url": url,
            "ratings": 0
        }

        createData("Hotels", data, () => {setPopup(true); clearFields();}, () => {setErrors(true); clearFields()});
    }

  return (
    <View style = {mainStyles.centerPage}>
        <View style = {{width: '90%'}}>
            <TextField onChange={(text) => setName(text)} placeholder='Hotel Name' />
            <TextField onChange={(text) => setLocation(text)} placeholder='Location' />
            <TextField onChange={(text) => setRooms(text)} keyboardType='decimal-pad' placeholder='Bed Rooms' />
            <TextField onChange={(text) => setDesc(text)} placeholder='Description' />
            <TextField onChange={(text) => setAmount(text)} keyboardType='decimal-pad' placeholder='Amount per Day' />
            <TextField onChange={(text) => setURL(text)} placeholder='Photo URL' />

            <View style = {{alignItems: 'center'}}>
                <Button title='Submit' onClick={() => addRoom()} />
            </View>
        </View>
        <AlertPop show={popup} setShow={setPopup} message='Hotel Added Successfully!'  />
        <AlertPop show={errors} error setShow={setErrors} message='Cannot Add The Hotel!'  />
    </View>
  )
}

export default AddHotel