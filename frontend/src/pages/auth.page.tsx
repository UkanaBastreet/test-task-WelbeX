import React, { useState } from "react";
import { Form, message, Radio, Card } from "antd";
import styled from "@emotion/styled";
import axios from "axios";
import LoginForm from "../components/LoginForm.component";
import RegistrationForm from "../components/RegistrationForm.component";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  width: 400px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formLayout, setFormLayout] = useState<"Login" | "Registraion">(
    "Login"
  );

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );
      localStorage.setItem("token", response.data.token);
      message.success("Вы успешно вошли!");
      window.location.href = "/blog"; // Перенаправляем на страницу блога
    } catch (error) {
      message.error("Ошибка авторизации. Проверьте данные.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Form.Item label={null} wrapperCol={{}}>
          <Radio.Group onChange={(e) => setFormLayout(e.target.value)}>
            <Radio.Button value={"Login"}>Login</Radio.Button>
            <Radio.Button value={"Registration"}>Registration</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {formLayout === "Login" ? <LoginForm /> : <RegistrationForm />}
      </Card>
    </Container>
  );
};

export default AuthPage;
