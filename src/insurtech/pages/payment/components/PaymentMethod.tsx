import { Divider, Image, Radio, Form } from "antd";
import { Link } from "react-router-dom";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import CreditCardMethodForm from "./methodsForms/CreditCardMethodForm";
import BankMethodForm from "./methodsForms/BankMethodForm";
import TransferMethod from "./methodsForms/TransferMethod";
import PurchaseStatusModal from "./modals/PurchaseStatusModal";
import useOpenCloseModal from "../../../UI/customModal/hooks/useOpenCloseModal";

const PaymentMethod = () => {
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const { isOpenModal, handleOpenCloseModal } = useOpenCloseModal();

  const onReset = () => form.resetFields();

  const onSumit = (value: {
    values: { name: string; description: string };
  }) => {
    onReset();
    console.log(value);
  };
  const [body, setBody] = useState(
    <CreditCardMethodForm
      loading={false}
      onSubmit={onSumit}
      form={form}
      activeModal={handleOpenCloseModal}
    />
  );

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case 1:
        setBody(
          <CreditCardMethodForm
            loading={false}
            onSubmit={onSumit}
            form={form}
            activeModal={handleOpenCloseModal}
          />
        );
        break;
      case 2:
        setBody(
          <BankMethodForm
            loading={false}
            onSubmit={onSumit}
            form={form}
            activeModal={handleOpenCloseModal}
          />
        );
        break;
      case 3:
        setBody(
          <TransferMethod loading={false} activeModal={handleOpenCloseModal} />
        );
        break;
      default:
        break;
    }
    onReset();
  };

  return (
    <div className="p-5">
      <div className="lg:my-10 lg:ml-20">
        <Link className="" to="/">
          <Image
            preview={false}
            style={{ objectFit: "cover" }}
            width={230}
            src="/img-png/logo-ec-suiza.png"
          />
        </Link>
      </div>
      <div className="px-5 lg:px-20">
        <p className="text-[20px] lg:text-[28px] font-bold">Payment</p>
        <Divider className="h-1 bg-[#ACACAC] rounded-sm" />
        <p className="text-[16px] lg:text-[20px] font-bold my-10">Pay With:</p>
        <Radio.Group onChange={onChange} className="custom-radio" value={value}>
          <Radio value={1}>Card</Radio>
          <Radio value={2}>Bank</Radio>
          <Radio value={3}>Transfer</Radio>
        </Radio.Group>
        <div>{body}</div>
      </div>
      <PurchaseStatusModal
        isOpenModal={isOpenModal}
        onCancel={handleOpenCloseModal}
      />
    </div>
  );
};

export default PaymentMethod;
