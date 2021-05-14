import React from "react";
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";

export const decorators = [
  Story => (
    <div>
      <style type="text/css">{`
         @font-face {
          src: url(${iconFont});
          font-family: MaterialCommunityIcons;
        }
       `}</style>
      <Story />
    </div>
  ),
];

export const parameters = {
  backgrounds: {
    values: [
      {name: "red", value: "#f00"},
      {name: "green", value: "#0f0"},
    ],
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
    },
  },
};
