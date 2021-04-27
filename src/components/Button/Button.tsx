import {Button as PaperButton} from "react-native-paper";

const Button = () => (
  <PaperButton icon="camera" mode="contained" onPress={() => console.log("Pressed")}>
    Press me
  </PaperButton>
);

export default Button;
