import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Modal, ScrollView } from "react-native";
import Button from "../../Components/Button/Button";
import HotelCard from "../../Components/HotelCard/HotelCard";
import {
  deleteFromCollection,
  getDataFromCollection,
} from "../../firebase/utils";

const ManageHotels = ({navigation}) => {
  const [hotels, setHotels] = useState([]);
  const [showPopup, setShowPopUp] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState({});

  useEffect(() => {
    readHotels();
  }, []);

  const readHotels = () => {
    getDataFromCollection("Hotels")
      .then((res) => setHotels(res))
      .catch((e) => console.error(e));
  };

  return (
    <ScrollView style={{ padding: 8 }}>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotelName={hotel.hotelName}
          bedRooms={hotel.rooms}
          location={hotel.location}
          price={hotel.amount}
          photoURL={hotel.url}
          extraStyles={{ marginVertical: 8 }}
          onDelete={() => {
            setShowPopUp(true);
            setSelectedHotel(hotel);
          }}
          onEdit={() => {
            navigation.navigate("EditHotel", {hotelID: hotel.id});
          }}
        />
      ))}
      <Modal transparent visible={showPopup} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 24, borderRadius: 20 }}
          >
            <Text>Are You Sure To Delete {selectedHotel.hotelName}?</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Button onClick={() => setShowPopUp(false)} title="Cancel" />
              <Button
                onClick={() => {
                  deleteFromCollection(
                    "Hotels",
                    selectedHotel.id,
                    () => {readHotels(); setShowPopUp(false);},
                    () => console.error("Error occurd")
                  );
                }}
                title="Confirm"
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ManageHotels;
