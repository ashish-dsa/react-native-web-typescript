import {text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import {Button, Card as PaperCard, Paragraph, Title} from "react-native-paper";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Card", () => (
  <PaperCard>
    <PaperCard.Content>
      <Title>{text("Title", "Card Title")}</Title>
      <Paragraph>{text("Content", "Card Content")}</Paragraph>
    </PaperCard.Content>
    <PaperCard.Cover source={{uri: "https://picsum.photos/700"}} />
    <PaperCard.Actions>
      <Button>{text("Button1", "Cancel")}</Button>
      <Button>{text("Button2", "OK")}</Button>
    </PaperCard.Actions>
  </PaperCard>
));
