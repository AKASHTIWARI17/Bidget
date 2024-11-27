import Link from 'next/link'
import React from 'react'

function Footer1() {
  return (
    <footer className="footer-area footer-style-one mt-110">
  <div className="container">
    <div className="footer-main">
      <div className="row gy-5 d-flex justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="footer-widget"> 
            {/* <form action="#" id="subscribe_form">
              <h3 className="form-title">subscribe us</h3>
              <div className="form-wrap d-flex align-items-center">
                <input type="email" placeholder="Enter Your Email" />
                <button type="submit">Send</button>
              </div>
            </form> */}
            <div className="footer-contact-links">
              <div className="contact-option">
                <div className="icon">
                  <i className="bi bi-telephone-plus" />
                </div>
                <div className="link">
                  <a href="tel:8801761111456">+971 048 252 888</a>
                </div>
              </div>
              <div className="contact-option">
                <div className="icon">
                  <i className="bi bi-envelope" />
                </div>
                <div className="link">
                  <a href="info@example.com">info@arada.com</a>
                </div>
              </div>
              <div className="contact-option">
                <div className="icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="link">
                  <a href="tel:8801761111456">Dubai, UAE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2 col-md-6">
          <div className="footer-widget">
            <h5 className="widget-title">Quick Links</h5>
            <ul className="widget-links">
              <li><Link legacyBehavior href="/login"><a>My Account</a></Link></li>
              <li><Link legacyBehavior href="/about"><a>Affiliate Program</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>Lawyer Consulting</a></Link></li>
              <li><Link legacyBehavior href="#"><a>Sorteo Locemses</a></Link></li>
              <li><Link legacyBehavior href="/privacy"><a>Privacey Policy</a></Link></li>
              <li><Link legacyBehavior href="#"><a>Term &amp; Condition</a></Link></li>
            </ul>
          </div>
        </div> */}
        <div className="col-lg-2 col-md-6">
          <div className="footer-widget">
            {/* <h5 className="widget-title">Help Center</h5> */}
            {/* <ul className="widget-links">
              <li><Link legacyBehavior href="/contact"><a>Help Center</a></Link></li>
              <li><Link legacyBehavior href="/faq"><a>FAQ</a></Link></li>
              <li><Link legacyBehavior href="#"><a>Borrow</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>License Agreement</a></Link></li>
              <li><Link legacyBehavior href="#"><a>Sell your Product</a></Link></li>
            </ul> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="footer-widget text-start">
            {/* <div className="footer-disc">
              <Link legacyBehavior href="/"><a><img src="assets/images/logo.png" alt="" /></a></Link>
              <p>Duis luctus risus ut velit aliquam, sed fringilla odio gravida. In vitae sagittis neque, eget vestibulum enim. Pellentesque ante odio.</p>
            </div> */}
            {/* <ul className="footer-social-links justify-content-start">
              <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
              <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
              <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    <div className="copyright row align-items-center">
      <div className="col-lg-6 col-md-6 order-1 order-md-0 text-center text-md-start mt-3 mt-md-0">
        <p>Copyright 2024 <a href="#"></a>  </p>
      </div>
      <div className="col-lg-6 col-md-6 order-0 order-md-1">
        <div className="acceptable-cards float-lg-end text-center text-md-start">
          {/* <img src="assets/images/icon/payment-cards.png" alt="" className="img-fluid" /> */}
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer1