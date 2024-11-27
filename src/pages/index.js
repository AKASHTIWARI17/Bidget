import Header2 from "@/components/header/Header2";
import Hero1 from "../components/hero/Hero1";
import Banner1 from "@/components/banner/Banner1";
import TopProducts from "@/components/topProduct/TopProducts";
import UpcomingProduct from "@/components/upcomingProduct/UpcomingProduct";
import ProductCategory from "@/components/productCategory/ProductCategory";
import Home1Blog from "@/components/blog/Home1Blog";
import TopWinnr1 from "@/components/topWinner/TopWinnr1";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Footer1 from "@/components/footer/Footer1";
import { useEffect, useState } from "react";
import Preloader from "@/components/common/preloader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
   
    <>
          <Header2 />
          <Hero1 />
          <Banner1 />
          <TopProducts />
          <UpcomingProduct />
          <ProductCategory />
          <Home1Blog />
          <TopWinnr1 />
          <Home1Testimonial />
          <Footer1 />
        </>
  );
}
