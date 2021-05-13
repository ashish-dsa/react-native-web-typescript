import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Checkbox from "./Checkbox";

const stories = storiesOf("Components/Checkbox", module);
stories.addDecorator(withKnobs);

stories.add("Checkbox",()=>(
    <Checkbox>
    
    </Checkbox>
));