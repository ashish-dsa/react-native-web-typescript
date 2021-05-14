// @ts-nocheck
import {BaseNavigator} from "navigation/BaseNavigator";
import React, {ReactElement} from "react";
import {Platform, StatusBar} from "react-native";
import {Provider as PaperProvider} from "react-native-paper";
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
import {CombinedDefaultTheme} from "services/theming";

const theme = {
  ...CombinedDefaultTheme,
};
const App: React.FC = (): ReactElement => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      {Platform.OS === "web" ? (
        <style type="text/css">{`
        @font-face {
         src: url(${iconFont});
         font-family: MaterialCommunityIcons;
       }
      `}</style>
      ) : null}

      <BaseNavigator theme={theme} />
    </PaperProvider>
  );
};

export default App;
