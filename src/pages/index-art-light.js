import BuyerArea1 from "@/components/Buyer/BuyerArea1";
import BestArtist from "@/components/bestArtist/BestArtist";
import HomeBlog5 from "@/components/blog/HomeBlog5";
import Category5 from "@/components/categoryAuction/Category5";
import ExploreArea5 from "@/components/explore/ExploreArea5";
import Footer5 from "@/components/footer/Footer5";
import Header5 from "@/components/header/Header5";
import Hero5 from "@/components/hero/Hero5";
import LiveAuction5 from "@/components/liveAuction/LiveAuction5";
import Newslatter5 from "@/components/newslatter/Newslatter5";
import TopCollection5 from "@/components/topProduct/TopCollection5";
import React from "react";

function UndexArtLightPage() {
  return (
    <>
      <Header5 />
      <Hero5 />
      <Category5 />
      <LiveAuction5 />
      <BestArtist/>
      <BuyerArea1/>
      <TopCollection5/>
      <ExploreArea5/>
      <HomeBlog5/>
      <Newslatter5/>
      <Footer5/>
    </>
  );
}

export default UndexArtLightPage;
