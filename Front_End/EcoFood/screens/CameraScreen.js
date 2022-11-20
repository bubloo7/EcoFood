import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { Dimensions, Platform } from "react-native";

export default function CameraScreen(props) {
    const [type, setType] = useState(CameraType.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [ratio, setRatio] = useState("1:2");

    useEffect(() => {
        if (cameraRef) {
            // cameraRef.onCameraReady();
        }
    }, [cameraRef]);
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    return (
        <Camera
            style={styles.camera}
            type={type}
            ratio={ratio}
            ref={(ref) => {
                setCameraRef(ref);
            }}
            onCameraReady={() => {
                cameraRef.getSupportedRatiosAsync().then((data) => {
                    setRatio(data[data.length - 1]);
                });
            }}
        >
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //take photo
                        cameraRef.takePictureAsync({ base64: true }).then((data) => {
                            console.log("clicked\n");
                            console.log(Object.keys(data));
                            props.navigation.navigate("ResultScreen", { data: data });
                        });
                    }}
                ></TouchableOpacity>
            </View>
        </Camera>
        // <CameraScreen2 />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        left: Dimensions.get("window").width * 0.5 - 38,
        top: Dimensions.get("window").height * 0.8,
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Button, Image } from "react-native";
// import { Camera } from "expo-camera";

// export default function App() {
//     const [hasCameraPermission, setHasCameraPermission] = useState(null);
//     const [camera, setCamera] = useState(null);
//     const [image, setImage] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     useEffect(() => {
//         (async () => {
//             const cameraStatus = await Camera.requestPermissionsAsync();
//             setHasCameraPermission(cameraStatus.status === "granted");
//         })();
//     }, []);
//     const takePicture = async () => {
//         if (camera) {
//             const data = await camera.takePictureAsync(null);
//             setImage(data.uri);
//         }
//     };

//     if (hasCameraPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={styles.cameraContainer}>
//                 <Camera ref={(ref) => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={"1:1"} />
//             </View>
//             <Button
//                 title="Flip Image"
//                 onPress={() => {
//                     setType(
//                         type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
//                     );
//                 }}
//             ></Button>
//             <Button title="Take Picture" onPress={() => takePicture()} />
//             {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     cameraContainer: {
//         flex: 1,
//         flexDirection: "row",
//     },
//     fixedRatio: {
//         flex: 1,
//         aspectRatio: 1,
//     },
// });
