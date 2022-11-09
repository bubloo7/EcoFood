import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./screens/FirstScreen";
import ResultScreen from "./screens/ResultScreen";
import CameraScreen from "./screens/CameraScreen";
import EntryScreen from "./screens/EntryScreen";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    console.log("first");
    return (
        // <View style={styles.container}>
        //     <FirstScreen />
        // </View>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="EntryScreen" component={EntryScreen} />
                <Stack.Screen name="ResultScreen" component={ResultScreen} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
