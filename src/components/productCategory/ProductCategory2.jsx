import Link from 'next/link'
import React from 'react'

function ProductCategory2() {
  return (
    <div className="product-categorys-style-two mt-110">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-header-two text-center">
          <h3>Auction Product Category</h3>
        </div>
      </div>
    </div>
    <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3  row-cols-2 justify-content-center gy-4">
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>Tyota</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>Primio car</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>Audi</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>BMW</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>TESLA</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
      <div className="col">
        <div className="single-category">
          <div className="icon mx-auto ">
            <img src="assets/images/icon/car-gray.svg" alt="" className="icon1" />
            <img src="assets/images/icon/car-white.svg" alt="" className="icon2" />
            <div className="category-count"><span>30</span></div>
          </div>
          <h6>VOLKSWAGEN</h6>
          <Link legacyBehavior href="/auction" ><a className="category-btn"><i className="bi bi-arrow-down" /></a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductCategory2