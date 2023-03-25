import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../Components/Button/Button";
import {
  getCurrentUser,
  getSingleDataFromCollection,
  updateFromCollection,
} from "../../firebase/utils";
import AlertPop from "../../Components/AlertPop/AlertPop";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native";

const EditBooking = ({ navigation, route }) => {
  const [hotel, setHotel] = useState({});
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [available, setAvailable] = useState(false);
  const [selected, setSelected] = useState(route.params.persons);

  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getSingleDataFromCollection("Hotels", route.params.hotelID)
      .then((res) => setHotel(res))
      .catch((e) => console.error(e));

    getSingleDataFromCollection("Bookings", route.params.bookingID).then(
      (res) => {
        setCheckIn(new Date(res.checkIn.toDate()));
        setCheckOut(new Date(res.checkOut.toDate()));
      }
    );
  }, []);

  const updateBooking = () => {
    const data = {
      checkIn: checkIn,
      checkOut: checkOut,
      userID: getCurrentUser().uid,
      dayCount: new Date(checkOut - checkIn).getDate(),
      price: new Date(checkOut - checkIn).getDate() * hotel.amount,
      hotelID: route.params.hotelID,
      personCount: selected,
    };

    updateFromCollection(
      "Bookings",
      data,
      route.params.bookingID,
      () => {
        setPopup(true);
        setTimeout(() => {
          navigation.navigate("ManageBookings");
        }, 1000);
      },
      () => setErrors(true)
    );
  };

  const checkAvailability = () => {
    setAvailable(true);
  };

  const personCount = [
    "2 Person or Lower",
    "2 Person to 4 Person",
    "4 Person or Higher",
  ];

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
          <Text style={{ fontSize: 16 }}>LKR: {hotel.amount} Per Day</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Description
          </Text>
          <Text style={{ fontSize: 16 }}>{hotel.description}</Text>
        </View>
        <View style={{ marginVertical: 12 }}>
          <Text
            style={{
              marginVertical: 8,
              fontSize: 16,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Select Person Count
          </Text>
          {personCount.map((person, index) => (
            <TouchableOpacity onPress={() => setSelected(person)} key={index}>
              <Text
                style={{
                  textDecorationLine:
                    selected === person ? "underline" : "none",
                }}
              >
                {person}
              </Text>
            </TouchableOpacity>
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
            value={checkIn}
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
            value={checkOut}
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
            <Button onClick={() => updateBooking()} title="Update Booking" />
          </View>
        ) : (
          <Button
            onClick={() => checkAvailability()}
            title="Check Availability"
          />
        )}
      </View>
      <AlertPop
        show={popup}
        setShow={setPopup}
        message="Hotel Updated Successfully!"
      />
      <AlertPop
        show={errors}
        error
        setShow={setErrors}
        message="Cannot Update The Hotel!"
      />
    </ScrollView>
  );
};

export default EditBooking;
