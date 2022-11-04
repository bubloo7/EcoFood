import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./screens/FirstScreen";
import ResultScreen from "./screens/ResultScreen";
import CameraScreen from "./screens/CameraScreen";
import EntryScreen from "./screens/EntryScreen";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <View style={styles.container}>
            <FirstScreen />
            <FirstScreen />
            <FirstScreen />
        </View>
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
