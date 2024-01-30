import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, LogoutRounded } from "@mui/icons-material";
import { auth, signOut } from "../config/firebase";
const { Header, Content, Footer } = Layout;
const items = ["Home", "Categories", "Login", "Signup"].map((key) => ({
  label: key,
  key: `/${key}`,
}));
const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div className="layout">
      <Layout className="layout">
        <Header
          style={{
            // background: 'white',
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            onClick={(a) => {
              navigate(a.key);
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
          <Button
            icon={<LogoutOutlined />}
            onClick={() => {
              signOut(auth)
                .then(() => {
                  alert("Successfully signout!");
                })
                .catch((error) => {
                  alert("Error! Try again");
                });
            }}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              // minHeight: 380,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          My Choice ©{new Date().getFullYear()} Created by Abdul Moiz
        </Footer>
      </Layout>
    </div>
  );
};
export default AppLayout;
