import { Route, Routes } from "react-router-dom";
import HeaderInsurtech from "./insurtech/components/HeaderInsurtech";
import HomePage from "./insurtech/pages/homePage/HomePage";

function App() {
  return (
    <>
      <HeaderInsurtech />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div> About </div>} />
      </Routes>
    </>
  );
}

export default App;
