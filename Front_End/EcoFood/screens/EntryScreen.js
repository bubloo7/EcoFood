import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, Image,View, TextInput, TouchableOpacity, Button } from "react-native";
import { Dimensions, Platform } from "react-native";
import {
    useFonts,
    // Quicksand_300Light,
    // Quicksand_400Regular,
    // Quicksand_500Medium,
    // Quicksand_600SemiBold,
    Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

export default function EntryScreen(props) {
    
    const[input, setInput] = React.useState([])
    

    
    const onSomeInputChange = (text) => {
        const entry = {
            entry: text,
        };
        this.setState({ entries: [...this.state.entries, entry] });
    }   

    return (
        <View style={styles.background}>
            <SafeAreaView style={{ backgroundColor: "black" }} />
            <StatusBar backgroundColor="black" />
            <View style={styles.header}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={require("../images/logo.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 36,
                                alignSelf: "center",
                                // center the text vertically
                                textAlignVertical: "center",
                                // center the text horizontally
                                textAlign: "center",
                                color: "#544B3d",
                                fontFamily: "Quicksand_700Bold",
                            }}
                        >
                            ECOFOOD
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <TextInput 
                placeholder = "Enter a comma separated list of items..." 
                style ={styles.input}
                onChangeText = {(text) => setInput(text.split(','))}
                /*onSubmitEditing = {() => {props.navigation.navigate("ResultScreen", { data: input })}}*/
                 />
            </View>
        </View>
    
    

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#E3F2FD",
        width: "100%",
        height: "100%",
    },
    header: {
        backgroundColor: "#BBBE64",
        width: "100%",
        height: "12%",
        borderBottomLeftRadius: Dimensions.get("window").height * 0.08,
        borderBottomRightRadius: Dimensions.get("window").height * 0.08,
    },
    circle: {
        backgroundColor: "#BBBE64",
        width: Dimensions.get("window").width * 0.6,
        aspectRatio: 1,
        borderRadius: Dimensions.get("window").width * 0.3,
        // borderRadius: 1000,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#E3F2FD",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        borderColor: '#808080',
        borderWidth: 1,
        borderHeight: 3,
        height: 60,
        padding: 8,
        margin: 5,
        justifyContent: "center",
      },
      btn: {
        backgroundColor: '#F96E46',
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center', 
      },
});
