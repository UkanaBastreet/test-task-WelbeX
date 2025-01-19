import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import styled from "@emotion/styled";
import axios from "axios";

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

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/auth/login", values);
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
      <FormWrapper>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Пожалуйста, введите email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default AuthPage;
