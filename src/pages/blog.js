import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import blogData from "../data/blogData.json";
import Link from "next/link";

function Blog() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Grid" pageTitle="Blog Grid" />
      <div className="blog-grid-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {blogData.map((item) => {
              const {
                id,
                img,
                date,
                title,
                authorName,
                authorImg,
                description,
              } = item;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-card blog-style-gamma">
                    <div className="thumb">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <img src={img} alt="" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-body">
                      <h5 className="blog-title">
                        <Link legacyBehavior href="/blog-details">
                          {title}
                        </Link>
                      </h5>
                      <div className="blog-meta">
                        <div className="author">
                          <img src={authorImg} alt="" />
                        </div>
                        <span className="author">{authorName}</span>
                        <span className="date">{date}</span>
                      </div>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ul className="pagination pagination-style-one justify-content-center pt-50">
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
      </div>
    </Layout>
  );
}

export default Blog;
