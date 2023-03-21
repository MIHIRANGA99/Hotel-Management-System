import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AlertPop from "../../Components/AlertPop/AlertPop";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import { getSingleDataFromCollection, updateFromCollection } from "../../firebase/utils";
import mainStyles from "../../styles/mainStyles";

const EditHotel = ({navigation, route}) => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState();
    const [description, setDesc] = useState("");
    const [amount, setAmount] = useState();
    const [url, setURL] = useState("");

    const [popup, setPopup] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        getSingleDataFromCollection("Hotels", route.params.hotelID)
            .then((res) => {
                setName(res.hotelName);
                setLocation(res.location);
                setRooms(res.rooms);
                setDesc(res.description);
                setAmount(res.amount);
                setURL(res.url)
            })
    }, [])

    const clearFields = () => {
        setName("");
        setLocation("");
        setRooms();
        setDesc("");
        setAmount();
        setURL("");
    }

    const updateHotel = () => {
        data = {
            "hotelName": name,
            "location": location,
            "rooms": rooms,
            "description": description,
            "amount": amount,
            "url": url,
            "ratings": 0
        }

        updateFromCollection("Hotels", data, route.params.hotelID, () => {setPopup(true); navigation.navigate("AdminDB")}, () => setErrors(true))
    }

  return (
    <View style={mainStyles.centerPage}>
      <View style={{ width: "90%" }}>
        <TextField
          value={name}
          onChange={(text) => setName(text)}
          placeholder="Hotel Name"
        />
        <TextField
          value={location}
          onChange={(text) => setLocation(text)}
          placeholder="Location"
        />
        <TextField
          value={rooms}
          onChange={(text) => setRooms(text)}
          keyboardType="decimal-pad"
          placeholder="Bed Rooms"
        />
        <TextField
          value={description}
          onChange={(text) => setDesc(text)}
          placeholder="Description"
        />
        <TextField
          value={amount}
          onChange={(text) => setAmount(text)}
          keyboardType="decimal-pad"
          placeholder="Amount per Day"
        />
        <TextField
          value={url}
          onChange={(text) => setURL(text)}
          placeholder="Photo URL"
        />

        <View style={{ alignItems: "center" }}>
          <Button title="Update" onClick={() => updateHotel()} />
        </View>
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
    </View>
  );
};

export default EditHotel;
