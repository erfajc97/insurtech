import CustomTabs from "../../../UI/customTabs/CustomTabs";

const TabsInsuranceDetailCard = () => {
  const reviews = 3;

  const onChange = (key: string) => {
    console.log(key);
  };

  const DescriptionComponent = () => (
    <div className="p-5 max-w-[1500px] mx-auto">
      <p className="text-center lg:text-start text-[14px] lg:text-[18px] text-[#9F9F9F] mb-5">
        Embodying the raw, wayward spirit of rock and roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </p>
      <p className="text-center lg:text-start text-base text-[#9F9F9F]">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
  );

  const items = [
    {
      key: "1",
      label: "Descripción",
      children: <DescriptionComponent />,
    },
    {
      key: "2",
      label: "Cobertura de articulos",
      children: "",
    },
    {
      key: "3",
      label: `Reviews [${reviews}]`,
      children: "",
    },
  ];

  return (
    <div>
      <CustomTabs onChange={onChange} items={items} />
    </div>
  );
};

export default TabsInsuranceDetailCard;
