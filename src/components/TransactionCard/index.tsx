import {
  TransactionCardAmount,
  TransactionCardContainer,
  TransactionCardFooter,
  TransactionCardFooterCategory,
  TransactionCardFooterCategoryIcon,
  TransactionCardFooterCategoryName,
  TransactionCardFooterDate,
  TransactionCardTitle,
} from "./TransactionCard.styles";

interface Category {
  key: string;
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <TransactionCardContainer>
      <TransactionCardTitle>{data.title}</TransactionCardTitle>
      <TransactionCardAmount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </TransactionCardAmount>

      <TransactionCardFooter>
        <TransactionCardFooterCategory>
          <TransactionCardFooterCategoryIcon name={data.category.icon} />
          <TransactionCardFooterCategoryName>
            {data.category.name}
          </TransactionCardFooterCategoryName>
        </TransactionCardFooterCategory>

        <TransactionCardFooterDate>{data.date}</TransactionCardFooterDate>
      </TransactionCardFooter>
    </TransactionCardContainer>
  );
}
