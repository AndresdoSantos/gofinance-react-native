import { Input } from "../../components/Form/Input";
import {
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
  RegisterTitle,
} from "./Register.styles";

export function Register() {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <RegisterTitle>Cadastro</RegisterTitle>
      </RegisterHeader>

      <RegisterForm>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </RegisterForm>
    </RegisterContainer>
  );
}
