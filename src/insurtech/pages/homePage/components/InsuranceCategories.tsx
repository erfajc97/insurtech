import { Button, Row } from "antd";
import InsuranceGrid from "./InsureGrid";
import { Link } from "react-router-dom";

const InsuranceCategories = () => {
  return (
    <div className="p-5">
      <p className="text-[#08A262] text-[28px] lg:text-[35px] font-bold text-center">
        Seguros por categorías
      </p>
      <p className="text-black text-base lg:text-[20px] my-8 text-center font-bold">
        Selecciona el articulo que quieres proteger con una licencia de hasta 10
        años!
      </p>
      <InsuranceGrid />
      <Row justify="center">
        <Button
          className="bg-[#1EA06B] text-[20px] p-6 my-5 lg:py-10 lg:px-20 rounded-xl lg:rounded-[20px] text-white button lg:text-[35px]"
          size="large"
        >
          <Link to="/secure-to-offer">Ver más seguros</Link>
        </Button>
      </Row>
    </div>
  );
};

export default InsuranceCategories;
