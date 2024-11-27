import Link from "next/link";
import React from "react";

function HomeBlog6() {
  return (
    <div className="blog-area blog-style-three bg--dark pt-110">
      <div className="container">
        <div className="row title-gap">
          <div className="col-lg-6 ">
            <div className="section-title">
              <h3>Popular Blog</h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-art-alpha">
              <div className="thumb">
                <img src="assets/images/blog/blog-c1.png" alt="" />
                <div className="date">
                  <span>22 January</span>
                </div>
              </div>
              <div className="blog-body dark--bg">
                <h5 className="blog-title">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Profile portrait of a beautiful girls alien ultraviolet
                      body.
                    </a>
                  </Link>
                </h5>
                <div className="blog-bottom">
                  <Link legacyBehavior href="/blog-details">
                    <a className="readme-btn">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </Link>
                  <ul className="metas">
                    <li>
                      <i className="bi bi-hand-thumbs-up" />
                    </li>
                    <li>
                      <i className="bi bi-heart" />
                    </li>
                    <li>
                      <i className="bi bi-three-dots-vertical" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-art-alpha">
              <div className="thumb">
                <img src="assets/images/blog/blog-c2.png" alt="" />
                <div className="date">
                  <span>3rd March</span>
                </div>
              </div>
              <div className="blog-body dark--bg">
                <h5 className="blog-title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Fusce consequat lorem nona on pellentesque vehicula. </a>
                  </Link>
                </h5>
                <div className="blog-bottom">
                  <Link legacyBehavior href="/blog-details">
                    <a className="readme-btn">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </Link>
                  <ul className="metas">
                    <li>
                      <i className="bi bi-hand-thumbs-up" />
                    </li>
                    <li>
                      <i className="bi bi-heart" />
                    </li>
                    <li>
                      <i className="bi bi-three-dots-vertical" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-art-alpha">
              <div className="thumb">
                <img src="assets/images/blog/blog-c3.png" alt="" />
                <div className="date">
                  <span>24 February</span>
                </div>
              </div>
              <div className="blog-body dark--bg">
                <h5 className="blog-title">
                  <Link legacyBehavior href="/blog-details">
                    <a> Praesent vestibulum ut and tolki metus eu faucibus.</a>
                  </Link>
                </h5>
                <div className="blog-bottom">
                  <Link legacyBehavior href="/blog-details">
                    <a className="readme-btn">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </Link>
                  <ul className="metas">
                    <li>
                      <i className="bi bi-hand-thumbs-up" />
                    </li>
                    <li>
                      <i className="bi bi-heart" />
                    </li>
                    <li>
                      <i className="bi bi-three-dots-vertical" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog6;
