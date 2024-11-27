import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import winnerData from "../data/winnerData.json";
import Link from "next/link";
function Winner() {
  
  return (
    <Layout>
      <Breadcrumb pageName="Auction Winner" pageTitle="Auction Winner" />
      <div className="auction-winner-wrapper pt-110">
        <div className="container">
          <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-5">
            {winnerData.map((item) => {
              const { id, img, name, winnerId } = item;
              return (
                <div className="col" key={id}>
                  <div className="winner-gamma">
                    <div className="winner-image">
                      <img src={img} alt="" />
                    </div>
                    <div className="winner-info">
                      <h5 className="winner-name">
                        <Link legacyBehavior href="/winner"><a>{name}</a></Link>
                      </h5>
                      <p className="id">{winnerId}</p>
                      <Link legacyBehavior href="/winner">
                        <a className="meta">
                        <i className="bi bi-bag-plus" />
                        </a>
                      </Link>
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

export default Winner;
