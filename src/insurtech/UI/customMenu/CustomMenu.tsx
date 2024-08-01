import { MenuOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";

interface MenusProps {
  items: MenuProps["items"];
}
const CustomMenu: React.FC<MenusProps> = ({ items }) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      items={items}
      className="bg-[#228093] lg:bg-gradient-to-r from-[#228093] lg:text-[20px] to-[#154B52] lg:justify-center justify-end"
      style={{ flex: 1, minWidth: 0, fontWeight: "bold" }}
      overflowedIndicator={
        <MenuOutlined
          style={{ fontSize: "20px", color: "#fff", padding: "5px 2px" }}
        />
      }
    />
  );
};

export default CustomMenu;
