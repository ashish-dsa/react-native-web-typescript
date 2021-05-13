import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Dialog from "./Dialog";

const stories = storiesOf("Components/Dialog", module);
stories.addDecorator(withKnobs);

stories.add("Dialog",()=>(
    <Dialog>
    
    </Dialog>
));