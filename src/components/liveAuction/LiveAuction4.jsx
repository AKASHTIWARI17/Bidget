import React from "react";
import Timer from "../common/Timer";
import Link from "next/link";
const  MemoizedTimer = React.memo(Timer)
function LiveAuction4() {
  return (
    <div className="live-land-auction pt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="land-section-header mx-auto mb-60">
              <h2>Live Auction</h2>
              <p>
                Integer ante tellus, bibendum eget ante ut, aliquet luctus quam.
                Integer eget ex hendrerit mattis mauris. Vestibulum ante ipsum
                primis in faucibus orci luctus et.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    <img
                      src="assets/images/apartment/apartment-md1.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>Appartment</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href="/auction-details">
                    <a> The Crescent, Dublin 18,buile County flat Apartment.</a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$2200</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer10">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    {" "}
                    <img
                      src="assets/images/apartment/apartment-md2.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>Flat</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>
                      vitae dictum ante tellus non metus Praesent imperdiet.
                    </a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$2500</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer11">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    {" "}
                    <img
                      src="assets/images/apartment/apartment-md3.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>Land</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>sollicitudin dignissim, risus exel hendrerit tellus.</a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$2450</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer23">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    <img
                      src="assets/images/apartment/apartment-md4.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>House</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Phasellus placerat ultrices in nisi, euporta justo.</a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$1990</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer24">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    <img
                      src="assets/images/apartment/apartment-md5.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>Appartment</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href=".auction-details">
                    <a>Maecenas sit amet placerat felis nece finibus neque.</a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$2000</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer25">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-land-alpha">
              <div className="thumb">
                <Link legacyBehavior href="/auction-details">
                  <a>
                    <img
                      src="assets/images/apartment/apartment-md6.png"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="product-lavel">
                  <span className="status">LIVE</span>
                  <span>Flat</span>
                </div>
              </div>
              <div className="land-disc">
                <h5 className="land-title">
                  <Link legacyBehavior href="/auction-details">
                    <a>Nam in arcu eu, dolor rutrum auctor non in mauris.</a>
                  </Link>
                </h5>
                <div className="land-location">
                  <i className="bi bi-geo-alt" />{" "}
                  <span>Carrickmines, Dublin</span>
                </div>
                <div className="land-disc-bottom">
                  <div className="price">
                    <p>Bid Price</p>
                    <ins>$2010</ins>
                  </div>
                  <div className="countdown">
                    <p>Bid Start In</p>
                    <div className="countdown" id="timer26">
                      <h6>
                        <MemoizedTimer formate="counter4" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-50 justify-content-center ">
          <div className="col-md-4 text-center">
            <Link legacyBehavior href="/auction">
              <a className="land-auction-btn">All Live Auction</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAuction4;
