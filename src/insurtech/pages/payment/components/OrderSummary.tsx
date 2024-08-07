import { Button, Divider, Input } from "antd";

const OrderSummary = () => {
  return (
    <div className="bg-[#00993d30] h-screen w-full py-5 px-16 lg:px-36 flex flex-col justify-center ">
      <p className="text-[20px] lg:text-[35px] font-bold">Order Summary</p>
      <Divider className="h-1 bg-[#ACACAC] rounded-sm" />

      <div className="flex items-center my-10">
        <div className="w-12 h-12 bg-white text-[#1E6873] font-extrabold flex items-center justify-center  text-4xl">
          T
        </div>
        <div className="ml-4 flex-1">
          <p className="font-bold text-lg">Seguro De Tecnología x 5 años</p>
          <p className="text-sm text-gray-600">Insurtech company</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">$49.80</p>
          <p className="text-sm text-gray-600">Qty: 1</p>
        </div>
      </div>

      <Divider className=" bg-[#ACACAC] rounded-sm" />
      <div className="flex gap-x-5">
        <Input
          className="w-full p-2 border rounded-md mb-4 flex-2"
          placeholder="Gift or discount code"
        />
        <Button
          htmlType="submit"
          className="w-[100px] bg-[#ACACAC] text-white py-2 rounded-md mb-4"
          size="large"
        >
          <p>Apply</p>
        </Button>
      </div>

      <div className="flex justify-between mb-2">
        <p className="font-semibold">Subtotal</p>
        <p className="font-bold">$49.80</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="font-semibold">Shipping</p>
        <p className="font-bold">$7.24</p>
      </div>
      <Divider className=" bg-[#ACACAC] rounded-sm" />
      <div className="flex justify-between mb-2">
        <p className="font-bold text-lg">Total</p>
        <p className="font-bold text-3xl">$59.28</p>
      </div>
      <p className="text-gray-500 text-sm">Including $2.24 in taxes</p>
    </div>
  );
};

export default OrderSummary;
