import Link from "next/link";
import React from "react";

function Breadcrumb({ pageName, pageTitle }) {
  return (
    <div className="breadcrumb breadcrumb-style-one mb-0 ">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h1 className="breadcrumb-title">{pageTitle}</h1>
          <ul className="d-flex justify-content-center breadcrumb-items">
            <li className="breadcrumb-item">
              <i className="bi bi-house-door" />{" "}
              <Link legacyBehavior href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">{pageName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
