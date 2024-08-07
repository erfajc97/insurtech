import React from "react";
import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";

interface CustomTabProps {
  onChange: (key: string) => void;
  items: TabsProps["items"];
}

const CustomTabs: React.FC<CustomTabProps> = ({ items, onChange }) => {
  // const onChange = (key: string) => {
  //   console.log(key);
  // };

  // const items: TabsProps["items"] = [
  //   {
  //     key: "1",
  //     label: "Tab 1",
  //     children: "Content of Tab Pane 1",
  //   },
  //   {
  //     key: "2",
  //     label: "Tab 2",
  //     children: "Content of Tab Pane 2",
  //   },
  //   {
  //     key: "3",
  //     label: "Tab 3",
  //     children: "Content of Tab Pane 3",
  //   },
  // ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemColor: "grey",
          },
        },
        token: {
          colorPrimary: "#00993D",
          borderRadius: 2,
        },
      }}
    >
      <Tabs
        className="custom-tab"
        centered
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export default CustomTabs;
