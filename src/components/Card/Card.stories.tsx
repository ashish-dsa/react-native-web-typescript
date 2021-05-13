import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Card from "./Card";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Card",()=>(
    <Card>
    
    </Card>
));