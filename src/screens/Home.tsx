import {NavigationProp} from "@react-navigation/core";
import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Button, Card, Paragraph, Title, withTheme} from "react-native-paper";

interface IHome {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const Home = ({navigation, theme}: IHome) => {
  return (
    <SafeAreaView style={{...styles.backgroundStyle, backgroundColor: theme.colors.surface}}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: "100%",
  },
});

export default withTheme(Home);
