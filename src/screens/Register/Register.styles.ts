import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const RegisterContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const RegisterHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;

export const RegisterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RegisterForm = styled.View`
  padding: 24px;
  flex: 1;
  width: 100%;
`;
