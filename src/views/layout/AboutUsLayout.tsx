import React from "react";
import { Outlet } from "react-router-dom";
import AboutHeader from "../../composites/about/aboutHeader/AboutHeader";
import AboutFooter from "../../composites/about/aboutFooter/AboutFooter";

function AboutUsLayout() {
  return (
    <div>
      <AboutHeader />
      <Outlet />
      <AboutFooter />
    </div>
  );
}

export default AboutUsLayout;
