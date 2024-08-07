import React from "react";
import { Link } from "react-router-dom";

interface InsuranceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  titleSpan?: string;
  className?: string;
  id: number;
}
const InsuranceCard: React.FC<InsuranceCardProps> = ({
  title,
  description,
  imageSrc,
  titleSpan,
  className,
  id,
}) => (
  <Link
    to={`/secure-sales-by-category/${id}`}
    className={` flex flex-col  gap-x-2 py-6 px-2 lg:px-6 rounded-2xl shadow-lg items-center ${className}`}
  >
    <div className="w-full lg:h-[400px] flex justify-center items-center  overflow-hidden mb-4">
      <img
        src={imageSrc}
        alt={title}
        className=" w-[220px] lg:w-full h-full object-cover "
      />
    </div>

    <div className="flex flex-col mt-2 lg:mt-0 justify-center items-center">
      <h3 className="text-white font-bold text-[35px] lg:text-[45px] h-16 px-10 lg:px-6  rounded-2xl flex justify-center items-center bg-[#1EA06B] text-xl  mb-2 text-center shadow-[4px_-4px_0px_4px_rgba(255,255,255,1)]">
        {title}
      </h3>
      <h3 className="text-black font-bold text-[35px] ml-10 lg:ml-28 lg:text-[30px] h-16 px-10 lg:px-6  rounded-2xl  flex justify-center items-center shadow-md shadow-black bg-white text-xl  mb-2 text-center lg:shadow-[0px_0px_0px_4px_rgba(255,255,255,1)] ">
        {titleSpan}
      </h3>
      <p className="text-white text-[18px] pt-2 lg:pt-5 text-center max-w-[600px]">
        {description}
      </p>
    </div>
  </Link>
);

const InsuranceGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Seguro",
      titleSpan: "Tecnología",
      description:
        "La tecnología que te gusta protegida gracias a nuestro sistema de protección de enseres. Teal evitará daños o pérdidas durante muchísimos años.",
      imageSrc: "/img-png/home/category1.png",
    },
    {
      id: 2,
      title: "Seguro",
      titleSpan: "De Vida",
      description:
        "La tecnología que te gusta protegida gracias a nuestro sistema de protección de salud.",
      imageSrc: "/img-png/home/category2.png",
    },
    {
      id: 3,
      title: "Seguro",
      titleSpan: "Medico",
      description:
        "La tecnología que te gusta protegida gracias a nuestro sistema de protección de salud. Teal evitará daños o pérdidas durante muchísimos años.",
      imageSrc: "/img-png/home/category4.png",
    },
    {
      id: 4,
      title: "Seguros",
      titleSpan: "Para Vehículos",
      description:
        "La tecnología que te gusta protegida gracias a nuestro sistema de protección de vehículos. Teal evitará daños o pérdidas durante muchísimos años.",
      imageSrc: "/img-png/home/category3.png",
    },
  ];

  return (
    <div className="lg:px-14 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <InsuranceCard
            key={card.id}
            id={card.id}
            title={card.title}
            titleSpan={card.titleSpan}
            description={card.description}
            imageSrc={card.imageSrc}
            className={
              index === 0 || index === 3
                ? "md:col-span-2 bg-gradient-to-l from-[#66A08C] to-[#ABDBCA] lg:flex-row"
                : "bg-gradient-to-r from-[#66A08C] to-[#ABDBCA] lg:flex-row-reverse"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
