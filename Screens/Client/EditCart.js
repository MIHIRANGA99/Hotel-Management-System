import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import { getSingleDataFromCollection, updateFromCollection } from "../../firebase/utils";

const EditCart = ({ navigation, route }) => {
  const [food, setFood] = useState({});
  const [quantity, setQuantity] = useState(0);

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
      userID: food.userID
    }

    updateFromCollection("Cart", updatedData, route.params.foodID, () => navigation.navigate('Food Items'), () => console.error('Cannot Update!'))
  }
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
      </View>
    </View>
  );
};

export default EditCart;
