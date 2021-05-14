import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import React from "react";
import "react-native";
import ExampleScreen1 from "screens/ExampleScreen1";
import ExampleScreen2 from "screens/ExampleScreen2";
import {ROUTES} from "./constants";

export const BaseNavigator = ({theme}: {theme: Theme}) => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{...TransitionScreenOptions, headerShown: false}}>
        <Stack.Screen name={ROUTES.ExampleScreen1} component={ExampleScreen1} />
        <Stack.Screen name={ROUTES.ExampleScreen2} component={ExampleScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
