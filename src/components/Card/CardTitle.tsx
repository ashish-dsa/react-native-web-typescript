import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type CardTitle = React.ComponentProps<typeof PaperCard.Title>;
// type CardContent = React.ComponentProps<typeof PaperCard.Content>;
// type CardActions = React.ComponentProps<typeof PaperCard.Actions>;
// type CardCover = React.ComponentProps<typeof PaperCard.Cover>;

const CardTitle: React.FC<CardTitle> = (props): ReactElement => {
  return <PaperCard.Title {...props} />;
};
export default CardTitle;
