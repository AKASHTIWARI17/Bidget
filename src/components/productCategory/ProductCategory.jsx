import Link from 'next/link'
import React from 'react'

function ProductCategory() {
  return (
    <div className="product-categorys-area mt-110">
  {/* <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-header">
          <span>Category</span>
          <h2 className="text-capitalize">product Auction Category</h2>
        </div>
      </div>
    </div>

    <div className="row gy-4">
      <div className="col-lg-4">
        <div className="single-category-wrap">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h5>Computer</h5>
            <Link legacyBehavior href="/auction" ><a className="cate-btn">View All</a></Link>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Flash Sale Pentium Gold G5420 8th Gen Special PC</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-1.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>AMD Ryzen 15 10th Gen 5 3600 Gaming PC</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-2.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Flash Sale Pentium Gold G5420 8th Gen Special PC</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-3.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>AMD Ryzen 15 10th Gen 5 3600 Gaming PC</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-4.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="single-category-wrap">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h5>Laptop</h5>
            <Link legacyBehavior href="/auction" ><a className="cate-btn">View All</a></Link>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>HP 15s-du14TU Celeron  15.6" HD Laptop</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-5.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>HP 15s-du1114TU 15.6" HD Laptop gallery</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-6.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Acer Extensa 15 EX215-22 15" HD Laptop</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-7.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Lenovo Gaming 15 10th Gen 15.6" FHD Laptop</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-8.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="single-category-wrap">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h5>Smart Watch </h5>
            <Link legacyBehavior href="/auction" ><a className="cate-btn">View All</a></Link>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Xiaomi Amazfit GTR 3 Smart watch with battery</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-9.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Lenovo S2 Single Strap Smart Watch Gold</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-10.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Xiaomi Haylou Solar LS05-1 Smart Watch</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-11.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="product-card product-sm">
            <div className="product-info">
              <h6 className="product-title"><Link legacyBehavior href="/auction-details"><a>Xiaomi Amazfit GTS 2 Smart Watch without battery</a></Link></h6>
              <p className="cv">Current Bid <span>$85.00</span></p>
              <Link legacyBehavior href="/auction-details"><a className="bid-btn">Place A Bid</a></Link>
            </div>
            <div className="product">
              <img src="assets/images/product/p-sm-12.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

  )
}

export default ProductCategory