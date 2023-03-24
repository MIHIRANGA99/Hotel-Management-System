
import React, { useState } from 'react'
import { View } from 'react-native'
import AlertPop from '../../Components/AlertPop/AlertPop'
import Button from '../../Components/Button/Button'
import TextField from '../../Components/TextField/TextField'
import { createData } from '../../firebase/utils'
import mainStyles from '../../styles/mainStyles'



const AddNewFood = () => {

        // Set up state variables to hold form data and error/popup messages


    const [FoodName, setFoodName] = useState("");
    const [description, setDesc] = useState("");
    const [Price, setPrice] = useState();
    const [url, setURL] = useState("");

    const [popup, setPopup] = useState(false);
    const [errors, setErrors] = useState(false);

    // Function to clear form data when the user submits the form

    const AddFood = () => {
        setFoodName("");
        setDesc("");
        setPrice();
        setURL("");
    }

        // Function to add a new food item to the Firebase database


    return (
        <View style = {mainStyles.centerPage}>
            <View style = {{width: '90%'}}>
                <TextField value={FoodName} onChange={(text) => setFoodName(text)} placeholder='Food Name' />
                <TextField value={description} onChange={(text) => setDesc(text)} placeholder='Description' />
                <TextField value={Price} onChange={(text) => setPrice(text)} keyboardType='decimal-pad' placeholder='Food Price' />
                <TextField value={url} onChange={(text) => setURL(text)} placeholder='Photo URL' />
    
                <View style = {{alignItems: 'center'}}>
                    <Button title='Submit' onClick={() => addFoodItem()} />
                </View>
            </View>
            <AlertPop show={popup} setShow={setPopup} message='New Foods  Added Successfully!'  />
            <AlertPop show={errors} error setShow={setErrors} message='Cannot Add The Food TO The Store!'  />
        </View>
      )
    }
    
    export default AddNewFood;