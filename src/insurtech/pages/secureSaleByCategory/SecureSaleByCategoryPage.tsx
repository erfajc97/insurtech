import { useParams } from "react-router-dom";
import CustomLayout from "../../layout/RootLayout";
import { InsuranceDetailCard } from "./components/InsuranceDetailCard";
import { Divider, Form } from "antd";
import TabsInsuranceDetailCard from "./components/TabsInsuranceDetailCard";
import FormToBuyAInsurance from "../../components/Forms/FormToBuyAInsurance";

const SecureSaleByCategoryPage = () => {
  const { id } = useParams();
  const cards = [
    {
      id: 1,
      imageSrc: "/img-png/home/category1.png",
    },
    {
      id: 2,
      imageSrc: "/img-png/home/category2.png",
    },
    {
      id: 3,
      imageSrc: "/img-png/home/category4.png",
    },
    {
      id: 4,
      imageSrc: "/img-png/home/category3.png",
    },
  ];

  const [form] = Form.useForm();
  const onReset = () => form.resetFields();

  const onSumit = (value: {
    values: { name: string; description: string };
  }) => {
    onReset();
    console.log(value);
  };

  return (
    <CustomLayout heightDefault={false} classNameContent="bg-white my-0 p-5">
      <InsuranceDetailCard
        imageSrc={cards[Number(id) - 1]?.imageSrc}
        className="md:col-span-2 bg-gradient-to-l from-[#66A08C] to-[#ABDBCA] lg:flex-row"
      />
      <Divider className="h-1 bg-[#CACACA]" />
      <TabsInsuranceDetailCard />
      <FormToBuyAInsurance loading={false} onSubmit={onSumit} form={form} />
    </CustomLayout>
  );
};

export default SecureSaleByCategoryPage;
