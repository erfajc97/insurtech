import { Button, Card, Col, Row } from "antd";
import "../styles.css";
const InsuranceBanner = () => {
  return (
    <Row
      justify="space-evenly"
      align="middle"
      className="bg-gradient-to-r from-[#EBEAEB] to-[#858485]"
    >
      <Col>
        <img
          src="/img-png/pareja-pc.png"
          className="lg:w-[980px] lg:h-[800px] w-[300px] h-[250px] object-cover"
          alt=""
        />
      </Col>
      <Col className="pb-10 lg:pb-0 md:mt-2 md:pb-5">
        <Card className="lg:w-[600px] w-[300px] shadow-lg shadow-slate-800">
          <Row style={{ flexDirection: "column", gap: "15px" }}>
            <Col>
              <p className="text-[14px] lg:text-[18px]">
                Somos Ecuasuiza Seguros
              </p>
            </Col>
            <Col>
              <p className="text-[28px] lg:text-[45px] font-bold leading-tight">
                Asegurate contra todo, te ofrecemos seguros
              </p>
            </Col>
            <Col>
              <p className="text-[14px] lg:text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium accusamus minima, repellendus quis assumenda ullam!
                Quam iusto quas at dolores.
              </p>
            </Col>
          </Row>

          <Button
            className="bg-[#08A262] mt-5 p-5 lg:py-8 rounded-xl lg:px-8 lg:text-[35px] text-white button"
            size="large"
          >
            Proteger ahora
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default InsuranceBanner;
