import Link from "next/link";
import React from "react";

function BlogLatestPostWidget() {
  return (
    <div className="blog-widget widget-categories">
      <h5 className="wdget-title">Latest Posts</h5>
      <div className="latest-post-single">
        <div className="post-img">
          <img src="assets/images/blog/lp1.png" alt="" />
        </div>
        <div className="post-content">
          <h6>
            <Link legacyBehavior href="/blog-details">
              Security Council Diplomats to Have Lunch.
            </Link>
          </h6>
          <p>5 February, 2021</p>
        </div>
      </div>
      <div className="latest-post-single">
        <div className="post-img">
          <img src="assets/images/blog/lp2.png" alt="" />
        </div>
        <div className="post-content">
          <h6>
            <Link legacyBehavior href="/blog-details">
              <a>How Can My Business Win?</a>
            </Link>
          </h6>
          <p>5 February, 2021</p>
        </div>
      </div>
      <div className="latest-post-single">
        <div className="post-img">
          <img src="assets/images/blog/lp3.png" alt="" />
        </div>
        <div className="post-content">
          <h6>
            <Link legacyBehavior href="/blog-details">
              <a>Genocide’s Legacy: Ation Villa ge in Rwanda</a>
            </Link>
          </h6>
          <p>5 February, 2021</p>
        </div>
      </div>
    </div>
  );
}

export default BlogLatestPostWidget;
