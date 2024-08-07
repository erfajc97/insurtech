import { Button, Col, Form, Row, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import "../../styles.css";

interface BankMethodFormProps {
  loading: boolean;
  onSubmit: (values: { values: { name: string; description: string } }) => void;
  form: FormInstance;
  activeModal: () => void;
}

export const BankMethodForm: React.FC<BankMethodFormProps> = ({
  loading,
  onSubmit,
  form,
  activeModal,
}) => {
  const config = {
    required: true,
    message: "El campo es necesario",
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const optionsBank = [
    { value: "gye", label: "Guayaquil" },
    { value: "pich", label: "Pichincha" },
    { value: "prod", label: "Produbanco" },
  ];

  return (
    <div>
      <Form
        className="mt-10"
        form={form}
        layout="vertical"
        onFinish={(values) => onSubmit({ values })}
      >
        <Row justify="center" align="middle" gutter={40}>
          <Col className="w-full mx-auto">
            <Form.Item
              className="custom-label-form"
              label=""
              name="type-bank"
              rules={[{ ...config }]}
            >
              <Select
                // defaultValue="gye"
                className="h-12 w-full rounded-md"
                placeholder="Choose a bank"
                onChange={handleChange}
                options={optionsBank}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Button
            onClick={activeModal}
            disabled={loading}
            loading={loading}
            htmlType="submit"
            className="bg-[#1EA06B] text-[18px] w-full my-20 lg:py-7 py-6 lg:px-10 rounded-md  text-white button lg:text-[25px]"
            size="large"
          >
            <p>Pay USD 59.28</p>
          </Button>
          <p className="text-[#ACACAC] text-[16px]">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </Row>
      </Form>
    </div>
  );
};

export default BankMethodForm;
