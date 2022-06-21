import React from "react";
import { Layout } from "antd";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const { Content: AntContent } = Layout;

const Content = () => {
  return (
    <Layout className="site-layout">
      <AntContent style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <h3>Content</h3>
        </div>
      </AntContent>
    </Layout>
  );
};

export default Content;
