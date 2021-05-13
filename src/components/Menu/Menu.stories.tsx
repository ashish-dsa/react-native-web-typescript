import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Menu from "./Menu";

const stories = storiesOf("Components/Menu", module);
stories.addDecorator(withKnobs);

stories.add("Menu",()=>(
    <Menu>
    
    </Menu>
));