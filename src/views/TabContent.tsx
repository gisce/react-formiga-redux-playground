import React, { useEffect } from "react";
import { Tab } from "../models/Tab";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Spin,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const TabContentComp = ({
  tab,
  active,
}: {
  tab: Tab;
  active: boolean;
}) => {
  let display = active ? undefined : "none";
  console.log("Rendering tab content for tab id: ", tab.id);

  const [keys, setKeys] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setKeys([...(Array(25440).keys() as any)]);
    setLoading(false);
  }, []);

  return (
    <div style={{ display: display as any }}>
      <h3>{tab.id}</h3>

      {loading ? (
        <Spin />
      ) : (
        keys.map((i: number) => {
          return <strong style={{ display: "block" }}>{i}</strong>;
        })
      )}
      {/*
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          label="Form disabled"
          name="disabled"
          valuePropName="checked"
        >
          <Checkbox>disabled</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export const TabContent = React.memo(TabContentComp);
