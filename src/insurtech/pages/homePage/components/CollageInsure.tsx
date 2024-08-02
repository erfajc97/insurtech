const CollageInsure = () => {
  const images = [
    { src: "/img-png/home/collage1.png", alt: "image1" },
    { src: "/img-png/home/collage3.png", alt: "image3" },
    { src: "/img-png/home/collage2.png", alt: "image2" },
    { src: "/img-png/home/collage4.png", alt: "image4" },
    { src: "/img-png/home/collage5.png", alt: "image5" },
    { src: "/img-png/home/collage6.png", alt: "image6" },
    { src: "/img-png/home/collage7.png", alt: "image7" },
    { src: "/img-png/home/collage8.png", alt: "image8" },
    { src: "/img-png/home/collage9.png", alt: "image9" },
  ];

  return (
    <div className="p-5">
      <p className="text-[#08A262] text-[28px] lg:text-[35px] font-bold text-center">
        #ECUASUIZASEGUROS
      </p>
      <p className="text-black text-base my-8 text-center font-bold lg:text-[20px]">
        Cualquier articulo que hayas adquirido añadele un seguro de vida! te
        apoyamos!
      </p>
      <div className="p-7 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${
              index === 4 ? "lg:h-[500px] lg:pt-16" : "max-h-[400px]"
            } w-full object-cover ${index === 6 && "lg:w-[190px]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CollageInsure;
