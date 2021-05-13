import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Switch from "./Switch";

const stories = storiesOf("Components/Switch", module);
stories.addDecorator(withKnobs);

stories.add("Switch",()=>(
    <Switch>
    
    </Switch>
));