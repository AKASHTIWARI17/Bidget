import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);


function Testimonial4() {
    const slider = useMemo(()=>{
        return{
            slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 9000
    },
    navigation: {
      nextEl: '.testi-next4',
      prevEl: '.testi-prev4',
    }
        }
    },[])
  return (
    <div className="testimonial-style-four mt-110">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="testimonial-disc">
          <strong>Testimonial</strong>
          <h2>What They Are Says Our Services.</h2>
          <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam.
            mattis mauris. Vestibulum ante ipsum primis in faucibus orcina
            ante tellus, bibendum eget ante ut, aliquet luctus quam.Integer
            bibendum eget ante ut, aliquet luctus quam. Integer egeteft.</p>
        </div>
      </div>
      <div className="col-lg-7 mt-5 mt-lg-0">
        <Swiper {...slider} className="swiper testimonial-slider-four">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-land-alpha">
                <div className="testi-reviewer mx-auto">
                  <img src="assets/images/testimonial/reviewer-4a.png" alt="" />
                </div>
                <div className="testi-body">
                  <p className="testi-texts">Integer ante tellus, bibendum eget ante ut, aliquet
                    luctus quam. Integer egeteft
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus
                    et.Integer on
                    ante tellus, bibendum eget ante ut, aliquet luctus quam.Integer ante tellus,
                    thise
                    bibendum eget ante ut, aliquet luctus quam. Integer egeteft.</p>
                  <div className="testi-footer">
                    <div className="reviewer">
                      <h5><Link legacyBehavior href="/winner"><a>Robert Fox</a></Link></h5>
                      <span>Co-Founder</span>
                    </div>
                    <ul className="testi-rating d-flex gap-2">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-land-alpha">
                <div className="testi-reviewer mx-auto">
                  <img src="assets/images/testimonial/reviewer-4b.png" alt="" />
                </div>
                <div className="testi-body">
                  <p className="testi-texts">Integer ante tellus, bibendum eget ante ut, aliquet
                    luctus quam. Integer egeteft
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus
                    et.Integer on
                    ante tellus, bibendum eget ante ut, aliquet luctus quam.Integer ante tellus,
                    thise
                    bibendum eget ante ut, aliquet luctus quam. Integer egeteft.</p>
                  <div className="testi-footer">
                    <div className="reviewer">
                      <h5><Link legacyBehavior href="/winner"><a>Mokarram Hossain</a></Link></h5>
                      <span>Manager</span>
                    </div>
                    <ul className="testi-rating d-flex gap-2">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-land-alpha">
                <div className="testi-reviewer mx-auto">
                  <img src="assets/images/testimonial/reviewer-4c.png" alt="" />
                </div>
                <div className="testi-body">
                  <p className="testi-texts">Integer ante tellus, bibendum eget ante ut, aliquet
                    luctus quam. Integer egeteft
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus
                    et.Integer on
                    ante tellus, bibendum eget ante ut, aliquet luctus quam.Integer ante tellus,
                    thise
                    bibendum eget ante ut, aliquet luctus quam. Integer egeteft.</p>
                  <div className="testi-footer">
                    <div className="reviewer">
                      <h5><Link legacyBehavior href="/winner"><a>Raufur Rahman</a></Link></h5>
                      <span>Area Manager</span>
                    </div>
                    <ul className="testi-rating d-flex gap-2">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-land-alpha">
                <div className="testi-reviewer mx-auto">
                  <img src="assets/images/testimonial/reviewer-4d.png" alt="" />
                </div>
                <div className="testi-body">
                  <p className="testi-texts">Integer ante tellus, bibendum eget ante ut, aliquet
                    luctus quam. Integer egeteft
                    mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus
                    et.Integer on
                    ante tellus, bibendum eget ante ut, aliquet luctus quam.Integer ante tellus,
                    thise
                    bibendum eget ante ut, aliquet luctus quam. Integer egeteft.</p>
                  <div className="testi-footer">
                    <div className="reviewer">
                      <h5><Link legacyBehavior href="/winner"><a>Galib Al Nahian</a></Link></h5>
                      <span>Founder</span>
                    </div>
                    <ul className="testi-rating d-flex gap-2">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="slider-arrows text-center d-lg-flex d-none  justify-content-between mt-4">
          <div className="testi-prev4 swiper-prev-arrow" tabIndex={0}> <img src="assets/images/icon/flat-prev-icon.svg" alt="" /> </div>
          <div className="testi-next4 swiper-next-arrow" tabIndex={0}> <img src="assets/images/icon/flat-next-icon.svg" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial4