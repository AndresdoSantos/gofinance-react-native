import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const TransactionCardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;

  margin-bottom: 16px;
`;

export const TransactionCardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

interface StyleProps {
  type: "positive" | "negative";
}

export const TransactionCardAmount = styled.Text<StyleProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
  margin-top: 2px;
`;

export const TransactionCardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 19px;
`;

export const TransactionCardFooterCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TransactionCardFooterCategoryIcon = styled(Feather).attrs(
  ({ theme }) => ({
    size: RFValue(20),
    color: theme.colors.text,
  })
)``;

export const TransactionCardFooterCategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 17px;
`;

export const TransactionCardFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
