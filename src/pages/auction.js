import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Timer from "@/components/common/Timer";
import auctionCardData from "../data/auctionData.json";
import Link from "next/link";
import React from "react";
const MemoizedTimer = React.memo(Timer);
function Auction() {
  return (
    <Layout>
      <Breadcrumb pageName="Auction" pageTitle="Auction" />
      <div className="auction-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {auctionCardData.map((item) => {
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
      
          </div>
          <ul className="pagination pagination-style-one justify-content-center pt-50">
            <li className="page-item page-arrow">
              <a className="page-link" href="#">
                {" "}
                <i className="bi bi-arrow-left" />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                01
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                02
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                03
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                04
              </a>
            </li>
            <li className="page-item page-arrow">
              <a className="page-link" href="#">
                {" "}
                <i className="bi bi-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Auction;
