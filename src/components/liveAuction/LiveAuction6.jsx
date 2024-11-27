import React from 'react'
import Timer from '../common/Timer'
import Link from 'next/link'
const  MemoizedTimer = React.memo(Timer);
function LiveAuction6() {
  return (
    <div className="live-auction-area bg--dark pt-110">
  <div className="container">
    <div className="row align-items-center gy-4 mb-60">
      <div className="col-lg-6 ">
        <div className="section-title">
          <h3>Live Auction</h3>
        </div>
      </div>
      <div className="col-lg-6 ">
        <div className="float-md-end">
          <Link legacyBehavior href="/auction"><a className="gamma-btn-fill-md">Explore Now</a></Link>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-1.png" alt="" />
            <div className="countdown" id="countdown2">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>Profile portrait of a beautiful girl a 
                alien ultraviolet body.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-2.png" alt="" />
            <div className="countdown" id="countdown3">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>Nullam quis neque leo. Mauris siti
                amet quam leo.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-3.png" alt="" />
            <div className="countdown" id="countdown4">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>Donec sagittis arcu quis egestasa tempus ligula accumsan.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-4.png" alt="" />
            <div className="countdown" id="countdown5">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>egestas augue elementum sedaen
                Duis lobortis odio vel eros.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-5.png" alt="" />
            <div className="countdown" id="countdown6">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>hendrerit turpis congue faucibus
                Vestibulum ante primis in.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="product-card product-art-alpha">
          <div className="product">
            <img src="assets/images/arts/nft-6.png" alt="" />
            <div className="countdown" id="countdown7">
              <h6><MemoizedTimer formate="counter3"/></h6>
            </div>
            <div className="product-overlay">
              <Link legacyBehavior href="/auction-details" ><a className="product-view"><i className="bi bi-eye" /></a></Link>
              <h6>Share On</h6>
              <ul className="share-options">
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.linkedin.com"><i className="bx bxl-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="product-disc">
            <h5 className="product-title"><Link legacyBehavior href="/auction-details"><a>Maecenas congue libero egeta di
                lectus venenatis ut lacinia.</a></Link></h5>
            <div className="product-metas">
              <div className="author">
                <div className="avater">
                  <img src="assets/images/arts/nft-author1.png" alt="" />
                  <span>By Liam Noah</span>
                </div>
                <div className="price">
                  <ins>$100</ins><span>1/3</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <Link legacyBehavior href="/auction-details"><a className="product-btn">Bid Now</a></Link>
              <ul className="product-actions">
                <li><i className="bi bi-heart" /></li>
                <li><i className="bi bi-three-dots-vertical" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LiveAuction6