import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/others/NotFound";
import HomeOne from "../themes/index-1/HomeOne";
import ScrollToTop from "./ScrollToTop";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicPage from "../pages/PrivacyPolicyPage";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
