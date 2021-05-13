import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import TouchableRipple from "./TouchableRipple";

const stories = storiesOf("Components/TouchableRipple", module);
stories.addDecorator(withKnobs);

stories.add("TouchableRipple",()=>(
    <TouchableRipple>
    
    </TouchableRipple>
));