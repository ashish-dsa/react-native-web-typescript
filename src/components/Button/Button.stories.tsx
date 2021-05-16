import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import React, {ReactElement} from "react";
import Button from "./Button";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

const buttonStory: React.FC<any> = (): ReactElement => {
  return (
    <Button
      color={color("Color", "blue")}
      disabled={boolean("Disabled", false)}
      mode={select("Mode", ["text", "outlined", "contained"], "contained")}
      icon="camera">
      {text("Label", "Default")}
    </Button>
  );
};
stories.add("Button", buttonStory);
