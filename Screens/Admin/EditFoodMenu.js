import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AlertPop from "../../Components/AlertPop/AlertPop";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import { getSingleDataFromCollection, updateFromCollection } from "../../firebase/utils";
import mainStyles from "../../styles/mainStyles";

const EditFoodMenu = ({navigation, route}) => {

 
    const [FoodName, setFoodName] = useState("");
    const [description, setDesc] = useState("");
    const [url, setURL] = useState("");
    const [Price, setPrice] = useState();
    const [popup, setPopup] = useState(false);
    const [errors, setErrors] = useState(false);


    useEffect(() => {
        getSingleDataFromCollection("Foods", route.params.FoodID)
            .then((res) => {
                setFoodName(res.FoodName);
                setDesc(res.description);
                setPrice(res.Price);
                setURL(res.url)
            })
    }, [])
    const clearFields = () => {
        setFoodName("");
        setPrice("");
        setURL();
        setDesc("");
      
    }


    const updatefood = () => {
        data = {
            "FoodName": FoodName,
            "Price": Price,
            "description": description,
            "url": url,
        }

        updateFromCollection("Foods", data, route.params.FoodID, () => {setPopup(true); navigation.navigate("AdminDB")}, () => setErrors(true))
    }

    return (
        <View style={mainStyles.centerPage}>
          <View style={{ width: "90%" }}>
            <TextField
              value={FoodName}
              onChange={(text) => setFoodName(text)}
              placeholder="food name "
            />
            <TextField
              value={Price}
              onChange={(text) => setPrice(text)}
              placeholder="price"
            />
         
            <TextField
              value={description}
              onChange={(text) => setDesc(text)}
              placeholder="Description"
            />
        
            <TextField
              value={url}
              onChange={(text) => setURL(text)}
              placeholder="Photo URL"
            />
    
            <View style={{ alignItems: "center" }}>
              <Button title="Update" onClick={() => updatefood()} />
            </View>
          </View>
          <AlertPop
            show={popup}
            setShow={setPopup}
            message="Hotel Updated Successfully!"
          />
          <AlertPop
            show={errors}
            error
            setShow={setErrors}
            message="Cannot Update The Hotel!"
          />
        </View>
      );
    };
    
    export default EditFoodMenu;
    