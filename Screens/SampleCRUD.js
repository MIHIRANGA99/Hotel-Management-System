import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { createData, deleteFromCollection, getDataFromCollection, updateFromCollection } from '../firebase/utils';

const SampleCRUD = () => {

    //remove this file at the final stage

    const [name, setName] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [dataArray, setDataArray] = useState([]);
    const [selectedID, setSelectedID] = useState("");

    useEffect(() => {
        readData();
    }, []);

    const readData = () => {
        getDataFromCollection("sampleCollection")
            .then((res) => setDataArray(res))
            .catch((e) => console.error(e));
    }

    const addData = () => {
        createData("sampleCollection", { "name": name }, () => readData(), () => console.error("ERROR"));
    }

    return (
        <View>
            <TextInput onChange={e => setName(e.nativeEvent.text)} placeholder='enter your name and press create button to add' />
            <Button onPress={() => addData()} title='Create' />
            <TextInput onChange={e => setUpdateName(e.nativeEvent.text)} value={updateName} placeholder='enter something and press Update button to update' />

            {/* Update */}
            <Button onPress={() => updateFromCollection("sampleCollection", { "name": updateName }, selectedID, () => readData(), () => console.error("Error Occurd!"))} title='Update' />

            {/* Delete */}
            <Button onPress={() => deleteFromCollection("sampleCollection", selectedID, () => readData(), () => console.error("Error Occurd!"))} title='Delete' />

            <View>
                {/* Do This whenever you need to view docs */}
                {
                    dataArray.map(doc => (
                        <TouchableOpacity onPress={() => { setUpdateName(doc.name); setSelectedID(doc.id) }} key={doc.name}><Text>{doc.name}</Text></TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default SampleCRUD