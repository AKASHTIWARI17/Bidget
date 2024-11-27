
import React from 'react';
import Timer from '../common/Timer'
import Link from 'next/link'


const  MemoizedTimer = React.memo(Timer);
function TopProducts() {
  return (
    <div className="top-product-area mt-110">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-header">
          <span>Live Auction
          </span>
          <h2></h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        <div className="product-card product-alpha-x">
          <div className="product-lavel">
            {/* <span>ID 0195321</span> */}
          </div>
          <div className="product-image">
            <div className="product">
              <Link legacyBehavior href="/auction-details"><a><img src="assets/images/product/px-2.png" alt="" className="img-fluid" /></a></Link>
            </div>
            <Link legacyBehavior href="/auction-details"><a  className="bid-btn-primary">Place A Bid</a></Link>
          </div>
          <div className="product-info">
            <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Poutsicle Hydrating Lip Stain.</a></Link></h6>
            <h6 className="cv">Current Bid <span>$85.00</span></h6>
            <div className="product-countdown" id="timer">
             <MemoizedTimer formate="counter2"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product-card product-alpha-y">
              <div className="product-lavel">
                <span>ID 0195322</span>
              </div>
              <div className="product-image">
                <img src="assets/images/product/py-1.png" alt="" className="img-fluid" />
              </div>
              <div className="product-info">
                <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>A lot of Polish stamps (10 pcs)</a></Link></h6>
                <h6 className="cv">Current Bid <span>$85.00</span></h6>
                <div className="product-countdown" id="timer1">
                <MemoizedTimer formate="counter2"/>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="bid-btn-primary bid-btn">Place A Bid</a></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-card product-alpha-y">
              <div className="product-lavel">
                <span>ID 0195325</span>
              </div>
              <div className="product-image">
                <img src="assets/images/product/py-2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="product-info">
                <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Stand Table To Set Accesorries</a></Link></h6>
                <h6 className="cv">Current Bid <span>$80.00</span></h6>
                <div className="product-countdown" id="timer2">
                <MemoizedTimer formate="counter2"/>
                </div>
                <Link legacyBehavior href="/auction-details"><a className="bid-btn-primary bid-btn">Place A Bid</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-xl-6">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product-card product-alpha-y">
              <div className="product-lavel">
                <span>ID 0195354</span>
              </div>
              <div className="product-image">
                <img src="assets/images/product/py-3.png" alt="" className="img-fluid" />
              </div>
              <div className="product-info">
                <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Canon Eos 4000D 18MP 2.7inch Display</a></Link></h6>
                <h6 className="cv">Current Bid <span>$85.00</span></h6>
                <div className="product-countdown" id="timer3">
                <MemoizedTimer formate="counter2"/>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="bid-btn-primary bid-btn">Place A Bid</a></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-card product-alpha-y">
              <div className="product-lavel">
                <span>ID 0195368</span>
              </div>
              <div className="product-image">
                <img src="assets/images/product/py-4.png" alt="" className="img-fluid" />
              </div>
              <div className="product-info">
                <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Lenovo XT92 True Wireless Bluetooth Gaming</a></Link></h6>
                <h6 className="cv">Current Bid <span>$80.00</span></h6>
                <div className="product-countdown" id="timer4">
                <MemoizedTimer formate="counter2"/>
                </div>
                <Link legacyBehavior href="/auction-details"><a  className="bid-btn-primary bid-btn">Place A Bid</a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product-card product-alpha-x">
          <div className="product-lavel">
            <span>ID 0195391</span>
          </div>
          <div className="product-image">
            <div className="product">
              <Link legacyBehavior href="/auction-details"><a><img src="assets/images/product/px-6.png" alt="" className="img-fluid" /></a></Link>
            </div>
            <Link legacyBehavior href="/auction-details"><a  className="bid-btn-primary bid-btn">Place A Bid</a></Link>
          </div>
          <div className="product-info">
            <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Xiaomi A2017 Amazfit Bip U Smart Watch Black (Global Version)</a></Link></h6>
            <h6 className="cv">Current Bid <span>$85.00</span></h6>
            <div className="product-countdown" id="timer5">
            <MemoizedTimer formate="counter2"/>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

  )
}

export default TopProducts