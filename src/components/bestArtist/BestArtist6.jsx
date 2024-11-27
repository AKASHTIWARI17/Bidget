import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function BestArtist6() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: ".artist-next",
        prevEl: ".artist-prev",
      },

      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="best-artist-area  bg--dark pt-110">
    <div className="container">
      <div className="row title-gap gy-4 align-items-center">
        <div className="col-lg-10 ">
          <div className="section-title">
            <h3>Best Artists</h3>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end gap-4">
            <div className="artist-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> <img src="assets/images/icon/swiper-left.svg" alt="" /> </div>
            <div className="artist-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> <img src="assets/images/icon/swiper-right.svg" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="row">
        <Swiper {...slider} className="swiper artist-slider swiper-negetive-space-x">
          <div className="swiper-wrapper pb-1">
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#1</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm1.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Ethan Daniel</h5>
                  <p className="artist-id">WER-5533</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#2</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm2.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Jackson Levi</h5>
                  <p className="artist-id">WER-1973</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#3</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm3.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Jacob Logan</h5>
                  <p className="artist-id">WER-4926</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#4</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm4.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Sebastian Mateo</h5>
                  <p className="artist-id">WER-2375</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#2</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm2.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Jackson Levi</h5>
                  <p className="artist-id">WER-1973</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#3</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm3.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Jacob Logan</h5>
                  <p className="artist-id">WER-4926</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <div className="artist-alpha">
                <div className="artist-index"><span>#4</span></div>
                <div className="artist">
                  <img src="assets/images/arts/artist-sm4.png" alt="" />
                  <span className="active-status" />
                </div>
                <div className="artist-disc">
                  <h5 className="artist-name">Sebastian Mateo</h5>
                  <p className="artist-id">WER-2375</p>
                  <div className="artist-disc-footer">
                    <div className="totol-art">
                      <img src="assets/images/icon/collection-bug.svg" alt="" /> <span>23 Art</span>
                    </div>
                    <a href="#" className="follow-btn">Follow</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
  
  );
}

export default BestArtist6;
