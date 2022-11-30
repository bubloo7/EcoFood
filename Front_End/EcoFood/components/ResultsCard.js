import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View } from "react-native";
import { Dimensions, Platform } from "react-native";

export default function ResultsCard(props) {
    return (
        <View styles={styles.card}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.labelTitle}>land use</Text>
            <Text style={styles.content}>{props.land + " m^2 of forest"}</Text>
            <Text style={styles.labelTitle}>carbon emission</Text>
            <Text style={styles.content}>{props.co2 + " kilograms of CO2"}</Text>
            <Text style={styles.labelTitle}>water use</Text>
            <Text style={styles.content}>{props.water + " liters"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        marginHorizontal: 4,
        marginVertical: 6,
        backgroundColor: "#E3F2FD",
        borderWidth: "100%",
        borderColor: "#000000",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
    },
    labelTitle: {
        backgroundColor: "#E3F2FD",
        width: "100%",
        height: "12%",
        fontWeight: "bold",
        /*align the text to the left*/
        textAlign: "right",
        /*set a margin on right side of screen*/
        marginHorizontal: -20,
        fontSize: 18,
    },
    content: {
        backgroundColor: "#E3F2FD",
        width: "100%",
        height: "12%",
        /*align the text to the left*/
        textAlign: "right",
        /*set a margin on right side of screen*/
        marginHorizontal: -20,
        marginVertical: -10,
    },
});
