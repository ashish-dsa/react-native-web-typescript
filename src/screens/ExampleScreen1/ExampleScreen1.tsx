import {NavigationProp} from "@react-navigation/core";
import {ROUTES} from "navigation/constants";
import {default as React, ReactElement, useEffect} from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Appbar} from "react-native-paper";
import Button from "src/components/Button";
import Card, {CardActions, CardCover, CardTitle} from "src/components/Card";

interface IExampleScreen1Props {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const ExampleScreen1: React.FC<IExampleScreen1Props> = (props): ReactElement => {
  useEffect(() => {
    console.log("ExampleScreen1 mounted");
    return () => {
      console.log("ExampleScreen1 unmounted");
    };
  }, [props]);
  return (
    <ScrollView style={styles.backgroundStyle}>
      <Appbar.Header>
        <Appbar.Content title="Example Screen 1" subtitle="" />
      </Appbar.Header>
      {[1, 1, 1].map((value, index) => {
        return (
          <Card style={styles.card} key={index}>
            <CardTitle title="Card Title" subtitle="Card Subtitle" />
            <CardCover source={{uri: "https://picsum.photos/70" + index.toString()}} />
            <CardActions>
              <Button mode="contained" onPress={() => props.navigation.navigate(ROUTES.ExampleScreen2)}>
                Go to next screen
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: "100%",
  },
  card: {
    marginHorizontal: "2%",
    marginVertical: "2%",
  },
});

export default ExampleScreen1;
