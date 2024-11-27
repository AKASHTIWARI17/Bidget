import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
import Timer from "@/components/common/Timer";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
const  MemoizedTimer = React.memo(Timer)
function AuctionDetails() {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("watherPoint");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  return (
    <Layout>
      <Breadcrumb pageName="Auction Details" pageTitle="Auction Details" />
      <section className="auction-details-section pt-110">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              {/* item-bid-timer */}
              <div className="item-bid-timer">
                <div className="auction-bid">
                  <p>Current Bid</p>
                  <h5>$20,0379.00</h5>
                </div>
                <div className="auction-timer">
                  <div className="countdown" id="timer4">
                    <h6>
                      <MemoizedTimer formate="counter3" />
                    </h6>
                  </div>
                </div>
              </div>
              {/* item-details-gallery */}
              <div className="tab-content">
                <div
                  className="tab-pane big-image fade show active"
                  id="gallery-img1"
                >
                  <span className="eg-badge">ID 0195638</span>
                  <img src="assets/images/product/details11.png" alt="" />
                </div>
                <div className="tab-pane big-image fade" id="gallery-img2">
                  <span className="eg-badge">ID 0195638</span>
                  <img src="assets/images/product/details22.png" alt="" />
                </div>
                <div className="tab-pane big-image fade" id="gallery-img3">
                  <span className="eg-badge">ID 0195638</span>
                  <img src="assets/images/product/details33.png" alt="" />
                </div>
                <div className="tab-pane big-image fade show" id="gallery-img4">
                  <span className="eg-badge">ID 0195638</span>
                  <img src="assets/images/product/details44.png" alt="" />
                </div>
                <div className="tab-pane big-image fade" id="gallery-img5">
                  <span className="eg-badge">ID 0195638</span>
                  <img src="assets/images/product/details55.png" alt="" />
                </div>
              </div>
              <ul className="nav small-image-list d-flex justify-content-md-between justify-content-center gap-md-4 gap-2">
                <li className="nav-item" >
                  <div
                    id="details-img1"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img1"
                    aria-controls="gallery-img1"
                  >
                    <img src="assets/images/product/details1.png" alt="" />
                  </div>
                </li>
                <li className="nav-item" >
                  <div
                    id="details-img2"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img2"
                    aria-controls="gallery-img2"
                  >
                    <img src="assets/images/product/details2.png" alt="" />
                  </div>
                </li>
                <li className="nav-item" >
                  <div
                    id="details-img3"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img3"
                    aria-controls="gallery-img3"
                  >
                    <img src="assets/images/product/details3.png" alt="" />
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    id="details-img4"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img4"
                    aria-controls="gallery-img4"
                  >
                    <img src="assets/images/product/details4.png" alt="" />
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    id="details-img5"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img5"
                    aria-controls="gallery-img5"
                  >
                    <img src="assets/images/product/details5.png" alt="" />
                  </div>
                </li>
              </ul>
              {/* item-describe-area */}
              <div className="item-describe-area">
                <ul
                  className="nav nav-pills d-flex justify-content-center gap-sm-4 gap-1"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item"  onClick={() => handleTabClick("watherPoint")}role="presentation">
                    <button
                      className="nav-link active describe-btn"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleTabClick("art")} role="presentation">
                    <button
                      className="nav-link describe-btn"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Location
                    </button>
                  </li>
                  <li className="nav-item"  onClick={() => handleTabClick("valuation")} role="presentation">
                    <button
                      className="nav-link describe-btn"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      About Video
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={`tab-pane  ${
                      activeTab === "watherPoint" ? " fade show active" : ""
                    }`}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="describe-content">
                      <p className="mb-15">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis molestiae dolore, quaerat illo adipisci
                        fugiat voluptatibus eligendi provident animi qui totam
                        commodi a dolor saepe labore tempore.
                      </p>
                      <p>
                        {" "}
                        Consequuntur doloremque accusantium aspernatur illo
                        labore quisquam consectetur tenetur temporibus, eos ad,
                        fuga cumque suscipit quasi iure veniam, omnis in iste
                        ipsa optio. Sint voluptates sed inventore saepe,
                        obcaecati dolores rerum aliquid eaque.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane  ${
                      activeTab === "art" ? " fade show active" : ""
                    }`}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="map-area">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.73467103074!2d90.36181521536365!3d23.828032291722206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13a21730b43%3A0xb14a9c52d01c00d9!2sMirpur-12%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1640171021567!5m2!1sen!2sbd"
                        style={{ borderRadius: "5px" }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    className={`tab-pane  ${
                      activeTab === "valuation" ? " fade show active" : ""
                    }`}
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="about-video">
                      <div className="wrapper">
                        <div className="video-pluse">
                          <span />
                          <span />
                          <span />
                          <div
                            onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-frame video-icon"
                          >
                            <i className="bx bx-play" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* details-social-area */}
                <div className="details-social-area">
                  <h5 className="wdget-title">Share Now</h5>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="widget-right-area">
                <h4>Lamborghini Huracán Red Mercedes AMG</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit
                </p>
                <div className="single-widget">
                  <h5 className="wdget-title">Product Overview</h5>
                  <ul className="widget-list">
                    <li>
                      <span>Body Style :</span>
                      <span>Convertible</span>
                    </li>
                    <li>
                      <span>Transmission :</span>
                      <span>6-Speed Manual</span>
                    </li>
                    <li>
                      <span>Drivetrain :</span>
                      <span>Rear Wheel Drive</span>
                    </li>
                    <li>
                      <span>Exaterion :</span>
                      <span>Lime Gold Drive</span>
                    </li>
                    <li>
                      <span>Interior :</span>
                      <span>Agate Grey</span>
                    </li>
                    <li>
                      <span>Miles :</span>
                      <span>12</span>
                    </li>
                    <li>
                      <span>Doors :</span>
                      <span>02</span>
                    </li>
                    <li>
                      <span>Engine :</span>
                      <span>02</span>
                    </li>
                    <li>
                      <span>Passengers :</span>
                      <span>Convertible</span>
                    </li>
                    <li>
                      <span>Fuel Mileage :</span>
                      <span>3.4L mid engin V6</span>
                    </li>
                    <li>
                      <span>Fuel Type :</span>
                      <span>Petrol</span>
                    </li>
                    <li>
                      <span>Condition :</span>
                      <span>Brand New</span>
                    </li>
                    <li>
                      <span>Warranty :</span>
                      <span>3 Years Limited</span>
                    </li>
                  </ul>
                </div>
                <div className="single-widget">
                  <h5 className="wdget-title wdget-title2">Bid Now</h5>
                  <p className="widget-subtitle">
                    Bid Amount : Minimum Bid 20.00$
                  </p>
                  <form className="widget-form">
                    <div className="form-group d-flex justify-content-center align-items-center">
                      <input type="text" placeholder="$00.00" />
                      <button className="widget-btn">Place Bid</button>
                    </div>
                  </form>
                </div>
                <div className="single-widget">
                  <h5 className="wdget-title">Bidding History</h5>
                  <div className="bidding-item gap-sm-4 gap-2">
                    <div className="bidding-img">
                      <img src="assets/images/buyer/bid-histo1.png" alt="" />
                    </div>
                    <div className="bidding-content">
                      <h6>
                        <Link legacyBehavior href="/winner">
                          <a>Robart FOX</a>
                        </Link>
                      </h6>
                      <p>Bid 23 minutes ago for 24.5$</p>
                    </div>
                  </div>
                  <div className="bidding-item gap-sm-4 gap-2">
                    <div className="bidding-img">
                      <img src="assets/images/buyer/bid-histo2.png" alt="" />
                    </div>
                    <div className="bidding-content">
                      <h6>
                        <Link legacyBehavior href="/winner">
                          <a>Leslie Alexander</a>
                        </Link>
                      </h6>
                      <p>Bid 23 minutes ago for 24.5$</p>
                    </div>
                  </div>
                  <div className="bidding-item gap-sm-4 gap-2">
                    <div className="bidding-img">
                      <img src="assets/images/buyer//bid-hidto3.png" alt="" />
                    </div>
                    <div className="bidding-content">
                      <h6>
                        <Link legacyBehavior href="/winner">
                          <a>Jane Cooper</a>
                        </Link>
                      </h6>
                      <p>Bid 23 minutes ago for 24.5$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="TboWOSW7qCI"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </section>
    </Layout>
  );
}

export default AuctionDetails;
