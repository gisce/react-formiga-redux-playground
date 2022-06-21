import React from "react";
import { Sidebar } from "./views/Sidebar";
import { Layout } from "antd";
import Content from "./views/Content";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Content />
    </Layout>
  );
}

export default App;
