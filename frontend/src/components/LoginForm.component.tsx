import { Button, Card, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { FC } from "react";

const LoginForm: FC = () => {
  return (
    <Form
      className="LoginForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="login"
        name={"login"}
        rules={[{ required: true, message: "Please input your username" },{type:'email'}]}
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
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
