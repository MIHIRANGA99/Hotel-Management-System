
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import AlertPop from '../../Components/AlertPop/AlertPop'
import Button from '../../Components/Button/Button'
import TextField from '../../Components/TextField/TextField'
import { createData } from '../../firebase/utils'
import mainStyles from '../../styles/mainStyles'



const AddNewFood = () => {

        // Set up state variables to hold form data and error/popup messages


    const [FoodName, setFoodName] = useState("");
    const [description, setDesc] = useState("");
    const [Price, setPrice] = useState(0);
    const [url, setURL] = useState("");

    const [popup, setPopup] = useState(false);
  
    const [selected, setSelected] = useState(-1);
    // Function to clear form data when the user submits the form


    const [errors, setErrors] = useState({
      foodName: false,
      description: false,
      price: false,
      url: false,
    });

    const AddFood = () => {
        setFoodName("");
        setDesc("");
        setPrice();
        setURL("");
    }

    const sizes = ['chicken ', 'fish', 'cheese'];


        // Function to add a new food item to the Firebase database

    const addFoodItem = () => {
        if (FoodName != '' && description != '' && Price != 0 && url != '') {
            data = {
                "FoodName": FoodName,
                "description": description,
                "Price": Price,
                "url": url,
            }
    
           // Call the createData function from firebase/utils to add the data to the "Foods" collection in Firebase
    
            createData("Foods", data, () => {setPopup(true); AddFood();}, () => {setErrors(true); AddFood()});
        } else{
            setErrors(true)
        }
    }


    return (
        <View style = {mainStyles.centerPage}>
            <View style = {{width: '90%'}}>
                <TextField value={FoodName} onChange={(text) => setFoodName(text)} placeholder='Food Name' required={true}  />
                <TextField value={description} onChange={(text) => setDesc(text)} placeholder='Description'required={true} />
                <TextField value={Price} onChange={(text) => setPrice(text)} keyboardType='decimal-pad' placeholder='Food Price'  />
                <TextField value={url} onChange={(text) => setURL(text)} placeholder='Photo URL' />
       <Text style={{marginVertical: 8, fontSize: 16, fontWeight: '500', textAlign: 'center'}}>Select the food type </Text>
          <View>
            {sizes.map((size, index) => (
              <TouchableOpacity onPress={() => setSelected(index)} key={index}>
                <Text
                  style={{
                    textDecorationLine:
                      selected === index ? "underline" : "none",
                  }}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
                <View style = {{alignItems: 'center'}}>
                    <Button title='Submit' onClick={() => addFoodItem()} />
                </View>
            </View>
            <AlertPop show={popup} setShow={setPopup} message='New Foods  Added Successfully!'  />
            <AlertPop show={errors} error setShow={setErrors} message='Cannot Add The Food to The Store!'  />
        </View>
      )
    }
    
    export default AddNewFood;