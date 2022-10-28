import { TextInputProps } from "react-native";

import { InputContainer } from "./Input.styles";

type Props = TextInputProps;

export function Input({ ...props }: Props) {
  return <InputContainer {...props}></InputContainer>;
}
