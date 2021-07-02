import React, { Component, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Image,
  Pressable
} from "react-native";

export default function SearchView({libraryList, onAdd}) {
  //define the api url and token
  const apiUrl = "https://freesound.org/apiv2/search/text/?query=";
  const apiKey = "&token=DfvrJmx6lEBQB95CAm6psmVKOfrY5l6Wu1sAQ9vg";
  //hook for the searchbar
  const [state, setState] = useState({
    text: "",
    results: [],
    selected: {},
  });

  /**
   * @returns array of sound info based on the concatenation of apiurl searchbar text and apikey
   */
  const search = () =>
    axios(apiUrl + state.text + apiKey).then(({ data }) => {
      let results = data.results;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
      console.log(state.results);
    });

  //view for the results of the search
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.search}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, text: text };
          })
        }
        placeholder="Entrez un nom..."
        onSubmitEditing={search}
        value={state.text}
      />

      <FlatList
        data={state.results}
        renderItem={(result) => (
          <View style={styles.card}>
            <Text> {result.item.name}</Text>
            <Pressable name="{item.name}" style={styles.button} onPress={() => {
                //add the song information in an array 
                onAdd(result.item);
                //create header for the request
                var myHeaders = new Headers();
                myHeaders.append("Authorization","Bearer DfvrJmx6lEBQB95CAm6psmVKOfrY5l6Wu1sAQ9vg")
                var myInit = {
                  headers: myHeaders,
                };
                //request the url to download the song selected (not working because of cors problems)
                fetch(
                  "https://freesound.org/apiv2/sounds/"+result.item.id+"/download",
                  myInit
                ).then(response => response.blob())
                .then(blob => {
                    //save the file in assets       
                });
              }}>
              <Text>Add to library</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
}

//design of some elements 
const styles = StyleSheet.create({
  search: {
    width: "100%",
    marginBottom: 40,
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
