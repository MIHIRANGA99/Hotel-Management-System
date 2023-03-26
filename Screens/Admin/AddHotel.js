import React, { useState } from 'react'
import { View } from 'react-native'
import AlertPop from '../../Components/AlertPop/AlertPop'
import Button from '../../Components/Button/Button'
import TextField from '../../Components/TextField/TextField'
import { createData } from '../../firebase/utils'
import mainStyles from '../../styles/mainStyles'

const AddHotel = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState(0);
    const [description, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
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

    const addHotel = () => {
        if (name != '' && location != '' && rooms != 0 && description != '' && amount != 0 && url != '') {
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
        else {
            setErrors(true);
        }
    }

  return (
    <View style = {mainStyles.centerPage}>
        <View style = {{width: '90%'}}>
            <TextField value={name} onChange={(text) => setName(text)} placeholder='Hotel Name' />
            <TextField value={location} onChange={(text) => setLocation(text)} placeholder='Location' />
            <TextField value={rooms} onChange={(text) => setRooms(text)} keyboardType='numeric' placeholder='Bed Rooms' />
            <TextField value={description} onChange={(text) => setDesc(text)} placeholder='Description' />
            <TextField value={amount} onChange={(text) => setAmount(text)} keyboardType='numeric' placeholder='Amount per Day' />
            <TextField value={url} onChange={(text) => setURL(text)} placeholder='Photo URL' />

            <View style = {{alignItems: 'center'}}>
                <Button title='Submit' onClick={() => addHotel()} />
            </View>
        </View>
        <AlertPop show={popup} setShow={setPopup} message='Hotel Added Successfully!'  />
        <AlertPop show={errors} error setShow={setErrors} message='Cannot Add The Hotel!'  />
    </View>
  )
}

export default AddHotel