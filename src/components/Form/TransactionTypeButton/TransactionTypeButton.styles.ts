import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface StyleProps {
  type: "up" | "down";
}

interface TransactionTypeButtonContainerStyleProps extends StyleProps {
  isActive: boolean;
}

export const TransactionTypeButtonContainer = styled.TouchableOpacity<TransactionTypeButtonContainerStyleProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ theme, isActive }) => (isActive ? 1.5 : 0)}px;
  border-color: ${({ theme }) => theme.colors.text};

  border-radius: 5px;

  padding: 16px;

  ${({ theme, type, isActive }) => {
    if (isActive) {
      if (type === "up") {
        return css`
          background-color: ${theme.colors.success_light};
        `;
      }

      if (type === "down") {
        return css`
          background-color: ${theme.colors.attention_light};
        `;
      }
    }
  }}
`;

export const TransactionTypeButtonIcon = styled(Feather).attrs({
  size: RFValue(24),
})<StyleProps>`
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const TransactionTypeButtonTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
