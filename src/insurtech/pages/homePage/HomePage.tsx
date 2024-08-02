import CustomLayout from "../../layout/RootLayout";
import CollageInsure from "./components/CollageInsure";
import InsuranceBanner from "./components/InsuranceBanner";
import InsuranceCategories from "./components/InsuranceCategories";
import StepsToProtectYourself from "./components/StepsToProtectYourself";
import "./styles.css";
const HomePage = () => {
  return (
    <CustomLayout classNameContent="bg-white">
      <InsuranceBanner />
      <StepsToProtectYourself />
      <InsuranceCategories />
      <CollageInsure />
    </CustomLayout>
  );
};

export default HomePage;
