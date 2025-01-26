import React, { useState } from "react";
import { Tabs, Card } from "antd";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm.component";
import RegistrationForm from "../components/RegistrationForm.component";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  
  .ant-card-body {
    padding: 24px 32px;
  }
`;

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <Container>
      <StyledCard>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          items={[
            {
              key: 'login',
              label: 'Вход',
              children: <LoginForm />,
            },
            {
              key: 'register',
              label: 'Регистрация',
              children: <RegistrationForm />,
            },
          ]}
        />
      </StyledCard>
    </Container>
  );
};

export default AuthPage;
