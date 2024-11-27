import Link from "next/link";
import React from "react";

function LandBanner() {
  return (
    <div className="land-banner-area pt-110">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-6 ps-lg-0">
            <div
              className="land-single-banner"
              style={{
                background: "url(./assets/images/banner/land-banner1.png)",
              }}
            >
              <div className="banner-content">
                <h2>
                  Quisque consectetur et nisl eu fringilla Nunc vel sollicitudin
                  urna vitae imperdiet
                </h2>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="view-btn">
                  <Link legacyBehavior href="/auction-details">
                    <a className="aprt-btn-alpha">View This Flat</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0  ">
            <div
              className="land-single-banner"
              style={{
                background: "url(./assets/images/banner/land-banner2.png)",
              }}
            >
              <div className="banner-content">
                <h2>
                  Quisque consectetur et nisl eu fringilla Nunc vel sollicitudin
                  urna vitae imperdiet
                </h2>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="view-btn">
                  <Link legacyBehavior href="/auction-details">
                    <a className="aprt-btn-alpha">View This Flat</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandBanner;
