import { Navbar } from "components";
import { Footer } from "components/Footer";
import { TopSection } from "pages/Home/TopSection";
import React from "react";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <TopSection />
      <Footer />
    </Fragment>
  );
};
