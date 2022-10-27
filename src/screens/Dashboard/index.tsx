import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  DashboardContainer,
  DashboardHeader,
  DashboardHeaderGreeting,
  DashboardHeaderUserWrapper,
  DashboardHeaderName,
  DashboardHeaderUser,
  DashboardHeaderUserInfo,
  DashboardHeaderUserPhoto,
  DashboardHeaderLogout,
  DashboardHighlightCards,
  DashboardTransactions,
  DashboardTransactionsTitle,
  DashboardTransactionsList,
} from "./Dashboard.styles";

export interface DashboardTransactionsListProps extends TransactionCardProps {
  id: number;
}

export function Dashboard() {
  const data: DashboardTransactionsListProps[] = [
    {
      id: 0,
      type: "positive",
      amount: "R$ 3.593,89",
      category: {
        icon: "dollar-sign",
        key: "Vendas",
        name: "Vendas",
      },
      date: "13/05/2022",
      title: "Desenvolvimento de sites",
    },
    {
      id: 1,
      type: "negative",
      amount: "R$ 42,56",
      category: {
        icon: "coffee",
        key: "Vendas",
        name: "Alimentação",
      },
      date: "13/05/2022",
      title: "Café do dia",
    },
    {
      id: 2,
      type: "negative",
      amount: "R$ 3.593,89",
      category: {
        icon: "shopping-bag",
        key: "Vendas",
        name: "Compras",
      },
      date: "13/05/2022",
      title: "Aluguel da casa",
    },
  ];

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardHeaderUserWrapper>
          <DashboardHeaderUserInfo>
            <DashboardHeaderUserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/71148901?v=4",
              }}
            />
            <DashboardHeaderUser>
              <DashboardHeaderGreeting>Olá</DashboardHeaderGreeting>
              <DashboardHeaderName>Andres dos Santos</DashboardHeaderName>
            </DashboardHeaderUser>
          </DashboardHeaderUserInfo>
          <DashboardHeaderLogout />
        </DashboardHeaderUserWrapper>
      </DashboardHeader>

      <DashboardHighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          lastTransaction="Última transação em 30 de abril"
          amount="R$ 17.450,60"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          lastTransaction="Última transação em 30 de abril"
          amount="R$ 1.450,60"
        />
        <HighlightCard
          type="total"
          title="Total"
          lastTransaction="Última transação em 30 de abril"
          amount="R$ 16.450,60"
        />
      </DashboardHighlightCards>

      <DashboardTransactions>
        <DashboardTransactionsTitle>Listagem</DashboardTransactionsTitle>

        <DashboardTransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </DashboardTransactions>
    </DashboardContainer>
  );
}
