import React from "react";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function PrivacyPolicPage() {
  return (
    <Layout>
      <Navbar />
      <PageHeader />
      <PrivacyPolicy />
      <Footer />
    </Layout>
  );
}
