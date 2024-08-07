import { Form } from "antd";
import FormToBuyAInsurance from "../../components/Forms/FormToBuyAInsurance";
import InsuranceBanner from "./components/InsuranceBanner";
import InsuranceOptions from "./components/InsuranceOptions";
import CustomLayout from "../../layout/RootLayout";
import { useState } from "react";

const MoreSecureToOfferPage = () => {
  const [insuranceSelected, setInsuranceSelected] = useState<number>(0);
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
      <InsuranceBanner />
      <InsuranceOptions setInsuranceSelected={setInsuranceSelected} />
      <FormToBuyAInsurance
        loading={false}
        onSubmit={onSumit}
        form={form}
        disabled={insuranceSelected === 0 ? true : false}
      />
    </CustomLayout>
  );
};

export default MoreSecureToOfferPage;
