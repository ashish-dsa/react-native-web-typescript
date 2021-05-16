import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type CardTitle = React.ComponentProps<typeof PaperCard.Title>;

export const CardTitle: React.FC<CardTitle> = (props): ReactElement => {
  return <PaperCard.Title {...props} />;
};
