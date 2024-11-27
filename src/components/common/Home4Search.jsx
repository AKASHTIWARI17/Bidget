import React from 'react'

function Home4Search() {
  return (
<div className="search-section">
  <div className="container">
    <form className="search-form">
      <div className="row d-md-flex justify-content-center">
        <div className="col-lg-3 col-sm-6 col-12 px-0 border--right d-flex justify-content-center">
          <div className="form-inner">
            <label>Location</label>
            <input type="text" placeholder="Location Name" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 px-0 border--right d-flex justify-content-center">
          <div className="form-inner">
            <label>Property Type</label>
            <select>
              <option>Any</option>
              <option>All</option>
              <option>Old</option>
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 px-0 border--right d-flex justify-content-center">
          <div className="form-inner">
            <label>Price Range</label>
            <select>
              <option>Choose A Price</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 px-0 d-flex align-items-center justify-content-sm-start justify-content-center">
          <div className="form-inner border-end-0">
            <button className="explore-btn">Explore Now</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>


  )
}

export default Home4Search