import React, { Fragment } from "react";
import { Footer, Navbar } from "components";
import { TopSection } from "pages/Home/TopSection";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <TopSection />
      <Footer />
    </Fragment>
  );
};
