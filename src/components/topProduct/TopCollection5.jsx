import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function TopCollection5() {
  const slider = useMemo(()=>{
    return {
      slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.collection-next3',
      prevEl: '.collection-prev3',
    },

    breakpoints: {
      480:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
     
    }
    }
  },[])
  return (
    <div className="top-collection-area pt-110">
  <div className="container">
    <div className="row title-gap align-items-center">
      <div className="col-md-6 ">
        <div className="section-title style-light">
          <h3>Top Collection</h3>
        </div>
      </div>
      <div className="col-md-6">
        <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end gap-4">
          <div className="collection-prev3 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> <img src="assets/images/icon/swiper-left.svg" alt="" /> </div>
          <div className="collection-next3 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> <img src="assets/images/icon/swiper-right.svg" alt="" /></div>
        </div>
      </div>
    </div>
    <div className="row">
      <Swiper {...slider} className="swiper collection-slider swiper-negetive-space-x">
        <div className="swiper-wrapper pb-1">
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg1.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil1.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Thomas Charles</h5>
                <p className="artist-id">WER-4164</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg2.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil2.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Jacob Logan</h5>
                <p className="artist-id">WER-3934</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg3.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil3.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Jackson Levi</h5>
                <p className="artist-id">WER-4370</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg4.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil4.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Sebastian Mateo</h5>
                <p className="artist-id">WER-5913</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg1.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil1.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Thomas Charles</h5>
                <p className="artist-id">WER-4164</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg2.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil2.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Jacob Logan</h5>
                <p className="artist-id">WER-3934</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg3.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil3.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Jackson Levi</h5>
                <p className="artist-id">WER-4370</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="collection-alpha style-light">
              <div className="cover">
                <img src="assets/images/collection/coll-bg4.png" alt="" />
              </div>
              <div className="collection-disc">
                <div className="profil">
                  <img src="assets/images/collection/c-profil4.png" alt="" />
                  <span className="active-status" />
                </div>
                <h5 className="collection-title">Sebastian Mateo</h5>
                <p className="artist-id">WER-5913</p>
                <div className="collection-footer">
                  <span> <img src="assets/images/icon/followers.svg" alt="" /> 100 Followers</span>
                  <span> <img src="assets/images/icon/art.svg" alt="" /> 50 Work</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  </div>
</div>

  )
}

export default TopCollection5