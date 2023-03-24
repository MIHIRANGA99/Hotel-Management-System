import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button,AlertPop } from 'react-native';

const Cart = () => {
  return (
    <View>
      <Text style={{ fontSize: 38, fontWeight: "600" }}> #Your Cart#</Text>
      {cartItems.map((cartItem) => (
        <View key={cartItem.id}>
          <Image source={{ uri: cartItem.url }} style={{ width: 420, height: 150 }} />
          <Text style={{ fontSize: 12, fontWeight: "600" }}>Food ID: {cartItem.id}</Text>
          <Text style={{ fontSize: 12, fontWeight: "600" }}>Your ID: {cartItem.userID}</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Food Name: {cartItem.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Price:{cartItem.price}</Text>
          <Button title="Remove" onPress={() => handleDelete(cartItem.id)} />
        </View>
      ))}
    </View>
  );
};

export default Cart;