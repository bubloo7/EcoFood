import { StyleSheet, Text, View } from "react-native";

export default function FirstScreen() {
    return (
        <View style={styles.background}>
            <View style={styles.header}></View>
            <View style={styles.circle}></View>
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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    circle: {
        backgroundColor: "#BBBE64",
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    container: {
        flex: 1,
        backgroundColor: "#E3F2FD",
        alignItems: "center",
        justifyContent: "center",
    },
});
