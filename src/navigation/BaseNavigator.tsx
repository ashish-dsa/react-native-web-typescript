import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import React from "react";
import "react-native";
import Home from "screens/Home";
import {ROUTES} from "./constants";

export const BaseNavigator = () => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{...TransitionScreenOptions, headerShown: false}}>
        <Stack.Screen name={ROUTES.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
