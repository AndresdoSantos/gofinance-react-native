import {
  HighlightCardAmount,
  HighlightCardContainer,
  HighlightCardFooter,
  HighlightCardHeader,
  HighlightCardIcon,
  HighlightCardLastTransaction,
  HighlightCardTitle,
} from "./HighlightCard.styles";

export function HighlightCard() {
  return (
    <HighlightCardContainer>
      <HighlightCardHeader>
        <HighlightCardTitle>Entrada</HighlightCardTitle>
        <HighlightCardIcon name="arrow-up-circle" />
      </HighlightCardHeader>

      <HighlightCardFooter>
        <HighlightCardAmount>R$ 17.400,00</HighlightCardAmount>
        <HighlightCardLastTransaction>
          Última entrada dia 30 de abril
        </HighlightCardLastTransaction>
      </HighlightCardFooter>
    </HighlightCardContainer>
  );
}
