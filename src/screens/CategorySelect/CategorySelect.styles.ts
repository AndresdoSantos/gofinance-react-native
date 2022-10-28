import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const CategorySelectContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CategorySelectHeader = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const CategorySelectTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const CategorySelectList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

interface StyleProps {
  isActive: boolean;
}

export const CategorySelectItem = styled.TouchableOpacity<StyleProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isActive }) =>
    isActive && theme.colors.secondary_light};
`;

export const CategorySelectItemIcon = styled(Feather).attrs({
  size: RFValue(20),
})`
  margin-right: 16px;
`;

export const CategorySelectItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const CategorySelectFooter = styled.View`
  width: 100%;
  padding: 24px;
`;
