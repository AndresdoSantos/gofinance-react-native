import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const DashboardContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DashboardHeader = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DashboardHeaderUserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardHeaderUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DashboardHeaderUserPhoto = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const DashboardHeaderUser = styled.View`
  margin-left: 17px;
`;

const Font = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const DashboardHeaderGreeting = styled(Font)`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DashboardHeaderName = styled(Font)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DashboardHeaderLogout = styled(Feather).attrs(({ theme }) => ({
  size: RFValue(24),
  name: "power",
  color: theme.colors.secondary,
}))``;
