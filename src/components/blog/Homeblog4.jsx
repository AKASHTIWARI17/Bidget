import Link from 'next/link'
import React from 'react'

function Homeblog4() {
  return (
    <div className="blog-area blog-style-four mt-110 ">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="land-section-header mx-auto mb-60">
          <h2>Latest News</h2>
          <p>Integer ante tellus, bibendum eget ante ut, aliquet luctus quam. Integer eget ex hendrerit
            mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="blog-land-alpha">
          <div className="thumb">
            <Link legacyBehavior href="/blog-details"><a><img src="assets/images/blog/blog-l1.png" alt="" /></a></Link>
            <div className="action"><a href="#"><i className="bi bi-share" /></a></div>
            <div className="tag"><span>Appartment</span></div>
          </div>
          <div className="blog-body">
            <div className="metas">
              <div className="meta"> <i className="bi bi-calendar-week" /> <a href="#"><span>Novembar 16, 2021</span></a>
              </div>
              <div className="meta"> <i className="bi bi-chat-quote" /> <a href="#"><span>Comment (05)</span></a></div>
            </div>
            <h4 className="blog-title"><Link legacyBehavior href="/blog-details"><a>Fusce consequat lorem nona
                pellentesque vehicula.</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-land-alpha">
          <div className="thumb">
            <Link legacyBehavior href="/blog-details"><a><img src="assets/images/blog/blog-l2.png" alt="" /></a></Link>
            <div className="action"><a href="#"><i className="bi bi-share" /></a></div>
            <div className="tag"><span>Flat</span></div>
          </div>
          <div className="blog-body">
            <div className="metas">
              <div className="meta"> <i className="bi bi-calendar-week" /> <a href="#"><span>Novembar 16, 2021</span></a>
              </div>
              <div className="meta"> <i className="bi bi-chat-quote" /> <a href="#"><span>Comment (05)</span></a></div>
            </div>
            <h4 className="blog-title"><Link legacyBehavior href="/blog-details"><a>Praesent vestibulum ut and metus eu
                faucibus.</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-land-alpha">
          <div className="thumb">
            <Link legacyBehavior href="/blog-details"><a><img src="assets/images/blog/blog-l3.png" alt="" /></a></Link>
            <div className="action"><a href="#"><i className="bi bi-share" /></a></div>
            <div className="tag"><span>House</span></div>
          </div>
          <div className="blog-body">
            <div className="metas">
              <div className="meta"> <i className="bi bi-calendar-week" /> <a href="#"><span>Novembar 16, 2021</span></a>
              </div>
              <div className="meta"> <i className="bi bi-chat-quote" /> <a href="#"><span>Comment (05)</span></a></div>
            </div>
            <h4 className="blog-title"><Link legacyBehavior href="/blog-details"><a>Ut velit odio, pharetra egeten antoni
                interdum elit.</a></Link></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Homeblog4