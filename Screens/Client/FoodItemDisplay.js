import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { createData, getCurrentUser, getDataFromCollection } from '../../firebase/utils';

const FoodItemDisplay = ({ navigation }) => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        getDataFromCollection("Foods")
            .then((res) => setFoodItems(res))
            .catch((e) => console.error(e))
    }, []);

    const handleAddToCart =(foodItem)=> {
        const data = {
            "name": foodItem.FoodName,
            "price": foodItem.Price,
            "url":foodItem.url,
            "userID": getCurrentUser().uid
        }
        createData("Cart1",data,()=>console.log("added to cart"),()=>console.error('Cannot Add'));
        navigation.navigate('Cart');
    };

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