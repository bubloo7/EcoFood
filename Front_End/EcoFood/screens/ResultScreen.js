import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View, ScrollView, FlatList } from "react-native";
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

    const url = "http://ec2-34-220-118-105.us-west-2.compute.amazonaws.com.:8181/";
    const [data, setData] = useState([]);
    const [card, setCards] = useState([]);
    const renderItem = ({ item }) => (
        <View>
            <ResultsCard name={item["name"]} land={item["land"]} co2={item["CO2"]} water={item["water"]} />
        </View>
    );

    useEffect(() => {
        if (props.route.params.data) {
            console.log("pre promise");
            fetch(url + "api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataUrl: "data:image/jpeg;base64," + props.route.params.data.base64 }),
            })
                .then((response) => {
                    console.log(response.ok, response.status, response.statusText);
                    console.log("post promise");
                    return response.json();
                })
                // new Promise((r) => setTimeout(r, 1000))
                .then((dataA) => {
                    // change idk to dataA
                    // const dataA = {
                    //     stats: [
                    //         {
                    //             name: "banana",
                    //             land: 3,
                    //             CO2: 13,
                    //             water: 10,
                    //         },
                    //         {
                    //             name: "apple",
                    //             land: 4,
                    //             CO2: 14,
                    //             water: 11,
                    //         },
                    //         {
                    //             name: "orange",
                    //             land: 5,
                    //             CO2: 15,
                    //             water: 12,
                    //         },
                    //         {
                    //             name: "grape",
                    //             land: 6,
                    //             CO2: 16,
                    //             water: 13,
                    //         },
                    //         {
                    //             name: "pear",
                    //             land: 7,
                    //             CO2: 17,
                    //             water: 14,
                    //         },
                    //         {
                    //             name: "pineapple",
                    //             land: 8,
                    //             CO2: 18,
                    //             water: 15,
                    //         },
                    //         {
                    //             name: "strawberry",
                    //             land: 9,
                    //             CO2: 19,
                    //             water: 16,
                    //         },
                    //         {
                    //             name: "blueberry",
                    //             land: 10,
                    //             CO2: 20,
                    //             water: 17,
                    //         },
                    //     ],
                    // };
                    // console.log(data);
                    console.log(dataA, "data thingy");
                    var c = [];
                    for (let i = 0; i < dataA["stats"].length; i++) {
                        c.push(
                            <View>
                                <ResultsCard
                                    name={dataA["stats"][i]["name"]}
                                    land={dataA["stats"][i]["land"]}
                                    co2={dataA["stats"][i]["CO2"]}
                                    water={dataA["stats"][i]["water"]}
                                />
                            </View>
                        );
                    }
                    setCards(c);
                    setData(dataA["stats"]);
                    console.log("post promise");
                });
        } else {
            console.log("in list thing pre fetch");
            fetch(url + "list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataUrl: props.route.params.data2 }),
            })
                .then((response) => {
                    console.log(response.ok, response.status, response.statusText);
                    return response.json();
                })
                .then((dataA) => {
                    console.log("dataA", dataA);
                    // setData(data);
                    var c = [];
                    for (let i = 0; i < dataA["stats"].length; i++) {
                        c.push(
                            <ResultsCard
                                name={dataA["stats"][i]["name"]}
                                land={dataA["stats"][i]["land"]}
                                co2={dataA["stats"][i]["CO2"]}
                                water={dataA["stats"][i]["water"]}
                            />
                        );
                    }
                    setCards(c);
                    setData(dataA["stats"]);
                });
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

            <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.name} />
        </View>
    );
    // return <Temp />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "10px",
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        backgroundColor: "#E3F2FD",
        width: "100%",
        height: "100%",
    },
    scrollView: {
        backgroundColor: "pink",
        marginHorizontal: 20,
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
        // flex: 1,
        backgroundColor: "#E3F2FD",
        alignItems: "center",
        justifyContent: "center",
    },
});
