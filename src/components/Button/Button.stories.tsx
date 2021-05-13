import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import {Button as PaperButton} from "react-native-paper";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => (
  <PaperButton
    color={color("Color", "blue")}
    disabled={boolean("Disabled", false)}
    mode={select("Mode", ["text", "outlined", "contained"], "contained")}>
    {text("Label", "Default")}
  </PaperButton>
));
