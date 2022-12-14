import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface StyleProps {
  type: "up" | "down" | "total";
}

export const HighlightCardContainer = styled.View<StyleProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
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

export const HighlightCardTitle = styled.Text<StyleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const HighlightCardIcon = styled(Feather).attrs(({ theme }) => ({
  size: RFValue(24),
}))<StyleProps>`
  ${({ type, theme }) =>
    type === "up" &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === "down" &&
    css`
      color: ${theme.colors.attention};
    `}

  ${({ type, theme }) =>
    type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}
`;

export const HighlightCardFooter = styled.View``;

export const HighlightCardAmount = styled.Text<StyleProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};

  margin-top: 38px;
`;

export const HighlightCardLastTransaction = styled.Text<StyleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;
