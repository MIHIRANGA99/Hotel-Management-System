import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';

const FoodItemDisplay = ({ navigation }) => {
    return (
        <View>
            {foodItems.map((foodItem) => (
                <View key={foodItem.key}>
                    <Image source={{ uri:foodItem.url }} style={{ width: 400, height: 200 }} />

                    <Text>{foodItem.FoodName}</Text>
                    <Text>{foodItem.description}</Text>
                    <Text>{foodItem.Price}</Text>
                    
                    <Button title="Add to Cart" onPress={()=>handleAddToCart(foodItem)} />
                </View>
            ))}
        </View>
    );
};

export default FoodItemDisplay;