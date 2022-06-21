import { Layout } from "antd";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import {
  removeTabWithId,
  setCurrentTabId,
} from "../redux/reducers/tabsReducer";
import { TabContent } from "./TabContent";

const { TabPane } = Tabs;
const { Content: AntContent } = Layout;

const Content = () => {
  const currentTabId = useSelector(
    (state: RootState) => state.tabs.currentTabId
  );
  const tabs = useSelector((state: RootState) => state.tabs.tabs);

  const dispatch = useDispatch();

  return (
    <Layout className="site-layout">
      <AntContent style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <h3>Content</h3>
          <Tabs
            type="editable-card"
            hideAdd
            activeKey={currentTabId}
            onChange={(activeKey: string) => {
              dispatch(setCurrentTabId(activeKey));
            }}
            onEdit={(targetKey: any) => {
              dispatch(removeTabWithId(targetKey));
            }}
          >
            {tabs.map((tab) => {
              return (
                <TabPane tab={`${tab.title}`} key={tab.id} closable>
                  {null}
                </TabPane>
              );
            })}
          </Tabs>
          {tabs.map((tab) => {
            return (
              <TabContent
                key={tab.id}
                tab={tab}
                active={tab.id === currentTabId}
              />
            );
          })}
        </div>
      </AntContent>
    </Layout>
  );
};

export default Content;
