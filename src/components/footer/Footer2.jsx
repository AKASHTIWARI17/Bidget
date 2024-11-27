import Link from "next/link";
import React from "react";

function Footer2() {
  return (
    <footer className="footer-area footer-style-two">
      <div className="container">
        <div className="footer-main">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-lg-3 col-md-6 col-sm-10 col-11">
              <div className="footer-widget">
                <div className="footer-disc">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <div className="footer-social-wrap">
                  <h5 className="widget-title d-inline-block">Follow Me</h5>
                  <ul className="footer-social-links justify-content-start">
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-11 d-flex justify-content-lg-center justify-content-start">
              <div className="footer-widget">
                <h5 className="widget-title">Quick Links</h5>
                <ul className="widget-links">
                  <li>
                    <Link legacyBehavior href="/login">
                      <a>My Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>Affiliate Program</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Lawyer Consulting</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Sorteo Locemses</a>
                  </li>
                  <li>
                    <Link legacyBehavior href="/privacy">
                      <a>Privacey Policy</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Term &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-11 d-flex justify-content-lg-center justify-content-start">
              <div className="footer-widget">
                <h5 className="widget-title">Help Center</h5>
                <ul className="widget-links">
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Help Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Borrow</a>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>License Agreement</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Sell your Product</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-11">
              <div className="footer-widget">
                <h5 className="widget-title">Contact Us</h5>
                <ul className="footer-contact-list">
                  <li>
                    <div className="contact-icon">
                      <i className="bi bi-telephone-plus" />
                    </div>
                    <div className="contact-list">
                      <a href="tel:+8801723244649">+880 172 3244 649</a>
                      <a href="tel:+8801723244649">+880 172 3244 649</a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="contact-list">
                      <a href="mailto:info@example.com">info@example.com</a>
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="contact-list">
                      <a href="#">
                        168/170, Avenue 01, Mirpur DOHS, Bangladesh
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright row align-items-center">
          <div className="col-lg-6 col-md-6 order-1 order-md-0 text-center text-md-start mt-3 mt-md-0">
            <p>
              Copyright 2022 <a href="#">Bidgen</a> | Design By{" "}
              <a href="https://www.egenslab.com">Egens Theme</a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 order-0 order-md-1">
            <div className="acceptable-cards float-lg-end text-center text-md-start">
              <img
                src="assets/images/icon/payment-cards.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
