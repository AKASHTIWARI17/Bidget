import React from "react";

function BlogCategoryWidget() {
  return (
    <div className="blog-widget widget-categories">
      <h5 className="wdget-title">News Category</h5>
      <ul className="widget-body">
        <li>
          <a href="#">
            <span>BMW Car Bidding</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Business</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>New Tecnologies</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Data Center</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Network Setup</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Audi Car Bidding</span>{" "}
            <img src="assets/images/icon/arrow-right-fancy.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BlogCategoryWidget;
