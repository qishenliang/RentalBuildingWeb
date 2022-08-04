import { useState } from "react";
import { Button, Form, Input, message, Tabs } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login, register } from "@/api/basic";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Login() {
  const [form] = Form.useForm<{ username: string; password: string }>();
  const [activeKey, setActiveKey] = useState("login");
  const navigate = useNavigate();

  const onTabsChange = (key: string) => {
    form.setFieldsValue({ username: "", password: "" });
    setActiveKey(key);
  };

  const onSubmit = async (values) => {
    const requestFn = activeKey === "login" ? login : register;
    const res: any = await requestFn(values);
    if (res.code === 200) {
      message.success(res.mes);
      navigate("/");
    } else {
      message.error(res.mes);
    }
  };
  return (
    <div className="login-warpper">
      <div className="login-warpper_content">
        <Tabs activeKey={activeKey} centered onChange={onTabsChange}>
          <Tabs.TabPane tab="登录" key="login"></Tabs.TabPane>
          <Tabs.TabPane tab="注册" key="register"></Tabs.TabPane>
        </Tabs>
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入账户名" }]}
          >
            <Input placeholder="用户名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
