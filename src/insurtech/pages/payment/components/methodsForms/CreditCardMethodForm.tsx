import { Button, Col, Form, Row, Input, Checkbox } from "antd";
import type { FormInstance } from "antd/es/form";
import type { CheckboxProps } from "antd";
import "../../styles.css";

interface CreditCardMethodFormProps {
  loading: boolean;
  onSubmit: (values: { values: { name: string; description: string } }) => void;
  form: FormInstance;
  activeModal: () => void;
}

export const CreditCardMethodForm: React.FC<CreditCardMethodFormProps> = ({
  loading,
  onSubmit,
  form,
  activeModal,
}) => {
  const config = {
    required: true,
    message: "El campo es necesario",
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
              label="Card Number"
              name="card-number"
              rules={[{ ...config }]}
            >
              <Input
                className="h-12 w-full rounded-md"
                placeholder="1234 1234 1234 1234"
              />
            </Form.Item>
            <div className="flex w-full gap-x-5">
              <Form.Item
                className="custom-label-form  w-full"
                rules={[{ ...config }]}
                label="Expiration Date"
                name="expiration-date"
              >
                <Input className="h-12 w-full rounded-md" placeholder="MM/YY" />
              </Form.Item>
              <Form.Item
                className="custom-label-form  w-full"
                rules={[{ ...config }]}
                label="CVV"
                name="cvv"
              >
                <Input className="h-12 w-full rounded-md" placeholder="123" />
              </Form.Item>
            </div>
            <Form.Item
              className="custom-label-form"
              label=""
              name="save-card"
              valuePropName="checked"
            >
              <Checkbox
                style={{ color: "#ACACAC", fontSize: "16px" }}
                onChange={onChange}
              >
                Save card details
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Button
            onClick={activeModal}
            disabled={loading}
            loading={loading}
            htmlType="submit"
            className="bg-[#1EA06B] text-[18px] w-full my-10 lg:py-7 py-6 lg:px-10 rounded-md  text-white button lg:text-[25px]"
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

export default CreditCardMethodForm;
