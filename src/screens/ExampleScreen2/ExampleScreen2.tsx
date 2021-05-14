import {NavigationProp} from "@react-navigation/core";
import {default as React, ReactElement, useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, Button, List, Searchbar, Snackbar} from "react-native-paper";

interface IExampleScreen2Props {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const ExampleScreen2: React.FC<IExampleScreen2Props> = (props): ReactElement => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = query => setSearchQuery(query);

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    console.log("ExampleScreen2 mounted");
    return () => {
      console.log("ExampleScreen2 unmounted");
    };
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title="Example Screen 2" subtitle="" />
      </Appbar.Header>
      <View style={styles.pageContent}>
        <View style={styles.individualContent}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        </View>
        <View style={styles.individualContent}>
          <Button icon="eye-outline" onPress={onToggleSnackBar} mode="contained">
            {visible ? "Hide snackbar" : "Show snackbar"}
          </Button>
        </View>
        <View style={styles.individualContent}>
          <List.Accordion title="Uncontrolled Accordion" left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </View>
        <View style={styles.individualContent}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: "Undo",
              onPress: () => {
                // Do something
              },
            }}>
            Hey there! I'm a Snackbar.
          </Snackbar>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: "100%",
  },
  pageContent: {
    marginHorizontal: "2%",
    marginVertical: "2%",
  },
  individualContent: {
    marginHorizontal: "2%",
    marginVertical: "2%",
  },
});

export default ExampleScreen2;
