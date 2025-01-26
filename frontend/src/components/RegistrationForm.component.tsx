import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { FC } from "react";

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 20px;
  }
  
  .ant-input-affix-wrapper {
    padding: 8px 11px;
    border-radius: 8px;
  }
  
  .submit-button {
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
`;

const RegistrationForm: FC = () => {
  return (
    <StyledForm
      name="register"
      layout="vertical"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Пожалуйста, введите имя пользователя" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Имя пользователя"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Пожалуйста, введите email" },
          { type: "email", message: "Введите корректный email" }
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Пожалуйста, введите пароль" },
          { min: 6, message: "Пароль должен быть не менее 6 символов" }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Пароль"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button" size="large">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default RegistrationForm;
