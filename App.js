import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import SamplerView from "./components/Sampler/SamplerView";
import SearchView from "./components/Search/SearchView";
import LibraryView from "./components/Library/LibraryView";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useState} from "react/cjs/react.development";

const Tabs = createBottomTabNavigator();

//function that create random hexa color
const randomColor = () => {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

const App = () => {
    //instanciate default sounds for the soundboard
    console.log(randomColor());
    const defaultSamples = [
        {
            name: "Cymbal",
            uri: `cymbal.wav`,
            color: randomColor(),
        },
        {
            name: "Daibyoshi",
            uri: `daibyoshi.wav`,
            color: randomColor(),
        },
        {
            name: "Med_taiko",
            uri: `med_taiko.wav`,
            color: randomColor(),
        },
        {
            name: "Miyadaiko",
            uri: `miyadaiko.wav`,
            color: randomColor(),
        },
        {
            name: "Taiko",
            uri: `taiko.wav`,
            color: randomColor(),
        },
        {
            name: "tsuzumi",
            uri: `tsuzumi.wav`,
            color: randomColor(),
        },
    ]

    //set up an array with the hook that will take all the informations from freesounds API choosed songs
    const [libraryList, setLibraryList] = useState([]);

    //method that add an item into the array
    const addItem = (item) => {
        setLibraryList((prev) => {
            if (prev.indexOf(item) === -1) {
                return [...prev, item];
            }
            return prev;
        });
    };

    //method that remove an item from the array
    const removeItem = (item) => {
        const list = [...libraryList];
        let remove = list.indexOf(item);
        list.splice(remove, 1);
        setLibraryList(list);
    }

    //view of the navigation
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        switch (route.name) {
                            case "Soundboard":
                                iconName = focused ? "musical-notes" : "musical-notes-outline";
                                break;
                            case "Search":
                                
                                iconName = focused ? "search" : "search-outline";
                                break;
                            case "Library":
                                iconName = focused ? "library" : "library-outline";
                                break;
                            default:
                                iconName = "ban";
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{ inactiveTintColor: "tomato", activeTintColor: "white", activeBackgroundColor:"tomato"}}
            >
                <Tabs.Screen name="Soundboard">
                    {(props) => <SamplerView {...props} data={defaultSamples} />}
                </Tabs.Screen>
                <Tabs.Screen name="Search">
                    {(props) => <SearchView {...props} onAdd={addItem}/>}
                </Tabs.Screen>
                <Tabs.Screen name="Library">
                    {(props) => <LibraryView {...props} onRemove={removeItem} libraryList={libraryList}/>}
                </Tabs.Screen>
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default App;
