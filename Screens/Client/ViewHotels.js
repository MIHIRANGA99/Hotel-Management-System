import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import HotelCard from "../../Components/HotelCard/HotelCard";
import { getDataFromCollection } from "../../firebase/utils";

const ViewHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    readHotels();
  }, []);

  const readHotels = () => {
    getDataFromCollection("Hotels")
      .then((res) => setHotels(res))
      .catch((e) => console.error(e));
  };

  return (
    <ScrollView>
      {hotels.map((hotel) => (
        <TouchableOpacity
          onPress={() => console.log(hotel.hotelName)}
          key={hotel.id}
        >
          <HotelCard
            key={hotel.id}
            hotelName={hotel.hotelName}
            bedRooms={hotel.rooms}
            location={hotel.location}
            price={hotel.amount}
            photoURL={hotel.url}
            extraStyles={{ marginVertical: 8 }}
            clientSide
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ViewHotels;