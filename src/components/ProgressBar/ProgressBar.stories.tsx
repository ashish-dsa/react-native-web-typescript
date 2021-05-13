import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import ProgressBar from "./ProgressBar";

const stories = storiesOf("Components/ProgressBar", module);
stories.addDecorator(withKnobs);

stories.add("ProgressBar",()=>(
    <ProgressBar>
    
    </ProgressBar>
));