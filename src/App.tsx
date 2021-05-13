import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Button, Card, Paragraph, Provider as PaperProvider, Title} from "react-native-paper";
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";

require("file-loader?name=[name].[ext]!./index.html");

const App: React.FC = (): ReactElement => {
  return (
    <PaperProvider>
      <style type="text/css">{`
         @font-face {
          src: url(${iconFont});
          font-family: MaterialCommunityIcons;
        }
       `}</style>
      <View style={styles.centerAlign}>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: "https://picsum.photos/700"}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Button icon="camera" mode="contained" onPress={() => console.log("Pressed")}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
