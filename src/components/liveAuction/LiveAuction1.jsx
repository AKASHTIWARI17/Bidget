import React from "react";
import auctionCardData from "../../data/auctionData.json";
import Link from "next/link";
import Timer from "../common/Timer";

const  MemoizedTimer = React.memo(Timer)
function LiveAuction1() {
  return (
    <div className="live-auction-area mt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header-two">
              <h3>Live Auction</h3>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {auctionCardData.slice(0, 6).map((item) => {
            const {
              id,
              title1,
              productId,
              price1,
              img1,
              currentBid,
              countdownDate,
            } = item;
            return (
              <div key={id} className="col-lg-4 col-md-6 ">
                <div className="product-card product-beta-md">
                  <div className="product-header">
                    <h5 className="product-title">
                      <Link legacyBehavior href="/auction-details">
                        <a>{title1}</a>
                      </Link>
                    </h5>
                    <h4 className="price">${price1}</h4>
                  </div>
                  <div className="product">
                    <img src={img1} alt="" />
                    <div className="id">
                      <span>{productId}</span>
                    </div>
                  </div>
                  <div className="product-disc">
                    <div className="product-acution">
                      <div className="cv">
                        <span>current Bid</span>
                        <h6>${currentBid}</h6>
                      </div>
                      <div className="countdown" id="week-countdown1">
                        <h6>
                          <MemoizedTimer
                            formate="counter1"
                            countdownDate={countdownDate}
                          />
                        </h6>
                        <span>Waiting For Bid</span>
                      </div>
                    </div>
                    <Link legacyBehavior href="/auction-details">
                      <a className="bid-btn">Submit A Bid</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="view-btn mt-50 text-center">
            <Link legacyBehavior href="/auction">
              <a className="alpha-btn-md-dark">View All</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAuction1;
