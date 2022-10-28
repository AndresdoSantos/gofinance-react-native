import { TouchableOpacityProps } from "react-native";
import {
  TransactionTypeButtonContainer,
  TransactionTypeButtonIcon,
  TransactionTypeButtonTitle,
} from "./TransactionTypeButton.styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...props
}: Props) {
  return (
    <TransactionTypeButtonContainer {...props} isActive={isActive}>
      <TransactionTypeButtonIcon name={icons[type]} type={type} />

      <TransactionTypeButtonTitle>{title}</TransactionTypeButtonTitle>
    </TransactionTypeButtonContainer>
  );
}
