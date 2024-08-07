import { Image, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import "../../styles.css"; // Asegúrate de que este archivo contiene los estilos necesarios

const LoadingPurchaseProcess = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: "#08A262" }} spin />
  );

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="text-center my-8">
        <p className="text-3xl font-bold text-[#08A262]">Un momento</p>
        <p className="text-3xl font-bold text-[#08A262]">
          estamos validando tu pago
        </p>
      </div>
      <Spin indicator={antIcon} />
      <div className="text-center mt-8">
        <Link className="pt-5 m-0" to="/">
          <Image
            preview={false}
            style={{ objectFit: "cover" }}
            width={280}
            src="/img-png/logo-ec-suiza.png"
          />
        </Link>
      </div>
      <p className="text-center text-sm lg:text-xl text-black my-14">
        Compra Seguro con Insurtech, Somos tu aliado de seguros
      </p>
    </div>
  );
};

export default LoadingPurchaseProcess;
