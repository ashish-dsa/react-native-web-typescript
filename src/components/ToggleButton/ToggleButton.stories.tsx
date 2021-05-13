import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import ToggleButton from "./ToggleButton";

const stories = storiesOf("Components/ToggleButton", module);
stories.addDecorator(withKnobs);

stories.add("ToggleButton",()=>(
    <ToggleButton>
    
    </ToggleButton>
));