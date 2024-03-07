import React from "react";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "../components/others/ChangePassword";
import ComingSoon from "../components/others/ComingSoon";
import LoginTwo from "../components/others/LoginTwo";
import NotFound from "../components/others/NotFound";
import PasswordReset from "../components/others/PasswordReset";
import ThankYou from "../components/others/ThankYou";
import Login from "../pages/Login";
import HomeOne from "../themes/index-1/HomeOne";
import OurTeam from "../pages/OurTeam";
import TeamDetails from "../pages/TeamDetails";
import Download from "../pages/Download";
import Review from "../pages/Review";
import Faq from "../pages/Faq";
import SignupTwo from "../components/others/SignupTwo";
import SignupPage from "../pages/SignupPage";
import BlogGrid from "../pages/BlogGrid";
import BlogWithSidebar from "../pages/BlogWithSidebar";
import BlogDetails from "../pages/BlogDetails";
import ScrollToTop from "./ScrollToTop";
import TermsAndConditions from "../pages/TermsAndConditions";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-two" element={<LoginTwo />} />
        <Route path="/signup-two" element={<SignupTwo />} />
        <Route path="/basic-signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/download" element={<Download />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-sidebar" element={<BlogWithSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
