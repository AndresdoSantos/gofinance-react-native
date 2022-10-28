import { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import {
  RegisterContainer,
  RegisterFields,
  RegisterFieldsTransactionsTypes,
  RegisterForm,
  RegisterHeader,
  RegisterTitle,
} from "./Register.styles";

type TransactionType = "income" | "outcome";

export function Register() {
  const [transactionType, setTransactionType] = useState<
    TransactionType | undefined
  >(undefined);

  function handleSelectTransactionType(type: TransactionType) {
    setTransactionType(type);
  }

  return (
    <RegisterContainer>
      <RegisterHeader>
        <RegisterTitle>Cadastro</RegisterTitle>
      </RegisterHeader>

      <RegisterForm>
        <RegisterFields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <RegisterFieldsTransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === "income"}
              title="Entrada"
              type="up"
              onPress={() => handleSelectTransactionType("income")}
            />
            <TransactionTypeButton
              isActive={transactionType === "outcome"}
              title="Saída"
              type="down"
              onPress={() => handleSelectTransactionType("outcome")}
            />
          </RegisterFieldsTransactionsTypes>
        </RegisterFields>

        <Button title="Enviar" />
      </RegisterForm>
    </RegisterContainer>
  );
}
