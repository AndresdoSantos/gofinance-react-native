import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

import { DashboardTransactionsListProps } from ".";

export const DashboardContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DashboardHeader = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const DashboardHeaderUserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

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

export const DashboardHighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 8,
  },
})`
  width: 100%;
  position: absolute;

  margin-top: ${RFPercentage(20)}px;
`;

export const DashboardTransactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(8)}px;
`;

export const DashboardTransactionsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-bottom: 16px;
`;

export const DashboardTransactionsList = styled(
  FlatList as new () => FlatList<DashboardTransactionsListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
