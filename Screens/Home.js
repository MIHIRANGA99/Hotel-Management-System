import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import Button from "../Components/Button/Button";
import { getCurrentUser } from "../firebase/utils";

const Home = ({ navigation }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(getCurrentUser().displayName);
  }, []);

  useEffect(() => {
    if (getCurrentUser().email === "runkavisha@gmail.com") {
      navigation.navigate("AdminSS");
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "space-between", margin: "5%" }}>
      <View style={{ display: "flex", alignItems: "center", flex: 3 }}>
        <Text style={{ fontSize: 20, color: "#341B54", fontWeight: "500" }}>
          Welcome Back,
        </Text>
        <Text style={{ fontSize: 36, color: "#341B54", fontWeight: "500" }}>
          {user}
        </Text>
        <View
        style={{
          flex: 4,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 300, height: "100%" }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/hotel-management-native.appspot.com/o/Indigo%20Hotels.png?alt=media&token=640525c2-6948-4d03-a18b-8988e25059a4",
          }}
        />
      </View>
      </View>
      
      <View style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
        <Button
          onClick={() => navigation.navigate("HotelSS")}
          extraStyles={{ marginTop: 12 }}
          title="Book Hotel"
        />
        <Button 
          onClick={() => navigation.navigate("OrderSS")} 
          extraStyles={{marginTop: 12}} 
          title='All Menu' 
        />
        <Button
          onClick={() => navigation.navigate("ManageBookings")}
          extraStyles={{ marginTop: 12 }}
          title="Manage Bookings"
        />
      </View>
    </View>
  );
};

export default Home;
