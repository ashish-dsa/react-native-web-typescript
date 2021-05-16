import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

type CardCover = React.ComponentProps<typeof PaperCard.Cover>;

const CardCover: React.FC<CardCover> = (props): ReactElement => {
  return <PaperCard.Cover {...props} />;
};
export default CardCover;
