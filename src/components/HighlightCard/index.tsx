import {
  HighlightCardAmount,
  HighlightCardContainer,
  HighlightCardFooter,
  HighlightCardHeader,
  HighlightCardIcon,
  HighlightCardLastTransaction,
  HighlightCardTitle,
} from "./HighlightCard.styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ type, amount, lastTransaction, title }: Props) {
  return (
    <HighlightCardContainer type={type}>
      <HighlightCardHeader>
        <HighlightCardTitle type={type}>{title}</HighlightCardTitle>
        <HighlightCardIcon name={icon[type]} type={type} />
      </HighlightCardHeader>

      <HighlightCardFooter>
        <HighlightCardAmount type={type}>{amount}</HighlightCardAmount>
        <HighlightCardLastTransaction type={type}>
          {lastTransaction}
        </HighlightCardLastTransaction>
      </HighlightCardFooter>
    </HighlightCardContainer>
  );
}
