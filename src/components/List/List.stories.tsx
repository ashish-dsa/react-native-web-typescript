import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import List from "./List";

const stories = storiesOf("Components/List", module);
stories.addDecorator(withKnobs);

stories.add("List",()=>(
    <List>
    
    </List>
));