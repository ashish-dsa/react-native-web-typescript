import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import React, {ReactElement} from "react";
import {Button as PaperButton} from "react-native-paper";
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

interface ICardProps {}
const buttonStory: React.FC<any> = (): ReactElement => {
  return (
    <>
      <style type="text/css">{`
         @font-face {
          src: url(${iconFont});
          font-family: MaterialCommunityIcons;
        }
       `}</style>
      <PaperButton
        color={color("Color", "blue")}
        disabled={boolean("Disabled", false)}
        mode={select("Mode", ["text", "outlined", "contained"], "contained")}
        icon="camera">
        {text("Label", "Default")}
      </PaperButton>
    </>
  );
};
stories.add("Button", buttonStory);
