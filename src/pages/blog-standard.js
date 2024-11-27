import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";
import blogStandardData from "../data/blogData.json";
import Link from "next/link";
import BlogCategoryWidget from "@/components/blog/BlogCategoryWidget";
import BlogLatestPostWidget from "@/components/blog/BlogLatestPostWidget";
import BLogTagWidget from "@/components/blog/BLogTagWidget";
import BlogSocialLinkWidget from "@/components/blog/BlogSocialLinkWidget";
function BlogStandard() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <div className="blog-standard-wrapper pt-110">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-8">
              {blogStandardData.slice(0, 3).map((item) => {
                const {
                  id,
                  standard_img,
                  standard_title,
                  standard_description,
                  date,
                  authorName,
                  authorImg,
                } = item;
                return (
                  <div key={id} className="blog-standard-alpha mb-50">
                    <div className="thumb">
                      <img src={standard_img} alt="" />
                      <ul className="share-options">
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
                    <div className="blog-body">
                      <div className="author-info">
                        <div className="author">
                          <div className="author-thumb">
                            <img
                              src="assets/images/blog/blog-author-x.png"
                              alt=""
                            />
                          </div>

                          <div className="author-disc">
                            <h5>{authorName}</h5>
                            <span>Car Auction</span>
                          </div>
                        </div>
                        <span className="date">
                          <i className="bi bi-clock" />
                          {date}
                        </span>
                      </div>
                      <h3 className="blog-title">
                        <Link legacyBehavior href="/blog-details">
                          <a>{standard_title}</a>
                        </Link>
                      </h3>
                      <p>{standard_description}</p>
                      <Link legacyBehavior href="/blog-details">
                        <a className="readme-btn">Read More</a>
                      </Link>
                    </div>
                  </div>
                );
              })}

              <ul className="pagination pagination-style-one justify-content-center">
                <li className="page-item page-arrow">
                  <a className="page-link" href="#">
                    {" "}
                    <i className="bi bi-arrow-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item page-arrow">
                  <a className="page-link" href="#">
                    {" "}
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <form className="sidebar-search">
                <div className="form-inner d-flex justify-content-center ">
                  <input type="text" placeholder="Enter Keward" />
                  <button className="search-btn">SEARCH</button>
                </div>
              </form>
              <div className="blog-sidebar">
                <BlogCategoryWidget />
                <BlogLatestPostWidget />
                <BLogTagWidget />
                <BlogSocialLinkWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogStandard;
