import React, {ReactElement, useEffect} from "react";

interface IButtonProps {}
const Button: React.FC<IButtonProps> = (props): ReactElement => {
  useEffect(() => {
    return () => {};
  }, []);

  return <Button></Button>;
};

export default Button;
