import { Button, Card, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { FC } from "react";

const RegistrationForm: FC = () => {
  return (
      <Form
        className="RegistrationForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="username"
          name={"username"}
          rules={[{ required: true, message: "Please input your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name={"email"}
          rules={[
            { required: true, message: "Please input your email" },
            { message: "Incorrect email adress", type: "email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name={"password"}
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
  );
};

export default RegistrationForm;
