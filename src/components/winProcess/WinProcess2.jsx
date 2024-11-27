import Link from "next/link";
import React from "react";

function WinProcess2() {
  return (
    <div className="win-process-area mt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header-two text-center">
              <h3>Easy 03 Steps To win</h3>
            </div>
          </div>
        </div>
        <div className="row g-4 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-process">
              <span className="corner-1" />
              <span className="corner-2" />
              <div className="icon mx-auto">
                <img src="assets/images/icon/process1.svg" alt="" />
              </div>
              <div className="process-disc">
                <h4>
                  <Link legacyBehavior href="/login">
                    Log in
                  </Link>
                </h4>
                <p>No Credit Card Required</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-process">
              <span className="corner-1" />
              <span className="corner-2" />
              <div className="icon mx-auto">
                <img src="assets/images/icon/process2.svg" alt="" />
              </div>
              <div className="process-disc">
                <h4>
                  <Link legacyBehavior href="/auction-details">
                    Bid Now
                  </Link>
                </h4>
                <p>Bidding is Free Only If You Win</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-process">
              <span className="corner-1" />
              <span className="corner-2" />
              <div className="icon mx-auto">
                <img src="assets/images/icon/process3.svg" alt="" />
              </div>
              <div className="process-disc">
                <h4>
                  <Link legacyBehavior href="/winner">
                   Win
                  </Link>
                </h4>
                <p>Fun - Excitement - Great Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinProcess2;
