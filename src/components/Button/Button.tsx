import React, {ReactElement} from "react";
import {Button as PaperButton} from "react-native-paper";

export type ButtonProps = React.ComponentProps<typeof PaperButton>;

const Card: React.FC<ButtonProps> = (props): ReactElement => {
  return <PaperButton {...props} />;
};

export default Card;
