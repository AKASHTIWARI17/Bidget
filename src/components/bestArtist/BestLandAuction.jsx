import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Timer from "../common/Timer";

const MemoizedTimer = React.memo(Timer);
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function BestLandAuction() {
    const slider = useMemo(()=>{
        return{
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 1000,
            loop: true,
            roundLengths: false,
            navigation: {
              nextEl: '.upcoming-next',
              prevEl: '.upcoming-prev',
            },
        
            breakpoints: {
              480:{
                slidesPerView: 1
              },
              768:{
                slidesPerView: 1
              },
              992:{ 
                slidesPerView: 1
              },
              1200:{
                slidesPerView: 1
              },
             
            }
        }
    },[])
  return (
    <div className="best-land-auction-area pt-110">
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-12">
          <div className="land-section-header mx-auto mb-60">
            <h2>Some Best Auction</h2>
            <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget ex hendrerit
              mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
          </div>
        </div>
      </div>
      <Swiper {...slider} className="swiper best-auction-slider">
        <div className="swiper-wrapper pb-1">
          <SwiperSlide className="swiper-slide">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="best-auction-display">
                  <img src="assets/images/banner/best-acution-bg.png" alt="" />
                  <div className="acution-disc">
                    <div className="acution-info">
                      <div className="price">
                        <span>Bid Price</span>
                        <h5>$2500</h5>
                      </div>
                      <div className="countdown" id="timer8">
                        <p>Bid Start In</p>
                        <h6><MemoizedTimer formate="counter4"/></h6>
                      </div>
                    </div>
                    <Link legacyBehavior href="/auction-details"><a  className="bid-btn">Bid Now</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="best-auction-disc">
                  <h3 className="auction-title"><Link legacyBehavior href="/auction-details"><a>The Crescent, Dublin 18,
                      County flat fringillara erat Apartment buildings.</a></Link></h3>
                  <div className="land-location">
                    <i className="bi bi-geo-alt" /> <span>Carrickmines, Dublin</span>
                  </div>
                  <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Mauris
                    at nisi commodo, consectetur augue vel, efficitur turpis. Integer tincidunt.</p>
                  <div className="auction-features">
                    <ul className="main-feature">
                      <li><strong>Bedroom 1 :</strong> 2 single beds</li>
                      <li> <strong>Bedroom 2 :</strong> 1 large double bed</li>
                      <li> <strong>Living room :</strong> 1 sofa bed</li>
                      <li>This apartment features a balcony, sofa and electric kettle.</li>
                    </ul>
                    <div className="additional-features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> AIR CONDITIONING</li>
                        <li><i className="bx bx-check" /> BALCONY</li>
                        <li><i className="bx bx-check" /> DINING AREA</li>
                      </ul>
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> BABY SAFETY GATES</li>
                        <li><i className="bx bx-check" /> CLEANING PRODUCTS</li>
                        <li><i className="bx bx-check" /> CITY VIEW</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="row">
              <div className="col-lg-6">
                <div className="best-auction-display">
                  <img src="assets/images/banner/best-acution-bg.png" alt="" />
                  <div className="acution-disc">
                    <div className="acution-info">
                      <div className="price">
                        <span>Bid Price</span>
                        <h5>$2500</h5>
                      </div>
                      <div className="countdown" id="timer20">
                        <p>Bid Start In</p>
                        <h6><MemoizedTimer formate="counter4"/></h6>
                      </div>
                    </div>
                    <Link legacyBehavior href="/auction-details"><a  className="bid-btn">Bid Now</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="best-auction-disc">
                  <h3 className="auction-title">The Crescent, Dublin 18, County flat fringillara erat
                    Apartment buildings.</h3>
                  <div className="land-location">
                    <i className="bi bi-geo-alt" /> <span>Carrickmines, Dublin</span>
                  </div>
                  <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Mauris
                    at nisi commodo, consectetur augue vel, efficitur turpis. Integer tincidunt.</p>
                  <div className="auction-features">
                    <ul className="main-feature">
                      <li><strong>Bedroom 1 :</strong> 2 single beds</li>
                      <li> <strong>Bedroom 2 :</strong> 1 large double bed</li>
                      <li> <strong>Living room :</strong> 1 sofa bed</li>
                      <li>This apartment features a balcony, sofa and electric kettle.</li>
                    </ul>
                    <div className="additional-features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> AIR CONDITIONING</li>
                        <li><i className="bx bx-check" /> BALCONY</li>
                        <li><i className="bx bx-check" /> DINING AREA</li>
                      </ul>
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> BABY SAFETY GATES</li>
                        <li><i className="bx bx-check" /> CLEANING PRODUCTS</li>
                        <li><i className="bx bx-check" /> CITY VIEW</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="row">
              <div className="col-lg-6">
                <div className="best-auction-display">
                  <img src="assets/images/banner/best-acution-bg.png" alt="" />
                  <div className="acution-disc">
                    <div className="acution-info">
                      <div className="price">
                        <span>Bid Price</span>
                        <h5>$2500</h5>
                      </div>
                      <div className="countdown " id="timer28">
                        <span>Bid Start In</span>
                        <h6><MemoizedTimer formate="counter4"/></h6>
                      </div>
                    </div>
                    <Link legacyBehavior href="/auction-details"><a className="bid-btn">Bid Now</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="best-auction-disc">
                  <h3 className="auction-title">The Crescent, Dublin 18, County flat fringillara erat
                    Apartment buildings.</h3>
                  <div className="land-location">
                    <i className="bi bi-geo-alt" /> <span>Carrickmines, Dublin</span>
                  </div>
                  <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Mauris
                    at nisi commodo, consectetur augue vel, efficitur turpis. Integer tincidunt.</p>
                  <div className="auction-features">
                    <ul className="main-feature">
                      <li><strong>Bedroom 1 :</strong> 2 single beds</li>
                      <li> <strong>Bedroom 2 :</strong> 1 large double bed</li>
                      <li> <strong>Living room :</strong> 1 sofa bed</li>
                      <li>This apartment features a balcony, sofa and electric kettle.</li>
                    </ul>
                    <div className="additional-features d-flex flex-wrap justify-content-between">
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> AIR CONDITIONING</li>
                        <li><i className="bx bx-check" /> BALCONY</li>
                        <li><i className="bx bx-check" /> DINING AREA</li>
                      </ul>
                      <ul className="feature-list">
                        <li><i className="bx bx-check" /> BABY SAFETY GATES</li>
                        <li><i className="bx bx-check" /> CLEANING PRODUCTS</li>
                        <li><i className="bx bx-check" /> CITY VIEW</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="slider-arrows text-center d-lg-flex d-none  justify-content-between">
        <div className="upcoming-prev swiper-prev-arrow" tabIndex={0}> <img src="assets/images/icon/swiper-left2.svg" alt="" /> </div>
        <div className="upcoming-next swiper-next-arrow" tabIndex={0}> <img src="assets/images/icon/swiper-right2.svg" alt="" /></div>
      </div>
    </div>
  </div>
  
  )
}

export default BestLandAuction