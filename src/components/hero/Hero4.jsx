import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

import "swiper/css/pagination";
import { useMemo } from "react";
import Link from "next/link";

function Hero4() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      // loop: true,
      autoplay: {
        delay: 3000,
      },
      loop: "true",
      pagination: {
        type: "progressbar",
        renderBullet: (index, className) => {
          return `<span class="${className} swiper-pagination-bullet-progressbar"></span>`;
        },
      },
    };
  }, []);
  return (
    <div className="hero-style-four">
      <div className="container-fluid p-0">
        <Swiper {...slider} className="swiper swiper-container">
          <div className="swiper-wrapper ">
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">Apartment</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Bedroom 1 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 2 :</strong> 1 large double bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 sofa bed
                      </li>
                      <li>
                        This apartment features a balcony, sofa and electric
                        kettle.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> BABY SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> CLEANING PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> CITY VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$3000
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                      <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">Flat</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Bedroom 2 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 1 :</strong> 1 large bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 TV bed
                      </li>
                      <li>
                        This falt features a kitchen, stove and electric cooker.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> BABY SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> CLEANING PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> CITY VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$2500
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                        <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">House</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Dining 1 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 2 :</strong> 1 large double bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 sofa bed
                      </li>
                      <li>
                        This apartment features a balcony, sofa and electric
                        kettle.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> FIRE SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> SEA VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$2000
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                      <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner3.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">Apartment</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Bedroom 1 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 2 :</strong> 1 large double bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 sofa bed
                      </li>
                      <li>
                        This apartment features a balcony, sofa and electric
                        kettle.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> BABY SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> CLEANING PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> CITY VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$3000
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                      <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">Flat</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Bedroom 2 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 1 :</strong> 1 large bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 TV bed
                      </li>
                      <li>
                        This falt features a kitchen, stove and electric cooker.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> BABY SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> CLEANING PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> CITY VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$2500
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                      <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide hero-single-slide d-lg-grid d-block">
              <div className="hero-content-layer align-items-center justify-content-center">
                <div className="hero-content">
                  <h1 className="hero-title">House</h1>
                  <div className="featured-apartment">
                    <ul className="apartment-disc">
                      <li>
                        <strong>Dining 1 :</strong> 2 single beds
                      </li>
                      <li>
                        {" "}
                        <strong>Bedroom 2 :</strong> 1 large double bed
                      </li>
                      <li>
                        {" "}
                        <strong>Living room :</strong> 1 sofa bed
                      </li>
                      <li>
                        This apartment features a balcony, sofa and electric
                        kettle.
                      </li>
                    </ul>
                    <div className="features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> AIR CONDITIONING
                        </li>
                        <li>
                          <i className="bx bx-check" /> BALCONY
                        </li>
                        <li>
                          <i className="bx bx-check" /> DINING AREA
                        </li>
                      </ul>
                      <ul className="feature-list">
                        <li>
                          <i className="bx bx-check" /> FIRE SAFETY GATES
                        </li>
                        <li>
                          <i className="bx bx-check" /> PRODUCTS
                        </li>
                        <li>
                          <i className="bx bx-check" /> SEA VIEW
                        </li>
                      </ul>
                    </div>
                    <div className="featured-bottom d-flex gap-3 flex-wrap align-items-center">
                      <h3 className="price pe-5">
                        <span>Start In</span>$2000
                      </h3>
                      <div className="bid-btn ps-sm-5 ps-0">
                      <Link legacyBehavior href="/auction-details">
                          <a className="aprt-btn-alpha">Bid Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-highlighted-bg d-none d-lg-block">
                <img src="assets/images/banner/apertment-banner3.png" alt="" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero4;
