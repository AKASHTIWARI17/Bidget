import React from "react";
import Timer from "../common/Timer";
import Link from "next/link";
const  MemoizedTimer = React.memo(Timer);
function UpcomingProduct() {
  return (
    <div className="up-coming-area mt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header">
              <span>Up coming</span>
              <h2 className="text-black">Upcoming Auction</h2>
              {/* <h2 style="color: black;">Upcoming Auction</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="product-card product-gamma-x">
              <div className="product">
                <img
                  src="assets/images/product/p-gamma1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-info">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>
                      Antiproduct to export
                    </a>
                  </Link>
                </h6>
                <p className="id">
                  Auction ID: <span>20202025463695</span>
                </p>
                <div className="product-auction">
                  <div className="cv">
                    <div className="bid-icon">
                      <img src="assets/images/icon/bid-sm.svg" alt="" />
                    </div>
                    <div className="bid-value">
                      <span>Current Bid</span>
                      <h6>$1000.99</h6>
                    </div>
                  </div>
                  <div className="countdown" id="week-countdown1">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
                <Link legacyBehavior href="/auction-details">
                  <a className="bid-btn">View Product</a>
                </Link>
              </div>
            </div>
            <div className="product-card product-gamma-x">
              <div className="product">
                <img
                  src="assets/images/product/p-gamma2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-info">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Flash sale pentium Gold F5420 8th Gen Special PC</a>
                  </Link>
                </h6>
                <p className="id">
                  Auction ID: <span>20202025463696</span>
                </p>
                <div className="product-auction">
                  <div className="cv">
                    <div className="bid-icon">
                      <img src="assets/images/icon/bid-sm.svg" alt="" />
                    </div>
                    <div className="bid-value">
                      <span>Current Bid</span>
                      <h6>$1000.99</h6>
                    </div>
                  </div>
                  <div className="countdown" id="week-countdown2">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
                <Link legacyBehavior href="/auction-details">
                  <a className="bid-btn">View Product</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-card product-gamma-x">
              <div className="product">
                <img
                  src="assets/images/product/p-gamma3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-info">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>creativity fasion </a>
                  </Link>
                </h6>
                <p className="id">
                  {/* Auction ID: <span>20202025463697</span> */}
                </p>
                <div className="product-auction">
                  <div className="cv">
                    <div className="bid-icon">
                      <img src="assets/images/icon/bid-sm.svg" alt="" />
                    </div>
                    <div className="bid-value">
                      <span>Current Bid</span>
                      <h6>$1000.99</h6>
                    </div>
                  </div>
                  <div className="countdown" id="week-countdown3">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
                <Link legacyBehavior href="/auction-details">
                  <a className="bid-btn">View Product</a>
                </Link>
              </div>
            </div>
            {/* <div className="product-card product-gamma-x">
              <div className="product">
                <img
                  src="assets/images/product/p-gamma4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-info">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>
                      MSI Raider Core i9 10th Gen RTX 20- 70 Super Gaming Laptop
                    </a>
                  </Link>
                </h6>
                <p className="id">
                  Auction ID: <span>20202025463728</span>
                </p>
                <div className="product-auction">
                  <div className="cv">
                    <div className="bid-icon">
                      <img src="assets/images/icon/bid-sm.svg" alt="" />
                    </div>
                    <div className="bid-value">
                      <span>Current Bid</span>
                      <h6>$1000.99</h6>
                    </div>
                  </div>
                  <div className="countdown" id="week-countdown4">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
                <Link legacyBehavior href="/auction-details">
                  <a className="bid-btn">View Product</a>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="view-btn text-center mt-50">
            <Link legacyBehavior href="/auction">
              <a className="alpha-btn-md">View All</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProduct;
