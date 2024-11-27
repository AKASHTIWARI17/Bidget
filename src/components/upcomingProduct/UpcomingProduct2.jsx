import React from "react";
import Timer from "../common/Timer";
import Link from "next/link";
const  MemoizedTimer = React.memo(Timer)
function UpcomingProduct2() {
  return (
    <div className="up-comming-auction-area mt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header-two">
              <h3>UpComing Auction</h3>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-card product-beta-sm">
              <div className="product">
                <img src="assets/images/product/product-b1.png" alt="" />
                <div className="id">
                  <span>ID 0195693</span>
                </div>
              </div>
              <div className="product-disc">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Ford Mustang GT Premium 2008</a>
                  </Link>
                </h6>
                <div className="product-acution">
                  <div className="cv">
                    <span>current Bid</span>
                    <h6>$1,279</h6>
                  </div>
                  <div className="countdown" id="week-countdown11">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-card product-beta-sm">
              <div className="product">
                <img src="assets/images/product/product-b2.png" alt="" />
                <div className="id">
                  <span>ID 0195694</span>
                </div>
              </div>
              <div className="product-disc">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>lamgergini New BOOM 800 Premium</a>
                  </Link>
                </h6>
                <div className="product-acution">
                  <div className="cv">
                    <span>current Bid</span>
                    <h6>$1,279</h6>
                  </div>
                  <div className="countdown" id="week-countdown12">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-card product-beta-sm">
              <div className="product">
                <img src="assets/images/product/product-b3.png" alt="" />
                <div className="id">
                  <span>ID 0195695</span>
                </div>
              </div>
              <div className="product-disc">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Smart fortwo coupe 1.0 Prime Sport Premium</a>
                  </Link>
                </h6>
                <div className="product-acution">
                  <div className="cv">
                    <span>current Bid</span>
                    <h6>$1,279</h6>
                  </div>
                  <div className="countdown" id="week-countdown13">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-card product-beta-sm">
              <div className="product">
                <img src="assets/images/product/product-b4.png" alt="" />
                <div className="id">
                  <span>ID 0195636</span>
                </div>
              </div>
              <div className="product-disc">
                <h6 className="product-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Audi New BOOM 800 21M 1.0 Prime Sport</a>
                  </Link>
                </h6>
                <div className="product-acution">
                  <div className="cv">
                    <span>current Bid</span>
                    <h6>$1,279</h6>
                  </div>
                  <div className="countdown" id="week-countdown14">
                    <h6>
                      <MemoizedTimer formate="counter1" />
                    </h6>
                    <span>Waiting For Bid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProduct2;
