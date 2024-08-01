import { Card, Col, Row } from "antd";

const InsuranceBanner = () => {
  return (
    <Row
      justify="space-around"
      align="middle"
      className="bg-gradient-to-r from-[#EBEAEB] to-[#858485]"
    >
      <Col>
        <img
          src="/img-png/pareja-pc.png"
          className="lg:w-[620px] lg:h-[500px] w-[300px] h-[250px] object-cover"
          alt=""
        />
      </Col>
      <Col>
        <Card style={{ width: 500 }}>
          <p></p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};

export default InsuranceBanner;
