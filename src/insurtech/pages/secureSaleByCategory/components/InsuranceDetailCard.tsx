import { Button, Col, Divider, Row } from "antd";
import ToolSettingIcon from "../../../../assets/svgCustoms/ToolSettingIcon";
import CreditCardIcon from "../../../../assets/svgCustoms/CreditCardIcon";
import SupportIcon from "../../../../assets/svgCustoms/SupportIcon";
import HandsIcon from "../../../../assets/svgCustoms/HandsIcon";

interface InsuranceDetailCardProps {
  imageSrc: string;
  className?: string;
}
export const InsuranceDetailCard: React.FC<InsuranceDetailCardProps> = ({
  imageSrc,
  className,
}) => {
  const servicesIcons = [
    {
      id: 1,
      icon: <CreditCardIcon />,
      description: "Eliges el medio de pago",
    },
    {
      id: 2,
      icon: <ToolSettingIcon />,
      description: "Totalmente Automatizado",
    },
    {
      id: 3,
      icon: <SupportIcon />,
      description: "Soporte para tus dudas",
    },
    {
      id: 4,
      icon: <HandsIcon />,
      description: "Finaliza tu compra exitosamente",
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-around w-full mt-10">
      <div className="flex justify-center">
        <div
          className={` flex py-6 px-2 lg:px-6 rounded-2xl shadow-lg justify-center items-center lg:w-[800px] ${className}`}
        >
          <div className="w-auto lg:h-[400px] flex justify-center items-center  overflow-hidden mb-4">
            <img
              src={imageSrc}
              className=" lg:max-w-[520px] lg:w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[800px] mt-5 lg:mt-0 px-5">
        <div className="flex-col">
          <div>
            <p className="text-[20px] text-center lg:text-start font-bold lg:text-[40px] text-[#08A262] mb-5">
              Tecnología Protegida para tus Compras en linea
            </p>
          </div>
          <div>
            <p className="text-black text-[14px] text-center lg:text-start lg:text-[18px]">
              Asegura tu equipo de la mejor manera con Insurtech, ¿Por qué
              asegurar tu equipo electrico o electronico con nosotros?.
              Mejoramos tus articulos debido a que si no gastas a futuro, con
              este seguro cubres hasta el 80% de los gastos por robo y
              reparacion de dichos articulos.{" "}
            </p>
          </div>
          <div>
            <Row justify="center" className="mt-5 gap-8">
              {servicesIcons.map((service) => (
                <Col
                  key={service.id}
                  className="lg:w-40 w-32 gap-y-2 flex flex-col justify-center items-center px-2 py-2 rounded-md bg-[#58AC89]"
                >
                  {service.icon}
                  <p className="text-white text-center text-[12px] lg:text-[16px]">
                    {service.description}
                  </p>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Divider className="bg-[#D9D9D9] h-[1px]" />
            <p className="text-[#D9D9D9] text-[14px] lg:text-[16px] text-center lg:text-start">
              Con más de seis décadas de destacada trayectoria y profesionalismo
              en la actividad aseguradora, EcuaSuiza está conformada por un
              equipo comprometido en valores, principios de seguridad.
            </p>
          </div>
          <Row justify="center" className="lg:justify-start">
            <Button
              className="bg-[#1EA06B] text-[18px] p-4 my-10 lg:py-8 lg:px-10 rounded-md  text-white button lg:text-[25px]"
              size="large"
            >
              Quiero comprar mi seguro
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};
