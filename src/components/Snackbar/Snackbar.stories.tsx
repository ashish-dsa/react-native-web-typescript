import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Snackbar from "./Snackbar";

const stories = storiesOf("Components/Snackbar", module);
stories.addDecorator(withKnobs);

stories.add("Snackbar",()=>(
    <Snackbar>
    
    </Snackbar>
));