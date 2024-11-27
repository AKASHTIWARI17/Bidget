import Link from "next/link";
import React from "react";

function Footer5() {
  return (
    <footer className="footer area footer-style-three">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-1 order-lg-1">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-sm-6">
                  <div className="footer-widget">
                    <h5 className="widget-title">Quick Links</h5>
                    <ul className="widget-links">
                      <li>
                        <Link legacyBehavior href="/login">
                          <a> My Account</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/about">
                          <a> Affiliate Program</a>
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
                <div className="col-xl-8 col-lg-7 col-sm-6 d-flex justify-content-lg-center">
                  <div className="footer-widget ">
                    <h5 className="widget-title">Help Center</h5>
                    <ul className="widget-links">
                      <li>
                        <Link legacyBehavior href="/contact">
                          <a> Help Center</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/faq">
                          <a> FAQ</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Borrow</a>
                      </li>
                      <li>
                        <Link legacyBehavior href="/contact">
                          <a> License Agreement</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Sell your Product</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-2 order-lg-2">
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
                      <a href="#">168/170, Avenue 01, ADDRESS, Bangladesh</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 order-0 order-lg-3">
              <div className="footer-widget">
                <div className="footer-disc">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/icon/orange-logo.png" alt="" />
                    </a>
                  </Link>
                  <p>
                  Bidgen is one of the most amazing companies ever for
                    painting all over the world.
                  </p>
                </div>
                <div className="footer-social-wrap">
                  <ul className="footer-social-links">
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
          </div>
        </div>
      </div>
      <div className="row footer-bottom d-flex justify-content-center mx-0">
        <div className="col-md-6 text-center ">
          <div className="copyright">
            Copyright 2022 <span>Bidgen</span> | Design{" "}
            <span>By Egens Theme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer5;
