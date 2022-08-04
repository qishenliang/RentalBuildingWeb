import { useState, createElement } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./style.scss";

const { Header, Sider, Content } = Layout;

function LayoutApp() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout id="components-layout">
      <Sider trigger={null} collapsible collapsed={collapse}>
        <div className="logo"></div>
        <Menu theme="dark" mode="inline"></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapse(!collapse),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          content
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
