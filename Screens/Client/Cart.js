import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Button from "../../Components/Button/Button";
import AlertPop from "../../Components/AlertPop/AlertPop";
import {
  getDataFromCollection,
  deleteFromCollection,
  getCurrentUser,
} from "../../firebase/utils";

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    readCart();
  }, []);

  const readCart = () => {
    getDataFromCollection("Cart")
      .then((res) => setCartItems(res))
      .catch((e) => console.error(e));
  };

  const handleDelete = (docId) => {
    deleteFromCollection(
      "Cart",
      docId,
      () => {
        readCart();
        setPopup(true);
      },
      (error) => {
        setErrors(true);
        console.error(error);
      }
    );
  };
  return (
    <ScrollView style={{padding: 8}}>
      {cartItems.filter((food) => food.userID === getCurrentUser().uid).map((cartItem) => (
        <View style={{backgroundColor: '#E7E7E7', padding: 8, borderRadius: 12, marginVertical: 8}} key={cartItem.id}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{ uri: cartItem.url }}
            style={{ width: "100%", height: 150, margin: 8, resizeMode: 'cover', borderRadius: 8}}
          />
          </View>
          <Text style={{ fontSize: 12, fontWeight: "600" }}>
            Food ID: {cartItem.id}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Food Name: {cartItem.name}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Price: LKR {cartItem.price}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Quantity: {cartItem.quantity}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Meal Size: {cartItem.size}
          </Text>
          <Button title="Edit" onClick={() => navigation.navigate("Edit Cart", {foodID: cartItem.id, size: cartItem.size})} />
          <Button extraStyles={{backgroundColor: '#730000', marginTop: 8}} title="Remove" onClick={() => handleDelete(cartItem.id)} />
        </View>
      ))}
      <AlertPop
        show={popup}
        setShow={setPopup}
        message="Food Item Deleted Successfully!"
      />
      <AlertPop
        show={errors}
        error
        setShow={setErrors}
        message="Error occured when deleting Food item!"
      />
    </ScrollView>
  );
};

export default Cart;
