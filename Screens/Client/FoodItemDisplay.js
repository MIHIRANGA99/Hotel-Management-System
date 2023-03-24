import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import {
  createData,
  getCurrentUser,
  getDataFromCollection,
} from "../../firebase/utils";

const FoodItemDisplay = ({ navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const [foodItems, setFoodItems] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    getDataFromCollection("Foods")
      .then((res) => setFoodItems(res))
      .catch((e) => console.error(e));
  }, []);

  const handleAddToCart = (foodItem) => {
    const data = {
      name: foodItem.FoodName,
      price: foodItem.Price * quantity,
      quantity: quantity,
      size: sizes[selected],
      url: foodItem.url,
      userID: getCurrentUser().uid,
    };
    createData(
      "Cart",
      data,
      () => console.log("added to cart"),
      () => console.error("Cannot Add")
    );
    navigation.navigate("Cart");
  };

  const sizes = ['Full', 'Half', 'Regular'];

  return (
    <ScrollView style={{ padding: 12 }}>
      <Button
        title="View My Cart"
        onClick={() => navigation.navigate("Cart")}
        extraStyles={{ marginTop: 0 }}
      />
      {foodItems.map((foodItem) => (
        <View
          style={{
            backgroundColor: "#E7E7E7",
            padding: 8,
            borderRadius: 12,
            marginVertical: 8,
          }}
          key={foodItem.id}
        >
          <Image
            source={{ uri: foodItem.url }}
            style={{ width: 400, height: 200 }}
          />

          <Text>{foodItem.FoodName}</Text>
          <Text>{foodItem.description}</Text>
          <Text>{foodItem.Price}</Text>

          <Text style={{marginVertical: 8, fontSize: 16, fontWeight: '500', textAlign: 'center'}}>Select Meal Size</Text>
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

          <TextField
            keyboardType="decimal-pad"
            extraStyles={{ marginBottom: 0, backgroundColor: "#c0aed1" }}
            placeholder="Enter Quantity"
            onChange={(text) => setQuantity(text)}
          />
          <Button
            title="Add to Cart"
            onClick={() => handleAddToCart(foodItem)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default FoodItemDisplay;
