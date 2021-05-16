import {text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import React from "react";
import Card from "./Card";
import {CardCover} from "./CardCover";
import {CardTitle} from "./CardTitle";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Card", () => (
  <Card>
    <CardTitle title={text("Card Title", "Title")} subtitle={text("Card Subtitle", "Subtitle")} />
    <CardCover source={{uri: text("Cover Source", "https://picsum.photos/700")}} />
  </Card>
));
