import Link from "next/link";
import blogData from "../../data/blogData.json";

function Home2Blog() {
  return (
    <div className="blog-area blog-style-two mt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header-two">
              <h3>Our recent News</h3>
            </div>
          </div>
        </div>
        <div className="row g-4 d-flex justify-content-center">
          {blogData.slice(0, 3).map((item) => {
            const { id, img, date, title, authorName, authorImg, description } =
              item;
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
      </div>
    </div>
  );
}

export default Home2Blog;
