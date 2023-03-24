import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AlertPop from "../../Components/AlertPop/AlertPop";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import { getSingleDataFromCollection, updateFromCollection } from "../../firebase/utils";
import mainStyles from "../../styles/mainStyles";


 

const EditFoodMenu = ({navigation, route}) => {
    // Define state variables for form input and popups

    const [FoodName, setFoodName] = useState("");
    const [description, setDesc] = useState("");
    const [Price, setPrice] = useState();
    const [url, setURL] = useState("");
    const [popup, setPopup] = useState(false);
      const [errors, setErrors] = useState(false);

          // Load food data for the selected item on mount

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
        setDesc("");
        setPrice();
        setURL("");
    }

        // Update the food item in the database and navigate to the admin dashboard on success

    const updateFoods = () => {
        data = {
            "FoodName": FoodName,
            "description": description,
            "Price": Price,
            "url": url,

        }

        updateFromCollection("Foods", data, route.params.FoodID, () => {setPopup(true); navigation.navigate("AdminDB")}, () => setErrors(true))
    }

        // Render the form and popups

    return (
        <View style={mainStyles.centerPage}>
          <View style={{ width: "90%" }}>
            <TextField
              value={FoodName}
              onChange={(text) => setFoodName(text)}
              placeholder="Enter Food Name "
            />
        
            <TextField
              value={Price}
              onChange={(text) => setPrice(text)}
              keyboardType="decimal-pad"
              placeholder="price "
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
              <Button title="Update" onClick={() => updateFoods()} />
            </View>
          </View>
          <AlertPop
            show={popup}
            setShow={setPopup}
            message="Food Updated Successfully!"
          />
          <AlertPop
            show={errors}
            error
            setShow={setErrors}
            message="Cannot Update The Food!"
          />
        </View>
      );
    };
    
    export default EditFoodMenu;
    