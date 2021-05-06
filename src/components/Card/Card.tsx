import React, {ReactElement, useEffect} from "react";
import {Button, Card as PaperCard, Paragraph, Title} from "react-native-paper";

interface ICardProps {}
const Card: React.FC<ICardProps> = (props): ReactElement => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <PaperCard>
      <PaperCard.Title title="Card Title" subtitle="Card Subtitle" />
      <PaperCard.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </PaperCard.Content>
      <PaperCard.Cover source={{uri: "https://picsum.photos/700"}} />
      <PaperCard.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
