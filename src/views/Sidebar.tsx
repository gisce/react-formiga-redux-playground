import React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider width={300}>
      <h3 style={{ color: "white" }}>Sidebar</h3>
    </Sider>
  );
};
