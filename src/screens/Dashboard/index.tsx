import {
  DashboardContainer,
  DashboardHeader,
  DashboardHeaderGreeting,
  DashboardHeaderUserWrapper,
  DashboardHeaderName,
  DashboardHeaderUser,
  DashboardHeaderUserInfo,
  DashboardHeaderUserPhoto,
  DashboardHeaderLogout,
} from "./Dashboard.styles";

export function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardHeaderUserWrapper>
          <DashboardHeaderUserInfo>
            <DashboardHeaderUserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/71148901?v=4",
              }}
            />
            <DashboardHeaderUser>
              <DashboardHeaderGreeting>Olá</DashboardHeaderGreeting>
              <DashboardHeaderName>Andres dos Santos</DashboardHeaderName>
            </DashboardHeaderUser>
          </DashboardHeaderUserInfo>
          <DashboardHeaderLogout />
        </DashboardHeaderUserWrapper>
      </DashboardHeader>
    </DashboardContainer>
  );
}
