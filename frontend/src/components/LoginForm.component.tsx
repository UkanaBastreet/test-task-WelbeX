import { Button, Form, Input, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
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

const LoginForm: FC = () => {
  return (
    <StyledForm
      name="login"
      initialValues={{ remember: true }}
      layout="vertical"
    >
      <Form.Item
        name="login"
        rules={[
          { required: true, message: "Пожалуйста, введите email" },
          { type: "email", message: "Введите корректный email" }
        ]}
      >
        <Input 
          prefix={<UserOutlined />} 
          placeholder="Email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Пароль"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button" size="large">
          Войти
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default LoginForm;
