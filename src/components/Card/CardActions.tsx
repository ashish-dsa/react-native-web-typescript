import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type CardActions = React.ComponentProps<typeof PaperCard.Actions>;

export const CardActions: React.FC<CardActions> = (props): ReactElement => {
  return <PaperCard.Actions {...props} />;
};
