import React from "react";

function LearningProcess() {
  return (
    <div className="learning-process-area pt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="land-section-header mx-auto mb-60">
              <h2>2 Steps To Learn</h2>
              <p>
                Integer ante tellus, bibendum eget ante ut, aliquet luctus quam.
                Integer eget ex hendrerit mattis mauris. Vestibulum ante ipsum
                primis in faucibus orci luctus et.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav justify-content-between process-pills"
              id="pills-tab"
            >
              <li className="nav-item w-50">
                <button
                  className="nav-link active w-100"
                  id="pills-bid-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-bid"
                  type="button"
                  role="tab"
                  aria-controls="pills-bid"
                >
                  How To Bid
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className="nav-link w-100"
                  id="pills-sale-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-sale"
                  type="button"
                  aria-controls="pills-sale"
                 
                  role="tab"
                 
                  aria-selected="false"
                >
                  How To Sale
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="top-border-gray" />
      <div className="container">
        <div className="process-tabs tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-bid"
            aria-labelledby="pills-bid-tab"
           
          
            role="tabpanel"
           
          >
            <div className="row align-items-center">
              <div className="col-lg-6 mt-5">
                <div className="prodess-llustration text-center">
                  <img
                    src="assets/images/shape/learning-process-illustration.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <div className="process-list">
                  <div className="single-process">
                    <h4>
                      <span>Step 01 :</span> Register your interest.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
                  </div>
                  <div className="single-process">
                    <h4>
                      <span>Step 02 :</span> Understand the payment terms.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
                  </div>
                  <div className="single-process">
                    <h4>
                      <span>Step 03 :</span> Present your bid.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-sale"
            role="tabpanel"
            aria-labelledby="pills-sale-tab"
          >
            <div className="row align-items-center">
              <div className="col-lg-6 mt-5">
                <div className="prodess-llustration text-center">
                  <img
                    src="assets/images/shape/learning-process-illustration.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <div className="process-list">
                  <div className="single-process">
                    <h4>
                      <span>Step 01 :</span> Register your interest.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
                  </div>
                  <div className="single-process">
                    <h4>
                      <span>Step 02 :</span> Understand the payment terms.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
                  </div>
                  <div className="single-process">
                    <h4>
                      <span>Step 03 :</span> Present your bid.
                    </h4>
                    <p>
                      Integer ante tellus, bibendum eget ante ut, aliquet luctus
                      quam. Integer genb mattis mauris. Vestibulum ante ipsum
                      primis in faucibus orci luctus et.Integer ante tellus,
                      bibendum eget ante ut, aliquet luctus quam.Integer ante.
                    </p>
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

export default LearningProcess;
