import React from "react";
import { Layout } from "antd";

const { Content, Sider, Header } = Layout;

interface CustomLayoutProps {
  sider?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  heightDefault?: boolean;
  heightDefaultWithoutCal?: boolean;
  classNameContent?: string;
  className?: string;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  sider,
  header,
  children,
  classNameContent,
  className,
  heightDefault,
  heightDefaultWithoutCal,
}) => {
  return (
    <Layout
      className={`${heightDefault && "min-h-[calc(100vh-6vh)]"} ${
        heightDefaultWithoutCal && "min-h-screen"
      } ${className}`}
    >
      {sider && <Sider width={200}>{sider}</Sider>}
      <Layout>
        {header && <Header>{header}</Header>}
        <Content className={`${classNameContent}`}>
          <div style={{ minHeight: 360 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
