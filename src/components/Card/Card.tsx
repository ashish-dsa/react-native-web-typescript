import React, {ReactElement} from "react";
import {Card as PaperCard} from "react-native-paper";

export type CardProps = React.ComponentProps<typeof PaperCard>;

const Card: React.FC<CardProps> = (props): ReactElement => {
  return <PaperCard {...props} />;
};
export default Card;
