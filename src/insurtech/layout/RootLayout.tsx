import React from "react";
import { Layout } from "antd";

const { Content, Sider, Header } = Layout;

interface CustomLayoutProps {
  sider?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  classNameContent?: string;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  sider,
  header,
  children,
  classNameContent,
}) => {
  return (
    <Layout className="min-h-[calc(100vh-6vh)] ">
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
