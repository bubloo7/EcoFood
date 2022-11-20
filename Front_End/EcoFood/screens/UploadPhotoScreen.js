import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View, Button } from "react-native";
import { Dimensions, Platform } from "react-native";
import {
    useFonts,
    // Quicksand_300Light,
    // Quicksand_400Regular,
    // Quicksand_500Medium,
    // Quicksand_600SemiBold,
    Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function UploadPhotoScreen() {
    const [image, setImage] = useState(null);

    return (
        <View style={styles.background}>
            <Text>UploadPhotoScreen</Text>
            <Button
                title="Pick Image"
                onPress={async () => {
                    // No permissions request is necessary for launching the image library
                    let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        quality: 1,
                        allowsEditing: true,
                    });
                    console.log("selected");
                    if (!result.cancelled) {
                        // setImage(result.uri);
                    }
                }}
            />
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
