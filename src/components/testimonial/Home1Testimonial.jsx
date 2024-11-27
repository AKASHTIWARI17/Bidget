import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Home1Testimonial() {
  const slide = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 15000,
      },
      navigation: {
        nextEl: ".testi-prev",
        prevEl: ".testi-next",
      },
    };
  }, []);
  return (
    // <div className="testimonial-area testimonial-style-one mt-110">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12">
    //         <div className="section-header">
    //           <span>
    //             Testimonial
    //             <span>
    //               <h2>Auction Winners Say</h2>
    //             </span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row justify-content-center">
    //       <div className="col-lg-12">
    //         <div className="testimonial-wrap">
    //           <Swiper {...slide} className="swiper testimonial-slider">
    //             <div className="swiper-wrapper">
    //               <SwiperSlide className="swiper-slide">
    //                 <div className="single-testimonial">
    //                   <div className="quote-icon">
    //                     <i className="bx bxs-quote-left" />
    //                   </div>
    //                   <ul className="review-rating d-flex">
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
    //                   <p>
    //                     We are very proud of the service we provide for our
    //                     customers. In fact, we see a client relationship
    //                     drastically more personal than that of most agencies in
    //                     our field. Our client relationships do not start at 9AM
    //                     and end at 6PM—they stay with us to continually receive
    //                     the quality service they deserve.“My busy schedule
    //                     leaves little, if any, time for blogging and social
    //                     media.{" "}
    //                   </p>
    //                   <div className="single-reviewer">
    //                     <div className="reviewer">
    //                       <div className="reviewer">
    //                         <img
    //                           src="assets/images/testimonial/reviewer1.png"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="reviewer-disc">
    //                       <h4>
    //                         <Link legacyBehavior href="/winner">
    //                           <a>Cameron Williamson</a>
    //                         </Link>
    //                       </h4>
    //                       <span>Co-Founder of CNF</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </SwiperSlide>
    //               <SwiperSlide className="swiper-slide">
    //                 <div className="single-testimonial">
    //                   <div className="quote-icon">
    //                     <i className="bx bxs-quote-left" />
    //                   </div>
    //                   <ul className="review-rating d-flex">
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
    //                   <p>
    //                     We are very proud of the service we provide for our
    //                     customers. In fact, we see a client relationship
    //                     drastically more personal than that of most agencies in
    //                     our field. Our client relationships do not start at 9AM
    //                     and end at 6PM—they stay with us to continually receive
    //                     the quality service they deserve.“My busy schedule
    //                     leaves little, if any, time for blogging and social
    //                     media.{" "}
    //                   </p>
    //                   <div className="single-reviewer">
    //                     <div className="reviewer">
    //                       <div className="reviewer">
    //                         <img
    //                           src="assets/images/testimonial/reviewer2.png"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="reviewer-disc">
    //                       <h4>
    //                         <Link legacyBehavior href="/winner">
    //                           <a>Samuel Xavien</a>
    //                         </Link>
    //                       </h4>
    //                       <span>FB Project Manager</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </SwiperSlide>
    //               <SwiperSlide className="swiper-slide">
    //                 <div className="single-testimonial">
    //                   <div className="quote-icon">
    //                     <i className="bx bxs-quote-left" />
    //                   </div>
    //                   <ul className="review-rating d-flex">
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
    //                   <p>
    //                     We are very proud of the service we provide for our
    //                     customers. In fact, we see a client relationship
    //                     drastically more personal than that of most agencies in
    //                     our field. Our client relationships do not start at 9AM
    //                     and end at 6PM—they stay with us to continually receive
    //                     the quality service they deserve.“My busy schedule
    //                     leaves little, if any, time for blogging and social
    //                     media.{" "}
    //                   </p>
    //                   <div className="single-reviewer">
    //                     <div className="reviewer">
    //                       <div className="reviewer">
    //                         <img
    //                           src="assets/images/testimonial/reviewer3.png"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="reviewer-disc">
    //                       <h4>
    //                         <Link legacyBehavior href="/winner">
    //                           <a>Darlene Robertson</a>
    //                         </Link>
    //                       </h4>
    //                       <span>CEO, SNG Accountants</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </SwiperSlide>
    //             </div>
    //           </Swiper>
    //           {/* arrows */}
    //           <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end">
    //             <div
    //               className="testi-prev swiper-prev-arrow"
    //               tabIndex={0}
    //               role="button"
    //               aria-label="Previous slide"
    //             >
    //               {" "}
    //               <i className="bi bi-arrow-left" />{" "}
    //             </div>
    //             <div
    //               className="testi-next swiper-next-arrow"
    //               tabIndex={0}
    //               role="button"
    //               aria-label="Next slide"
    //             >
    //               <i className="bi bi-arrow-right" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}

export default Home1Testimonial;
