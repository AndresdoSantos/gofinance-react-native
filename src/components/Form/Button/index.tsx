import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle } from "./Button.styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...props }: Props) {
  return (
    <ButtonContainer {...props}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
