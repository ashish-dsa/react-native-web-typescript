import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Badge from "./Badge";

const stories = storiesOf("Components/Badge", module);
stories.addDecorator(withKnobs);

stories.add("Badge",()=>(
    <Badge>
    
    </Badge>
));