import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import HotelCard from "../../Components/HotelCard/HotelCard";
import { getDataFromCollection } from "../../firebase/utils";

const ManageHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getDataFromCollection("Hotels")
      .then((res) => setHotels(res))
      .catch((e) => console.error(e));
  }, []);

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
          extraStyles = {{marginVertical: 8}}
        />
      ))}
    </ScrollView>
  );
};

export default ManageHotels;
