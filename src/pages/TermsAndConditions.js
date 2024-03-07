import React from "react";
import TermsConditions from "../components/terms-conditions/TermsAndConditions";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";

export default function TermsAndConditions() {
  return (
    <Layout>
      <Navbar />
      <PageHeader />
      <TermsConditions />
      <Footer />
    </Layout>
  );
}
