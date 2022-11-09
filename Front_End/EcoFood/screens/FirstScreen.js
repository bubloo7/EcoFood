import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View, TouchableOpacity } from "react-native";
import { Dimensions, Platform } from "react-native";
import {
    useFonts,
    // Quicksand_300Light,
    // Quicksand_400Regular,
    // Quicksand_500Medium,
    // Quicksand_600SemiBold,
    Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";


export default function FirstScreen(props) {
    let [fontsLoaded] = useFonts({
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return null;
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

            <View
                style={{
                    marginTop: Dimensions.get("window").height * 0.05,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("CameraScreen");
                    }}
                >
                    <View style={styles.circle}>
                        <Image
                            source={require("../images/camera.png")}
                            style={{
                                // scaleX: (Dimensions.get("window").width * 0.0005),
                                // scaleY: Dimensions.get("window").width * 0.0005,
                                width: Dimensions.get("window").width * 0.4,
                                height: Dimensions.get("window").width * 0.4,
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
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
                    Take a photo!
                </Text>
            </View>
            <View
                style={{
                    marginTop: Dimensions.get("window").height * 0.05,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("EntryScreen");
                    }}
                >
                    <View style={styles.circle}>
                        <Image
                            source={require("../images/notes.png")}
                            style={{
                                // scaleX: (Dimensions.get("window").width * 0.0005),
                                // scaleY: Dimensions.get("window").width * 0.0005,
                                width: Dimensions.get("window").width * 0.4,
                                height: Dimensions.get("window").width * 0.4,
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

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
                    Text Entry
                </Text>
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
});
