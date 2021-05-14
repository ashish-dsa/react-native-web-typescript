import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from "@react-navigation/native";
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from "react-native-paper";

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};
