import Home2Blog from "@/components/blog/Home2Blog";
import Newslatter from "@/components/common/Newslatter";
import Footer2 from "@/components/footer/Footer2";
import Header3 from "@/components/header/Header3";
import Hero2 from "@/components/hero/Hero2";
import LiveAuction1 from "@/components/liveAuction/LiveAuction1";
import ProductCategory2 from "@/components/productCategory/ProductCategory2";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import TopWinner2 from "@/components/topWinner/TopWinner2";
import UpcomingProduct2 from "@/components/upcomingProduct/UpcomingProduct2";
import WinProcess2 from "@/components/winProcess/WinProcess2";
import React from "react";

function IndexCarPage() {
  return (
    <>
      <Header3 />
      <Hero2/>
      <ProductCategory2/>
      <LiveAuction1/>
      <UpcomingProduct2/>
      <WinProcess2/>
      <TopWinner2/>
      <Home2Testimonial/>
      <Home2Blog/>
      <Newslatter/>
      <Footer2/>
    </>
  );
}

export default IndexCarPage;
