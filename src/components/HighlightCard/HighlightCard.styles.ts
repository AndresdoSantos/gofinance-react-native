import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const HighlightCardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`;

export const HighlightCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HighlightCardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const HighlightCardIcon = styled(Feather).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.colors.secondary,
}))``;

export const HighlightCardFooter = styled.View``;

export const HighlightCardAmount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 38px;
`;

export const HighlightCardLastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
