import React from "react";
import Header1 from "../header/Header1";
import Footer1 from "../footer/Footer1";

function Layout({ children }) {
  return (
    <>
      <Header1 />
      {children}
      <Footer1 />
    </>
  );
}

export default Layout;
