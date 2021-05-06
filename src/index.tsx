import React, {ReactElement} from "react";
import {AppRegistry, Image, Platform, StyleSheet, Text, View} from "react-native";

const App: React.FC = (): ReactElement => {
  return (
    <View style={styles.centerAlign}>
      <Text>Hello Word</Text>
      <Image
        source={{
          uri: "https://reactjs.org/logo-og.png",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 500,
    width: 500,
  },
});

AppRegistry.registerComponent("myApp", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("myApp", {
    rootTag: document.getElementById("root"),
  });
}
