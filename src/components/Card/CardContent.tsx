import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type CardContent = React.ComponentProps<typeof PaperCard.Content>;

const CardContent: React.FC<CardContent> = (props): ReactElement => {
  return <PaperCard.Content {...props} />;
};
export default CardContent;
