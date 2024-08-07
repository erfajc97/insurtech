import { Route, Routes, useLocation } from "react-router-dom";
import HeaderInsurtech from "./insurtech/components/HeaderInsurtech";
import HomePage from "./insurtech/pages/homePage/HomePage";
import Footer from "./insurtech/components/Footer";
import SecureSaleByCategoryPage from "./insurtech/pages/secureSaleByCategory/SecureSaleByCategoryPage";
import PaymentPage from "./insurtech/pages/payment/PaymentPage";
import NotFoundPage from "./insurtech/pages/not-found/NotFoundPage";
import ScrollToTop from "./insurtech/components/ScrollToTop";
import MoreSecureToOfferPage from "./insurtech/pages/moreSecureToOffer/MoreSecureToOfferPage";

function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== "/payment";
  return (
    <div className="max-w-[1920px] m-auto my-0">
      <ScrollToTop />
      {showHeaderFooter && <HeaderInsurtech />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div> About </div>} />
        <Route
          path="/secure-sales-by-category/:id"
          element={<SecureSaleByCategoryPage />}
        />
        <Route path="/secure-to-offer" element={<MoreSecureToOfferPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
