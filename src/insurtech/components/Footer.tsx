import { Divider, Image } from "antd";

const footerLinks = [
  {
    category: "Links",
    items: ["Home", "Shop", "About", "Contact"],
  },
  {
    category: "Help",
    items: ["Payment Options", "Returns", "Guarantee", "Find Us"],
  },
  {
    category: "About",
    items: ["Insurtech Inc", "Legals", "Products", "How to start"],
  },
  {
    category: "Legal",
    items: ["TYC", "Privacy Policy", "Payment Options", "How we work"],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] py-8 lg:py-[50px] px-[20px] lg:px-[100px]">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:gap-[100px] ">
        <div className="flex justify-center flex-col items-center">
          <Image
            preview={false}
            style={{ objectFit: "cover" }}
            className="w-[200px] lg:w-[500px]"
            src="/img-png/logo-ec-suiza.png"
          />
          <p className="text-[#00993D] text-[16px] text-center lg:text-start mt-[10px] max-w-lg">
            Con más de seis décadas de destacada trayectoria y profesionalismo
            en la actividad aseguradora, EcuaSuiza está conformada por un equipo
            comprometido en valores, principios de seguridad y con el objetivo
            de superar las expectativas de nuestros clientes.
          </p>
        </div>
        {footerLinks.map((menu, index) => (
          <div className=" text-center" key={index}>
            <h3 className="text-[#01774F] font-bold text-[22px] mb-2">
              {menu.category}
            </h3>
            <ul className="text-[#01774F] text-[14px]">
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Divider className="bg-[#01774F] h-[5px] my-20 rounded-xl" />

      <p className="text-[#01774F] text-[16px] text-center lg:text-start lg:py-9">
        2024 Insurtech. All rights reverved
      </p>
    </div>
  );
};

export default Footer;
