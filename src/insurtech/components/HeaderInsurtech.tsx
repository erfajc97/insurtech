import { Layout, Row } from "antd";
import NavBar from "./NavBar";
import FaqIcon from "../../assets/svgCustoms/FaqIcon";

const HeaderInsurtech = () => {
  const { Header } = Layout;
  return (
    <Header className="bg-[#228093] px-0 lg:px-10 justify-between lg:bg-gradient-to-r from-[#228093] to-[#154B52] flex lg:justify-between items-center">
      <Row>
        <h2 className="text-white font-bold pl-10 lg:pl-0 lg:pr-12 text-[24px] lg:text-[35px]">
          Insurtech
        </h2>
      </Row>
      <Row align="middle" className="lg:w-full flex-row-reverse lg:flex-row">
        <NavBar />
        <FaqIcon />
      </Row>
    </Header>
  );
};

export default HeaderInsurtech;
