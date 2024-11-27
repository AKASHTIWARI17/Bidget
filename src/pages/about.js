import Layout from "@/components/Layout/Layout";
import TopWinnerSlide from "@/components/about/TopWinnerSlide";
import Breadcrumb from "@/components/common/Breadcrumb";
import Testimonial1 from "@/components/testimonial/Testimonial1";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <Layout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <div className="about-wrpper pt-110">
        <div className="container">
          {/* about discription */}
          <div className="about-disc-wrap row gy-5">
            <div className="col-lg-6">
              <div className="about-disc-img">
                <img
                  src="assets/images/image-group/about-image-group.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-disc">
                <h2>About us</h2>
                <div className="highlighted-texts">
                  <h4>
                    The auction platform for artists, arts organi sations and
                    charities.
                  </h4>
                </div>
                <p>
                  An auction is an exciting day out, and you might find
                  something special to take home. It's quite a specialist method
                  of buying, so it's good to know the ins and outs in advance.
                  it to make a type specimen book.
                </p>
                <ul className="about-disc-list">
                  <li>
                    <img
                      src="assets/images/icon/arrow-right-fancy.svg"
                      alt=""
                    />{" "}
                    <span>Unrivaled Auction Service</span>
                  </li>
                  <li>
                    <img
                      src="assets/images/icon/arrow-right-fancy.svg"
                      alt=""
                    />{" "}
                    <span>Extensive Marketing</span>
                  </li>
                  <li>
                    <img
                      src="assets/images/icon/arrow-right-fancy.svg"
                      alt=""
                    />{" "}
                    <span>Existing Corporate Client Database</span>
                  </li>
                </ul>
                <div className="about-disc-bottom d-flex align-items-center gap-5 flex-wrap">
                  <Link legacyBehavior href="/auction-details">
                    <a className="alpha-btn-md-dark">
                    More Details
                    </a>
                  </Link>
                  <div className="ceo-info d-flex align-items-center gap-3">
                    <div className="ceo">
                      <img src="assets/images/image-group/ceo.png" alt="" />
                    </div>
                    <div className="ceo-disc">
                      <h5>Kathryn Murphy</h5>
                      <span>CEO Bidgen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about features */}
          <div className="about-features pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header-two text-center">
                  <h3>What Can Bidgen Expert</h3>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>01</span>
                  </div>
                  <h4>Real time Auction</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>02</span>
                  </div>
                  <h4>Support Multiple Currecncy</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>03</span>
                  </div>
                  <h4>Winner Announcement</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>04</span>
                  </div>
                  <h4>Supports Multiple Currency</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>05</span>
                  </div>
                  <h4>Show All Bidders history</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-feature-card">
                  <div className="feat-intex">
                    <span>06</span>
                  </div>
                  <h4>Add to Watchlist</h4>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top winner slider */}
        <TopWinnerSlide />
      </div>
      <Testimonial1/>
    </Layout>
  );
}

export default About;
