
import React, { useMemo, useState } from "react";
import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Timer from "@/components/common/Timer";
const MemoizedTimer = React.memo(Timer);
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Hero2() {
    const [isOpen, setOpen] = useState(false);
    const slide = useMemo(()=>{
        return {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 0,
            // loop: true,
            effect: 'fade',
            centeredSlides: true,
            roundLengths: true,
            fadeEffect: {
              crossFade: true
            },
            autoplay: {
              delay: 7000
            },
            navigation: {
              nextEl: '.hero-next2',
              prevEl: '.hero-prev2',
            },
        }
    },[])
  return (
    <div className="hero-area hero-style-two">
  <Swiper {...slide} className="swiper hero-slider-two">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide hero-item position-relative">
        {/* <div className="hero-background-layer" style={{background: 'url(./assets/images/banner/hero-banner2.png)'}} /> */}
        <div className="hero-content-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome to car auction Best Platform</h1>
                  <p>Middleton in objection discovery as agreeable. Edward thrown dinin. Nulla sem porta ullamcorper orci, scelerisque ullamcorper vitae.</p>
                  <div className="hero-btns d-flex gap-5 align-items-center">
                    <Link legacyBehavior href="/auction"><a  className="alpha-btn-md">All Auction</a></Link>
                    <div className="video-pluse">
                      <span />
                      <span  />
                      <span  />
                      <div onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }} className="video-frame video-icon"><i className="bx bx-play" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="product-card featured-product-card">
                      <div className="product">
                        <img src="assets/images/product/feat-1.png" alt="" />
                        <div className="id"><span>ID 0195543</span></div>
                      </div>
                      <div className="product-disc">
                        <h6 className="product-title"><Link legacyBehavior href="/auction-details" ><a>Smart fortwo coupe 1.0 Prime Sport Premium</a></Link></h6>
                        <div className="product-auction">
                          <div className="price">
                            <span>From</span>
                            <h6>$79.00</h6>
                          </div>
                          <div className="countdown" id="week-countdown1">
                            <h6><MemoizedTimer formate="counter1" /></h6>
                            <span>Waiting For Bid</span>
                          </div>
                        </div>
                        <Link legacyBehavior href="/auction-details"><a className="bid-btn">Bid Now</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-card featured-product-card">
                      <div className="product">
                        <img src="assets/images/product/feat-2.png" alt="" />
                        <div className="id"><span>ID 0195543</span></div>
                      </div>
                      <div className="product-disc">
                        <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>lamgergini New BOOM 800 Premium</a></Link></h6>
                        <div className="product-auction">
                          <div className="price">
                            <span>From</span>
                            <h6>$79.00</h6>
                          </div>
                          <div className="countdown" id="week-countdown2">
                            <h6><MemoizedTimer formate="counter1" /></h6>
                            <span>Waiting For Bid</span>
                          </div>
                        </div>
                        <Link legacyBehavior href="/auction-details"><a className="bid-btn">Bid Now</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide hero-item position-relative">
        {/* <div className="hero-background-layer" style={{background: 'url(./assets/images/banner/hero-banner2.png)'}} /> */}
        <div className="hero-content-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome to car auction Best Platform</h1>
                  <p>Middleton in objection discovery as agreeable. Edward thrown dinin. Nulla sem porta ullamcorper orci, scelerisque ullamcorper vitae.</p>
                  <div className="hero-btns d-flex gap-5 align-items-center">
                  <Link legacyBehavior href="/auction"><a  className="alpha-btn-md">All Auction</a></Link>
                    <div className="video-pluse">
                      <span  />
                      <span  />
                      <span  />
                      <div  onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }} className="video-frame video-icon"><i className="bx bx-play" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="product-card featured-product-card">
                      <div className="product">
                        <img src="assets/images/product/feat-3.png" alt="" />
                        <div className="id"><span>ID 0195765</span></div>
                      </div>
                      <div className="product-disc">
                        <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Masrati Mustang GT Premium</a></Link></h6>
                        <div className="product-auction">
                          <div className="price">
                            <span>From</span>
                            <h6>$79.00</h6>
                          </div>
                          <div className="countdown" id="week-countdown3">
                            <h6><MemoizedTimer formate="counter1" /></h6>
                            <span>Waiting For Bid</span>
                          </div>
                        </div>
                        <Link legacyBehavior href="/auction-details"><a className="bid-btn">Bid Now</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-card featured-product-card">
                      <div className="product">
                        <img src="assets/images/product/feat-4.png" alt="" />
                        <div className="id"><span>ID 0195645</span></div>
                      </div>
                      <div className="product-disc">
                        <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Smart fortwo coupe 1.0 Prime Sport Premium</a></Link></h6>
                        <div className="product-auction">
                          <div className="price">
                            <span>From</span>
                            <h6>$79.00</h6>
                          </div>
                          <div className="countdown" id="week-countdown4">
                            <h6><MemoizedTimer formate="counter1" /></h6>
                            <span>Waiting For Bid</span>
                          </div>
                        </div>
                        <Link legacyBehavior href="/auction-details"><a className="bid-btn">Bid Now</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* arrows */}
      <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end">
        <div className="hero-prev2 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> <i className="bi bi-arrow-left" /> </div>
        <div className="hero-next2 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
      </div>
    </div>
  </Swiper>
  <React.Fragment>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="TboWOSW7qCI"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
</div>

  )
}

export default Hero2