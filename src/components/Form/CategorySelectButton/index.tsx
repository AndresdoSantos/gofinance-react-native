import { TouchableOpacityProps } from "react-native";

import {
  CategorySelectButtonContainer,
  CategorySelectButtonIcon,
  CategorySelectButtonTitle,
} from "./CategorySelectButton.styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, ...props }: Props) {
  return (
    <CategorySelectButtonContainer {...props}>
      <CategorySelectButtonTitle>{title}</CategorySelectButtonTitle>

      <CategorySelectButtonIcon name="chevron-down" />
    </CategorySelectButtonContainer>
  );
}
