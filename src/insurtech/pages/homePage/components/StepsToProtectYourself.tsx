import { Col, Row } from "antd";

const StepsToProtectYourself = () => {
  const images = [
    {
      src: "/img-png/home/step1.png",
      alt: "image1",
      description:
        "Siéntete Segura de comprar el articulo que deseas con ecuasuiza seguro te lo cubrimos ",
    },
    {
      src: "/img-png/home/step2.png",
      alt: "image3",
      description:
        "Ese articulo que quieres que dure años protegelo con nuestro seguro de artículos",
    },
    {
      src: "/img-png/home/step3.png",
      alt: "image2",
      description:
        "Compra tu seguro de manera automatizada con el total respaldo de nosotros",
    },
  ];
  return (
    <div className="p-8">
      <p className="text-[#08A262] text-[28px] lg:text-[35px] font-bold text-center">
        ¿Como te protegemos?
      </p>
      <p className="text-black text-base lg:text-[20px] my-8 text-center font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus.
      </p>
      <Row
        justify="space-between"
        align="middle"
        gutter={[16, 16]}
        className=""
      >
        {images.map((image, index) => (
          <Col key={index} className="relative">
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full object-cover lg:w-[500px] lg:h-[750px] rounded-s-lg"
            />
            <p className="text-[18px] lg:text-[20px] max-w-lg text-center px-2 mt-2">
              {image.description}
            </p>
            <div
              className={`lg:w-24 lg:h-24 w-14 h-14 rounded-full bg-[#08A262] absolute flex justify-center items-center ${
                index === 2
                  ? "top-0 right-0"
                  : index === 0
                  ? "top-0 left-0"
                  : "bottom-24 left-10"
              }`}
            >
              <p className="text-[40px] text-white font-bold">{index + 1}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StepsToProtectYourself;
