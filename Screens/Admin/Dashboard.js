import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import Button from "../../Components/Button/Button";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", padding: 12 }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 300, height: "100%", resizeMode: "contain" }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/hotel-management-native.appspot.com/o/Indigo%20Hotels.png?alt=media&token=640525c2-6948-4d03-a18b-8988e25059a4",
          }}
        />
      </View>
      <View style={{ marginBottom: "3%" }}>
        <Button extraStyles={{ marginTop: 12 }} title="Manage Bookings" />
        <Button
          onClick={() => navigation.navigate("ManageHotels")}
          extraStyles={{ marginTop: 12 }}
          title="Manage Hotels"
        />
        <Button
          onClick={() => navigation.navigate("AddHotel")}
          extraStyles={{ marginTop: 12 }}
          title="Add New Hotel"
        />

        <Button
          onClick={() => navigation.navigate("AddNewFood")}
          extraStyles={{ marginTop: 12 }}
          title="Add New Food Menu"
        />

        <Button
          onClick={() => navigation.navigate("ManageAllFoodsMenu")}
          extraStyles={{ marginTop: 12 }}
          title="All Food Menu"
        />

        <Button extraStyles={{ marginTop: 12 }} title="Manage Food" />

        <Button 
          onClick={() => navigation.navigate("Food Items")} 
          extraStyles={{marginTop: 12}} 
          title='All  Menu' 
        />
        
      </View>
    </View>
  );
};

export default Dashboard;
