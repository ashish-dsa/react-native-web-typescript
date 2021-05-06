import {ReactElement} from "react";
import {AppRegistry, Platform, Text, View} from "react-native";

const App = (): ReactElement => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

AppRegistry.registerComponent("myApp", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("myApp", {
    rootTag: document.getElementById("root"),
  });
}
