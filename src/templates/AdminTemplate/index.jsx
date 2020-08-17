import React, { Fragment } from "react";
import "./index.css";
import { Route, Redirect, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/user";

import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";
import {
  MessageOutlined,
  OrderedListOutlined,
  CompassOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  StarOutlined,
  HomeOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <Layout>
        <Header className="admin_home_header">
          <Title
            level={3}
            style={{ marginRight: "auto", color: "white", marginBottom: "0" }}
          >
            Dashboard
          </Title>

          <NavLink to="/" className="nav_link">
            <Title className="sub_title">
              <HomeOutlined />
              Trang chủ
            </Title>
          </NavLink>

          <Title className="sub_title" onClick={() => dispatch(logout())}>
            <LoginOutlined />
            Đăng xuất
          </Title>
        </Header>
        <Layout>
          <Sider className="admin_home_slider">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              <Menu.Item key="1">
              <NavLink to="/admin" className="nav_link">
                  <HomeOutlined />
                  TRANG CHỦ
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/admin-users" className="nav_link">
                  <UserOutlined /> NGƯỜI DÙNG
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/admin-trips" className="nav_link">
                  <CompassOutlined />
                  CHUYẾN ĐI
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/admin-dscd" className="nav_link">
                  <OrderedListOutlined />
                  DS CHUYẾN Đi
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5" icon={<MessageOutlined />}>
                TIN NHẮN
              </Menu.Item>
              <Menu.Item key="6" icon={<BellOutlined />}>
                THÔNG BÁO
              </Menu.Item>
              <Menu.Item key="7" icon={<StarOutlined />}>
                CÔNG CỤ
              </Menu.Item>
              <Menu.Item key="8" icon={<SettingOutlined />}>
                CÀI ĐẶT
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ marginTop: "63px" }}>{props.children}</Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export const AdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <AdminLayout>
            <props.component {...propsComponent} />
          </AdminLayout>
        );
      }}
    />
  );
};
