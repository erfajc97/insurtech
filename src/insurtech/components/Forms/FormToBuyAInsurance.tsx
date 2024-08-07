import { Button, Col, Form, Row, Input, Image } from "antd";
import type { FormInstance } from "antd/es/form";
import "../../styles.antd.global.css";
import { Link } from "react-router-dom";

interface FormToBuyAInsuranceProps {
  loading: boolean;
  onSubmit: (values: { values: { name: string; description: string } }) => void;
  form: FormInstance;
  disabled?: boolean;
}

export const FormToBuyAInsurance: React.FC<FormToBuyAInsuranceProps> = ({
  loading,
  onSubmit,
  form,
  disabled,
}) => {
  const config = {
    required: true,
    message: "El campo es necesario",
  };

  return (
    <div>
      <Form
        className={`px-5 max-w-[1700px] mx-auto my-10 lg:px-20 border-2  rounded-xl  pt-10 ${
          disabled
            ? "border-[#AFAFAF] bg-[#afafaf6e] "
            : "border-[#08A262] bg-[#E3F7EB]"
        }`}
        form={form}
        layout="vertical"
        onFinish={(values) => onSubmit({ values })}
      >
        <Row
          gutter={52}
          justify="space-between"
          align="middle"
          className="mb-10"
        >
          <Col className="xl:hidden">
            <Image
              preview={false}
              style={{ objectFit: "cover" }}
              width={230}
              src="/img-png/logo-ec-suiza.png"
            />
          </Col>
          <Col>
            <p className="text-[#08A262] text-[25px] sm:text-[40px] text-center mt-5 lg:mt-0 lg:text-start">
              Compra tu seguro automatizado.{" "}
            </p>
            <p className="text-[#8B8787] text-[16px] sm:text-[20px] text-center lg:text-start">
              Dejanos tus datos para que podamos generar tu factura de seguros.{" "}
            </p>
          </Col>
          <Col className="hidden xl:block">
            <Image
              preview={false}
              style={{ objectFit: "cover" }}
              width={230}
              src="/img-png/logo-ec-suiza.png"
            />
          </Col>
        </Row>
        <Row justify="center" align="middle" gutter={40}>
          <Col className="lg:flex-1">
            <Form.Item
              className="custom-label"
              label="Nombre"
              name="name"
              rules={[{ ...config }]}
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="Digitar nombre"
              />
            </Form.Item>
            <Form.Item
              className="custom-label"
              rules={[{ ...config }]}
              label="Ciudad"
              name="city"
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="Guayaquil"
              />
            </Form.Item>
            <Form.Item
              className="custom-label"
              rules={[{ ...config }]}
              label="Correo Electronico"
              name="mail"
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="jose@gamil.com"
              />
            </Form.Item>
          </Col>
          <Col className="lg:flex-1">
            <Form.Item
              className="custom-label"
              label="Apellido"
              name="last_name"
              rules={[{ ...config }]}
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="Digitar apellido"
              />
            </Form.Item>
            <Form.Item
              className="custom-label"
              rules={[{ ...config }]}
              label="Celular"
              name="phone_number"
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="0999999999"
              />
            </Form.Item>
            <Form.Item
              className="custom-label "
              rules={[{ ...config }]}
              label="ID Perosona"
              name="id_person"
            >
              <Input
                className="h-12 max-w-2xl rounded-xl"
                placeholder="09212312223"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Button
            disabled={loading || disabled}
            loading={loading}
            htmlType="submit"
            className={`${
              disabled ? "bg-[#403f3f]" : "bg-[#1EA06B]"
            } text-[18px] p-4 my-10 lg:py-6 lg:px-10 rounded-md  text-white ${
              !disabled && "button"
            } lg:text-[25px]`}
            size="large"
          >
            <Link to={"/payment"}>Comprar Seguro</Link>
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default FormToBuyAInsurance;
