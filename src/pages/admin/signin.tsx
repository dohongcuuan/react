import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { login } from "../../api/auth";
type Props = {};

const Signin = (props: Props) => {
  const {
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const { data: user } = await login(values);
    console.log(user);
    localStorage.setItem("token", JSON.stringify(user.accessToken));
    message.success("Đăng nhập thành công!", 2);
    if (user.role === "member") {
      navigate("/");
    } else {
      navigate("/products");
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 600, margin: "250px auto" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        label="Password "
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signin;
