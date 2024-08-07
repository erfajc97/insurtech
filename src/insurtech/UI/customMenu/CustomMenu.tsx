import { MenuOutlined } from "@ant-design/icons";
import { Menu, MenuProps, ConfigProvider } from "antd";
import React from "react";

interface MenusProps {
  items: MenuProps["items"];
}
const CustomMenu: React.FC<MenusProps> = ({ items }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00993D",
        },
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        className="lg:justify-center justify-end"
        style={{ flex: 1, minWidth: 0, fontWeight: "bold", fontSize: "24px" }}
        overflowedIndicator={
          <MenuOutlined
            style={{ fontSize: "26px", color: "#08A262", padding: "5px 2px" }}
          />
        }
      />
    </ConfigProvider>
  );
};

export default CustomMenu;
