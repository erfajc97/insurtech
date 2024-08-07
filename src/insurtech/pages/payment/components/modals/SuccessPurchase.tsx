import { Image, Button } from "antd";
import { Link } from "react-router-dom";
import "../../styles.css";
const SuccessPurchase = () => {
  return (
    <div className="flex  items-center justify-center bg-white">
      <div className="flex  items-center justify-center my-8">
        <Image
          preview={false}
          style={{ objectFit: "cover" }}
          width={280}
          src="/img-png/successPurchase.png"
        />
      </div>
      <div className="text-center  px-10">
        <p className="text-xl font-semibold mb-5 text-gray-500">
          Gracias por usar los servicios de insurtech!
        </p>
        <Link className="pt-5 m-0" to="/">
          <Image
            preview={false}
            style={{ objectFit: "cover" }}
            width={200}
            src="/img-png/logo-ec-suiza.png"
          />
        </Link>
        <p className="text-xl font-bold text-black my-10">
          Felicidades, ahora estas asegurado con seguros suiza. te hemos enviado
          un archivo email en tu correo con el comprobante!
        </p>
        <div className=" w-full my-8">
          <Button
            className="bg-[#1EA06B] text-[18px] w-full my-5 lg:py-7 py-6 lg:px-8 rounded-md text-white button lg:text-[25px]"
            size="large"
          >
            <Link className="" to="/">
              Confirmar
            </Link>
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Si deseas más información comunicate con nosotros en contactanos
        </p>
      </div>
    </div>
  );
};

export default SuccessPurchase;
