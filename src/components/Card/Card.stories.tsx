import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
// import Card from "./Card";
import {Button, Card, Paragraph, Title} from "react-native-paper";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Card", () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{uri: "https://picsum.photos/700"}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
));
