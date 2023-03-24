import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../Components/Button/Button";
import {
  createData,
  getCurrentUser,
  getSingleDataFromCollection,
} from "../../firebase/utils";

const BookHotel = ({ navigation, route }) => {

  const [hotel, setHotel] = useState({});
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [available, setAvailable] = useState(false);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    getSingleDataFromCollection("Hotels", route.params.hotelID)
      .then((res) => setHotel(res))
      .catch((e) => console.error(e));
  }, []);

  const addBooking = () => {
    const data = {
      checkIn: checkIn,
      checkOut: checkOut,
      userID: getCurrentUser().uid,
      dayCount: new Date(checkOut - checkIn).getDate(),
      price: new Date(checkOut - checkIn).getDate() * hotel.amount,
      hotelID: route.params.hotelID,
      personCount: personCount[selected]
    };

    createData(
      "Bookings",
      data,
      () => console.log("Booked"),
      () => console.log("Cannot Book")
    );
  };

  const checkAvailability = () => {
    setAvailable(true);
  };

  const personCount = ['2 Person or Lower', '2 Person to 4 Person', '4 Person or Higher'];

  return (
    <ScrollView>
      <Image
        source={{ uri: hotel.url }}
        style={{ height: 250, width: "100%", resizeMode: "cover" }}
      />
      <View style={{ padding: 12 }}>
        <View style={{ paddingBottom: 12 }}>
          <Text style={{ fontSize: 16 }}>{hotel.location}</Text>
          <Text style={{ fontSize: 16 }}>{hotel.rooms} Bed Rooms</Text>
          <Text style={{ fontSize: 16 }}>LKR {hotel.amount} Per Day</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Description
          </Text>
          <Text style={{ fontSize: 16 }}>{hotel.description}</Text>
        </View>
        <View style={{marginVertical: 12}}>
          <Text style={{marginVertical: 8, fontSize: 16, fontWeight: '500', textAlign: 'center'}}>Select Person Count</Text>
          {personCount.map((person, index) => (
            <TouchableOpacity onPress={() => setSelected(index)} key={index} ><Text style={{textDecorationLine: selected === index? 'underline': 'none'}}>{person}</Text></TouchableOpacity>
          ))}
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Button
            onClick={() => setShowCheckIn(true)}
            extraStyles={{ marginRight: 2 }}
            title="Select Check In Date"
          />
          <Button
            onClick={() => setShowCheckOut(true)}
            extraStyles={{ marginLeft: 2 }}
            title="Select Check Out Date"
          />
        </View>
        {showCheckIn && (
          <DateTimePicker
            testID="dateTimePicker"
            minimumDate={new Date()}
            value={new Date()}
            mode="date"
            is24Hour={true}
            onChange={(e, date) => {
              setShowCheckIn(false);
              setCheckIn(date);
            }}
          />
        )}
        {showCheckOut && (
          <DateTimePicker
            testID="dateTimePicker"
            minimumDate={new Date()}
            value={new Date()}
            mode="date"
            is24Hour={true}
            onChange={(e, date) => {
              setShowCheckOut(false);
              setCheckOut(date);
            }}
          />
        )}
        {available ? (
          <View
            style={{
              marginVertical: 18,
              padding: 12,
              flex: 1,
              flexDirection: "column",
              backgroundColor: "#E7E7E7",
              borderRadius: 12,
              height: 200,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}
            >
              Information
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                paddingBottom: 8,
                textAlign: "center",
                color: available ? "green" : "red",
              }}
            >
              Dates {available ? "Available" : "Unavailable"}
            </Text>
            <View>
              <Text>CheckIn Date: {checkIn.toDateString()}</Text>
              <Text>CheckOut Date: {checkOut.toDateString()}</Text>
              <Text>
                Total Price: LKR{" "}
                {new Date(checkOut - checkIn).getDate() * hotel.amount}.00
              </Text>
            </View>
            <Button onClick={() => addBooking()} title="Confirm Booking" />
          </View>
        ) : (
          <Button
            onClick={() => checkAvailability()}
            title="Check Availability"
          />
        )}
      </View>
    </ScrollView>
  );
};

export default BookHotel;