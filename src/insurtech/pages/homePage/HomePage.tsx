import CustomLayout from "../../layout/RootLayout";
import InsuranceBanner from "./components/InsuranceBanner";

const HomePage = () => {
  return (
    <CustomLayout classNameContent="bg-white">
      <InsuranceBanner />
    </CustomLayout>
  );
};

export default HomePage;
