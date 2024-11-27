import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Timer from "../common/Timer";
const  MemoizedTimer = React.memo(Timer);
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function UpcomingAuction4() {
    const slider = useMemo(()=>{
        return{
            slidesPerView: "auto",
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.upcoming-next',
      prevEl: '.upcoming-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      992:{ 
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 3
      },
     
    }
        }
    },[])
  return (
    <div className="upcoming-land-auction-area  pt-110">
  <div className="container position-relative">
    <div className="row">
      <div className="col-lg-12">
        <div className="land-section-header mx-auto mb-60">
        <h2 style="color: black;">Upcoming Auction</h2>
          <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget ex hendrerit
            mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <Swiper {...slider} className="swiper upcoming-land-auction swiper-negetive-space-x ">
        <div className="swiper-wrapper pb-1">
          <SwiperSlide className="swiper-slide">
            <div className="land-auction-card">
              <img src="assets/images/icon/bid-icon.svg" alt="" className="bid-icon" />
              <div className="acution-bg">
                <img src="assets/images/banner/acution-card-bg.png" alt="" />
              </div>
              <h3 className="auction-date"><span>05</span> Novembar</h3>
              <ul className="auction-info">
                <li>
                  <h5>Bid Start In :</h5>
                  <div className="countdown" id="timer21">
                    <h6><MemoizedTimer formate="counter5"/></h6>
                  </div>
                </li>
                <li>
                  <h5>Location :</h5>
                  <h6>Carrickmines, Dublin</h6>
                </li>
              </ul>
              <div className="auction-bottom">
                <div className="venue">
                  <span>Venue :</span>
                  <h5>Online</h5>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="view-btn">View Details</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="land-auction-card">
              <img src="assets/images/icon/bid-icon.svg" alt="" className="bid-icon" />
              <div className="acution-bg">
                <img src="assets/images/banner/acution-card-bg.png" alt="" />
              </div>
              <h3 className="auction-date"><span>06</span> Novembar</h3>
              <ul className="auction-info">
                <li>
                  <h5>Bid Start In :</h5>
                  <div className="countdown" id="timer13">
                    <h6><MemoizedTimer formate="counter5"/></h6>
                  </div>
                </li>
                <li>
                  <h5>Location :</h5>
                  <h6>Carrickmines, Dublin</h6>
                </li>
              </ul>
              <div className="auction-bottom">
                <div className="venue">
                  <span>Venue :</span>
                  <h5>Online</h5>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="view-btn">View Details</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="land-auction-card">
              <img src="assets/images/icon/bid-icon.svg" alt="" className="bid-icon" />
              <div className="acution-bg">
                <img src="assets/images/banner/acution-card-bg.png" alt="" />
              </div>
              <h3 className="auction-date"><span>07</span> Novembar</h3>
              <ul className="auction-info">
                <li>
                  <h5>Bid Start In :</h5>
                  <div className="countdown" id="timer15">
                    <h6><MemoizedTimer formate="counter5"/></h6>
                  </div>
                </li>
                <li>
                  <h5>Location :</h5>
                  <h6>Carrickmines, Dublin</h6>
                </li>
              </ul>
              <div className="auction-bottom">
                <div className="venue">
                  <span>Venue :</span>
                  <h5>Online</h5>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="view-btn">View Details</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="land-auction-card">
              <img src="assets/images/icon/bid-icon.svg" alt="" className="bid-icon" />
              <div className="acution-bg">
                <img src="assets/images/banner/acution-card-bg.png" alt="" />
              </div>
              <h3 className="auction-date"><span>06</span> Novembar</h3>
              <ul className="auction-info">
                <li>
                  <h5>Bid Start In :</h5>
                  <div className="countdown" id="timer13">
                    <h6><MemoizedTimer formate="counter5"/></h6>
                  </div>
                </li>
                <li>
                  <h5>Location :</h5>
                  <h6>Carrickmines, Dublin</h6>
                </li>
              </ul>
              <div className="auction-bottom">
                <div className="venue">
                  <span>Venue :</span>
                  <h5>Online</h5>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="view-btn">View Details</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="land-auction-card">
              <img src="assets/images/icon/bid-icon.svg" alt="" className="bid-icon" />
              {/* <div className="acution-bg">
                <img src="assets/images/banner/acution-card-bg.png" alt="" />
              </div> */}
              <h3 className="auction-date"><span>07</span> Novembar</h3>
              <ul className="auction-info">
                <li>
                  <h5>Bid Start In :</h5>
                  <div className="countdown" id="timer15">
                    <h6><MemoizedTimer formate="counter5"/></h6>
                  </div>
                </li>
                <li>
                  <h5>Location :</h5>
                  <h6>Carrickmines, Dublin</h6>
                </li>
              </ul>
              <div className="auction-bottom">
                <div className="venue">
                  <span>Venue :</span>
                  <h5>Online</h5>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="view-btn">View Details</a></Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
    <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end">
      <div className="upcoming-prev swiper-prev-arrow" tabIndex={0}> <img src="assets/images/icon/swiper-left2.svg" alt="" /> </div>
      <div className="upcoming-next swiper-next-arrow" tabIndex={0}> <img src="assets/images/icon/swiper-right2.svg" alt="" /></div>
    </div>
  </div>
</div>

  )
}

export default UpcomingAuction4