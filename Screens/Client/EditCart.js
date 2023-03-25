import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../Components/Button/Button";
import AlertPop from "../../Components/AlertPop/AlertPop";
import TextField from "../../Components/TextField/TextField";
import { getSingleDataFromCollection, updateFromCollection } from "../../firebase/utils";

const EditCart = ({ navigation, route }) => {
  const [food, setFood] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [selected, setSelected] = useState(route.params.size);
  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getSingleDataFromCollection("Cart", route.params.foodID)
      .then((res) => setFood(res))
      .catch((e) => console.error(e));
  });

  const handleUpdate = () => {
    const updatedData = {
      name: food.name,
      quantity: quantity,
      price: (food.price/ food.quantity) * quantity,
      url: food.url,
      userID: food.userID,
      size: selected
    }

    updateFromCollection("Cart", updatedData, route.params.foodID, () => {
      setPopup(true); 
      setTimeout(() => {
        navigation.navigate('Food Items');
      }, 1000);}, 
      () => setErrors(true))
  }

  const sizes = ['Full', 'Half', 'Regular'];

  return (
    <View style={{ padding: 12 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          textAlign: "center",
          marginVertical: 12,
        }}
      >
        {food.name}
      </Text>
      <TextField onChange={(text) => setQuantity(text)} placeholder="Quantity" />
      <Button onClick={() => handleUpdate()} title="Update Order" />
      <Text style={{marginVertical: 8, fontSize: 16, fontWeight: '500', textAlign: 'center'}}>Select Meal Size</Text>
          <View>
            {sizes.map((size, index) => (
              <TouchableOpacity onPress={() => setSelected(size)} key={index}>
                <Text
                  style={{
                    textDecorationLine:
                      selected === size ? "underline" : "none",
                  }}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginTop: 24,
        }}
      >
        Current Information
      </Text>
      <View style={{marginVertical: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          Quantity: {food.quantity}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          Total Price: {food.price}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          Meal Size: {food.size}
        </Text>
      </View>
      <AlertPop
        show={popup}
        setShow={setPopup}
        message="Food Item Updated Successfully!"
      />
      <AlertPop
        show={errors}
        error
        setShow={setErrors}
        message="Error occured when Updating The Food!"
      />
    </View>
  );
};

export default EditCart;
