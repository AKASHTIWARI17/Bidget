import LandBanner from "@/components/banner/LandBanner";
import BestLandAuction from "@/components/bestArtist/BestLandAuction";
import Homeblog4 from "@/components/blog/Homeblog4";
import CategoryAuction4 from "@/components/categoryAuction/CategoryAuction4";
import Home4Search from "@/components/common/Home4Search";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
import Hero4 from "@/components/hero/Hero4";
import LearningProcess from "@/components/learning/LearningProcess";
import LiveAuction4 from "@/components/liveAuction/LiveAuction4";
import Testimonial4 from "@/components/testimonial/Testimonial4";
import UpcomingAuction4 from "@/components/upcomingProduct/UpcomingAuction4";
import React from "react";

function IndexLandPage() {
  return (
    <>
      <Header4 />
      <Hero4 />
      <Home4Search />
      <LiveAuction4 />
      <UpcomingAuction4 />
      <LandBanner />
      <CategoryAuction4 />
      <BestLandAuction />
      <Testimonial4 />
      <LearningProcess />
      <Homeblog4 />
      <Footer4 />
    </>
  );
}

export default IndexLandPage;
