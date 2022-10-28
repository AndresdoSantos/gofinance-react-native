import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const CategorySelectButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 18px 16px;
`;

export const CategorySelectButtonIcon = styled(Feather).attrs(({ theme }) => ({
  color: theme.colors.text,
  size: RFValue(20),
}))``;

export const CategorySelectButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
