import React, {useState} from "react";
import {FlatList, Image, Modal, StyleSheet, Text, Pressable, View} from "react-native";

/**
 * 
 * @param {Array} libraryList, array of freesound API sound
 * @param {function} onRemove , remove an sound from the array
 * @returns view of the library of selected sound from freesounds
 */
const LibraryView = ({libraryList, onRemove}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Library</Text>
            <FlatList
                data={libraryList}
                renderItem={({ item }) => 
                <View style={styles.card}>
                    <Text>{item.name}</Text>
                    <Pressable name="{item.name}" style={styles.button} onPress={() => {
                        onRemove(item);
                        }}>
                        <Text>Remove from library</Text>
                    </Pressable>
                </View>
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

//design of some elements 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    title: {
        color: "#FFF",
        backgroundColor: "tomato",
        fontSize: 32,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10    
    },
    card:{
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
        margin: 15,
    }
});

export default LibraryView;
