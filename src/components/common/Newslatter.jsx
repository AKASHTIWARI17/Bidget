import React from 'react'

function Newslatter() {
  return (
    <div className="newslatter-area newslatter-style-one">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="newslatter-content text-center">
            <h2>Sign Up for our Newsletter to Stay Up to Data With tech News!</h2>
            <form action="#" id="newslatter_form">
              <div className="newslatter-input d-flex flex-sm-nowrap flex-wrap justify-content-center align-items-center gap-md-4 gap-2">
                <input type="text" placeholder="Enter Your Email Address" />
                <button type="submit" className="text-uppercase">subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Newslatter