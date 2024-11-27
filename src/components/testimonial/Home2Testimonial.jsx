import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Home2Testimonial() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 9000,
      },
      navigation: {
        nextEl: ".testi-next2",
        prevEl: ".testi-prev2",
      },

      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    };
  }, []);

  return (
    // <div className="testimonial-area testimonial-style-two mt-110">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12">
    //         <div className="section-header-two text-center">
    //           <h3>Auction Winners Say</h3>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row align-items-center">
    //       <div className="col-lg-4 align-items-center">
    //         <div className="testimonial-disc">
    //           <p>Great reviews </p>
    //           <h3>don't belive me! Check what client think of us ?</h3>
    //           {/* arrows */}
    //           <div className="slider-arrows  d-lg-flex d-none gap-4">
    //             <div
    //               className="testi-prev2 swiper-prev-arrow"
    //               tabIndex={0}
    //               role="button"
    //               aria-label="Previous slide"
    //             >
    //               {" "}
    //               <i className="bi bi-arrow-left" />{" "}
    //             </div>
    //             <div
    //               className="testi-next2 swiper-next-arrow"
    //               tabIndex={0}
    //               role="button"
    //               aria-label="Next slide"
    //             >
    //               <i className="bi bi-arrow-right" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-8">
    //         <Swiper
    //           {...slider}
    //           className="swiper testimonial-slider-two swiper-negetive-space-x pb-2"
    //         >
    //           <div className="swiper-wrapper">
    //             <SwiperSlide className="swiper-slide">
    //               <div className="testimonial-gamma">
    //                 <div className="testiminial-header">
    //                   <div className="reviewer">
    //                     <img
    //                       src="assets/images/testimonial/testi-reviewer1.png"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h5 className="reviewer-name">
    //                     <Link legacyBehavior href="/winner">
    //                       <a>avator Jaqob</a>
    //                     </Link>
    //                   </h5>
    //                   <p>Co-Founder</p>
    //                   <ul className="testimonial-rating">
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="testiminial-body">
    //                   <p>
    //                     Nulla facilisi. Etiam sit amet libero a dolor malesuada
    //                     faucibus. Suspendisse non massa id orci tempor
    //                   </p>
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //             <SwiperSlide className="swiper-slide">
    //               <div className="testimonial-gamma">
    //                 <div className="testiminial-header">
    //                   <div className="reviewer">
    //                     <img
    //                       src="assets/images/testimonial/testi-reviewer2.png"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h5 className="reviewer-name">
    //                     <Link legacyBehavior href="/winner">
    //                       <a>Robert Jox</a>
    //                     </Link>
    //                   </h5>
    //                   <p>Winner 02</p>
    //                   <ul className="testimonial-rating">
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="testiminial-body">
    //                   <p>
    //                     Nulla facilisi. Etiam sit amet libero a dolor malesuada
    //                     faucibus. Suspendisse non massa id orci tempor
    //                   </p>
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //             <SwiperSlide className="swiper-slide">
    //               <div className="testimonial-gamma">
    //                 <div className="testiminial-header">
    //                   <div className="reviewer">
    //                     <img
    //                       src="assets/images/testimonial/testi-reviewer1.png"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h5 className="reviewer-name">
    //                     <Link legacyBehavior href="/winner">
    //                       <a>avator Jaqob</a>
    //                     </Link>
    //                   </h5>
    //                   <p>Co-Founder</p>
    //                   <ul className="testimonial-rating">
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="testiminial-body">
    //                   <p>
    //                     Nulla facilisi. Etiam sit amet libero a dolor malesuada
    //                     faucibus. Suspendisse non massa id orci tempor
    //                   </p>
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //             <SwiperSlide className="swiper-slide">
    //               <div className="testimonial-gamma">
    //                 <div className="testiminial-header">
    //                   <div className="reviewer">
    //                     <img
    //                       src="assets/images/testimonial/testi-reviewer2.png"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h5 className="reviewer-name">
    //                     <Link legacyBehavior href="/winner">
    //                       <a>Robert Jox</a>
    //                     </Link>
    //                   </h5>
    //                   <p>Winner 02</p>
    //                   <ul className="testimonial-rating">
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                     <li>
    //                       <i className="bx bxs-star" />
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="testiminial-body">
    //                   <p>
    //                     Nulla facilisi. Etiam sit amet libero a dolor malesuada
    //                     faucibus. Suspendisse non massa id orci tempor
    //                   </p>
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //           </div>
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
}

export default Home2Testimonial;
