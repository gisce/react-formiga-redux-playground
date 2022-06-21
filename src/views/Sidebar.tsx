import React from "react";
import { Button, Layout, Space } from "antd";
import { useDispatch } from "react-redux";
import { addTab } from "../redux/reducers/tabsReducer";
import { v4 as uuidv4 } from "uuid";

const { Sider } = Layout;

export const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Sider width={200} style={{ padding: 20 }}>
      <h3 style={{ color: "white" }}>Sidebar</h3>
      <Space direction="vertical">
        <Button
          block
          onClick={() => {
            dispatch(
              addTab({
                id: uuidv4(),
                title: "Person tab",
                type: "person",
                values: {},
              })
            );
          }}
        >
          New person tab
        </Button>
        <Button
          block
          onClick={() => {
            dispatch(
              addTab({
                id: uuidv4(),
                title: "Company tab",
                type: "company",
                values: {},
              })
            );
          }}
        >
          New company tab
        </Button>
        <Button
          block
          onClick={() => {
            dispatch(
              addTab({
                id: uuidv4(),
                title: "Table tab",
                type: "table",
                values: {},
              })
            );
          }}
        >
          New table tab
        </Button>
      </Space>
    </Sider>
  );
};
