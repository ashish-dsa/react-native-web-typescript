import {boolean, color, select, text, withKnobs} from "@storybook/addon-knobs";

import {storiesOf} from "@storybook/react-native";
import Banner from "./Banner";

const stories = storiesOf("Components/Banner", module);
stories.addDecorator(withKnobs);

stories.add("Banner",()=>(
    <Banner>
    
    </Banner>
));