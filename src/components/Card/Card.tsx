import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type DefaultCardProps = React.ComponentProps<typeof PaperCard>;
// type CardTitle = React.ComponentProps<typeof PaperCard.Title>;
// type CardContent = React.ComponentProps<typeof PaperCard.Content>;
// type CardActions = React.ComponentProps<typeof PaperCard.Actions>;
// type CardCover = React.ComponentProps<typeof PaperCard.Cover>;
export type CardProps = DefaultCardProps;

const Card: React.FC<CardProps> = (props): ReactElement => {
  return <PaperCard {...props} />;
};
export default Card;
