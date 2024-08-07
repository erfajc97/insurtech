import { Image, Layout, Row } from "antd";
import NavBar from "./NavBar";
import FaqIcon from "../../assets/svgCustoms/FaqIcon";
import { Link } from "react-router-dom";

const HeaderInsurtech = () => {
  const { Header } = Layout;
  return (
    <Header className="bg-white m-0 flex justify-between px-0 items-center">
      <Link className="pt-5 m-0" to="/">
        <Image
          preview={false}
          style={{ objectFit: "cover" }}
          width={230}
          src="/img-png/logo-ec-suiza.png"
        />
      </Link>
      <Row
        align="middle"
        className="lg:w-full flex-row-reverse lg:flex-row justify-end "
      >
        <NavBar />
        <FaqIcon />
      </Row>
    </Header>
  );
};

export default HeaderInsurtech;
