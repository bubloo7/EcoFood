import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View } from "react-native";

export default function ResultScreen(props) {
    // console.log("resultsScreen", props.route.params.data);
    const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==";
    console.log(props.route.params.data.base64.substring(0, 12));
    return (
        <View>
            <Text>Result Screen Top</Text>
            <Image
                style={{ width: 200, height: 200 }}
                resizeMode="stretch"
                source={{
                    uri: "data:image/jpeg;base64," + props.route.params.data.base64,

                    // uri: props.route.params.data.uri,
                    // uri: "https://reactnative.dev/img/tiny_logo.png",
                    // uri: s,
                    scale: 1,
                }}
            />
            <Text>Result Screen bottom</Text>
        </View>
    );
}
