import CustomLayout from "../../layout/RootLayout";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";

const PaymentPage = () => {
  return (
    <CustomLayout heightDefaultWithoutCal>
      <div className="flex justify-center items-center flex-col xl:flex-row">
        <div className="flex-1">
          <PaymentMethod />
        </div>
        <div className="flex-1 w-full">
          <OrderSummary />
        </div>
      </div>
    </CustomLayout>
  );
};

export default PaymentPage;
