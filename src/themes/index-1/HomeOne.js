import Contact from "../../components/contact/Contact";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/header/Navbar";
import Layout from "../../components/layout/Layout";
import HeroOne from "./HeroOne";
import React from "react";
import Services from "../../components/services/Services";

export default function HomeOne() {
  return (
    <Layout>
      <Navbar />
      <HeroOne />
      <Services />
      <Contact bgColor />
      <Footer />
    </Layout>
  );
}
