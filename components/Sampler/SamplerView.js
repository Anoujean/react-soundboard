import React, {useEffect, useState} from "react";
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FlatGrid} from "react-native-super-grid";
import SampleItem from "../Sampler/SampleItem";

/**
 * 
 * @param {Array} data , array of the sounds 
 * @returns view of the soundbaord with all the tiles
 */
const SamplerView = ({data}) => {
    const [visible, setVisible] = useState(false);
    const [item, setItem] = useState({name: "", color: "", uri: ""});
    const [color, setColor] = useState("#000000");

    const changeColor = (color) => {
        setItem({name: item.name, color: color, uri: item.uri});
    }

    const setModal = (item) => {
        setItem(item);
        setColor(item.color);
    }

    return (
        <View>
            <Text style={styles.title}>Soundboard</Text>
            <FlatGrid style={styles.center}
                itemDimension={100}
                data={data}
                renderItem={({ item }) => (<SampleItem item={item} setVisible={setVisible} setItem={setModal} />)}
            />
        </View>
    );
}

//design of the view and what it contains
const styles = StyleSheet.create({
    color: { width: 200, height: 200},
    center: { margin: "auto" },
    header: {
        fontSize: 30,
        backgroundColor: "blue",
        color: "white",
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    title: {
        color: "#FFF",
        backgroundColor: "tomato",
        fontSize: 32,
    },
});


export default SamplerView;