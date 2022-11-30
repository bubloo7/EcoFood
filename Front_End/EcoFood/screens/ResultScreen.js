import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View } from "react-native";
import { Dimensions, Platform } from "react-native";
import { useState, useEffect } from "react";
import ResultsCard from "../components/ResultsCard";

export default function ResultScreen(props) {
    // console.log("resultsScreen", props.route.params.data);
    const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==";
    // console.log(props.route.params.data.base64.substring(0, 12));
    // uri: "data:image/jpeg;base64," + props.route.params.data.base64,
    // style={{ width: 200, height: 200 }}
    // console.log(!!props.route.params.data);
    // console.log(props.route.params.data2);

    const url = "";
    const [card, setCards] = useState([]);

    useEffect(() => {
        if (props.route.params.data) {
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataUrl: props.route.params.data.base64 }),
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    // setData(data);
                    var c = [];
                    for (let i = 0; i < data[0].length; i++) {
                        c.push("test"
                                // (
                                //     // <ResultsCard
                                //     //     key={i}
                                //     //     name={data[0][i]}
                                //     //     score={data[1][i]}

                                // )


                        );
                    }
                });
        } else {
        }
    }, []);

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
            <View></View>
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
