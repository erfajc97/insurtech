import { Route, Routes } from "react-router-dom";
import HeaderInsurtech from "./insurtech/components/HeaderInsurtech";
import HomePage from "./insurtech/pages/homePage/HomePage";
import Footer from "./insurtech/components/Footer";

function App() {
  return (
    <div className="max-w-[1920px] m-auto my-0">
      <HeaderInsurtech />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div> About </div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
