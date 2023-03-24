import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import Button from "../../Components/Button/Button";
import {
  deleteFromCollection,
  getCurrentUser,
  getDataFromCollection,
} from "../../firebase/utils";

const ManageBookings = ({ navigation, route }) => {
  const [hotels, setHotels] = useState([]);
  const [showPopup, setShowPopUp] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState({});

  useEffect(() => {
    readBookings();
  }, []);

  const readBookings = () => {
    getDataFromCollection("Bookings")
      .then((res) => {
        setHotels(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    
    <ScrollView style={{ padding: 12 }}>
      {hotels
        .filter((booking) => booking.userID === getCurrentUser().uid)
        .map((booking) => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#E7E7E7",
              padding: 12,
              marginVertical: 4,
              borderRadius: 12,
            }}
            key={booking.id}
          >
            <Text style={{ flex: 1 }}>Booking ID: {booking.id}</Text>
            <Text style={{ flex: 1 }}>Total Days: {booking.dayCount}</Text>
            <Text
              style={{
                flex: 1,
                justifyContent: "flex-end",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              LKR {booking.price}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <Button
                onClick={() =>
                  navigation.navigate("EditBookings", {
                    hotelID: booking.hotelID,
                    bookingID: booking.id,
                    persons: booking.personCount
                  })
                }
                extraStyles={{ marginTop: 8 }}
                title="Edit Booking"
              />
              <Button
                onClick={() => {
                  setSelectedBooking(booking);
                  setShowPopUp(true);
                }}
                extraStyles={{ marginTop: 8, backgroundColor: "#730000" }}
                title="Delete Booking"
              />
            </View>
            <Modal transparent visible={showPopup} animationType="slide">
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 24,
                    borderRadius: 20,
                  }}
                >
                  <Text>Are You Sure To Delete {selectedBooking.hotelID}?</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button
                      onClick={() => setShowPopUp(false)}
                      title="Cancel"
                    />
                    <Button
                      onClick={() => {
                        deleteFromCollection(
                          "Bookings",
                          selectedBooking.id,
                          () => {
                            readBookings();
                            setShowPopUp(false);
                          },
                          () => console.error("Error occurd")
                        );
                      }}
                      title="Confirm"
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        ))}
    </ScrollView>
  );
};

export default ManageBookings;
