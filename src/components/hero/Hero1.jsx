import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Hero1() {
    const slider = useMemo(()=>{
        return{
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 0,
            loop: true,
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
              nextEl: '.hero-next1',
              prevEl: '.hero-prev1',
            },
        }
    },[])
  return (
//     <div className="hero-area hero-style-one overflow-hidden">
//   <Swiper {...slider} className="swiper hero-slide-one">
//     <div className="swiper-wrapper">
//       <SwiperSlide className="swiper-slide position-relative">
//         <div className="slide-background">
//           <div className="row h-100 background-border-row">
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//           </div>
//         </div>
//         <div className="slide-content-wrap">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="slide-content">
//                   <h1 className="main-title">create sell and collect Digital itams</h1>
//                   <p>It has survived not only five centuries, but also the leap into electronic typesetting remained essentially unchanged</p>
//                   <Link legacyBehavior href="/auction-details"><a className="alpha-btn-xl hero-btn">Bid Now</a></Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 text-center mt-4 mt-lg-0">
//                 <div className="slide-image d-inline-block position-relative position-relative">
//                   <img src="assets/images/hero/featured-product1.png" alt="" className="img-fluid" />
//                   <div className="slide-img-shape position-absolute position-absolute top-0 d-none d-md-block ">
//                     <img src="assets/images/shape/hero-shape1.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="social-icon-area">
//           <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
//           <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
//           <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
//           <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
//         </ul>
//       </SwiperSlide>
//       <SwiperSlide className="swiper-slide position-relative">
//         <div className="slide-background">
//           <div className="row h-100 background-border-row">
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//           </div>
//         </div>
//         <div className="slide-content-wrap">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="slide-content">
//                   <h2 className="main-title">The Xa-023
//                     New Products 2021</h2>
//                   <p>It has survived not only five centuries, but also the leap into electronic typesetting remained essentially unchanged</p>
//                   <Link legacyBehavior href="/auction-details"><a className="alpha-btn-xl hero-btn">Bid Now</a></Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 text-center mt-4 mt-lg-0">
//                 <div className="slide-image d-inline-block position-relative position-relative">
//                   <img src="assets/images/hero/featured-product2.png" alt="" className="img-fluid" />
//                   <div className="slide-img-shape position-absolute position-absolute top-0 d-none d-md-block">
//                     <img src="assets/images/shape/hero-shape1.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="social-icon-area">
//           <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
//           <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
//           <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
//           <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
//         </ul>
//       </SwiperSlide>
//       <SwiperSlide className="swiper-slide position-relative">
//         <div className="slide-background">
//           <div className="row h-100 background-border-row">
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//           </div>
//         </div>
//         <div className="slide-content-wrap">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="slide-content">
//                   <h1 className="main-title">The Xa-023
//                     New Products 2021</h1>
//                   <p>It has survived not only five centuries, but also the leap into electronic typesetting remained essentially unchanged</p>
//                   <Link legacyBehavior href="/auction-details"><a className="alpha-btn-xl hero-btn">Bid Now</a></Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 text-center mt-4 mt-lg-0">
//                 <div className="slide-image d-inline-block position-relative position-relative">
//                   <img src="assets/images/hero/featured-product1.png" alt="" className="img-fluid" />
//                   <div className="slide-img-shape position-absolute position-absolute top-0 d-none d-md-block ">
//                     <img src="assets/images/shape/hero-shape1.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="social-icon-area">
//           <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
//           <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
//           <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
//           <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
//         </ul>
//       </SwiperSlide>
//       <SwiperSlide className="swiper-slide position-relative">
//         <div className="slide-background">
//           <div className="row h-100 background-border-row">
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//             <div className="col bg-border-right" />
//           </div>
//         </div>
//         <div className="slide-content-wrap">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="slide-content">
//                   <h2 className="main-title">The Xa-023
//                     New Products 2021</h2>
//                   <p>It has survived not only five centuries, but also the leap into electronic typesetting remained essentially unchanged</p>
//                   <Link legacyBehavior href="/auction-details"><a className="alpha-btn-xl hero-btn">Bid Now</a></Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 text-center mt-4 mt-lg-0">
//                 <div className="slide-image d-inline-block position-relative position-relative">
//                   <img src="assets/images/hero/featured-product2.png" alt="" className="img-fluid" />
//                   <div className="slide-img-shape position-absolute position-absolute top-0 d-none d-md-block">
//                     <img src="assets/images/shape/hero-shape1.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="social-icon-area">
//           <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
//           <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
//           <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
//           <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
//         </ul>
//       </SwiperSlide>
//     </div>
//     {/* arrows */}
//     <div className="slider-arrows slider1-arrows text-center d-lg-flex d-none justify-content-start gap-4">
//       <div className="hero-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> <i className="bi bi-arrow-left" /> </div>
//       <div className="hero-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
//     </div>
//   </Swiper>
// </div>
<>
</>

  )
}

export default Hero1