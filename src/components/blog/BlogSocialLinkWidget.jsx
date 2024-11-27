import React from 'react'

function BlogSocialLinkWidget() {
  return (
    <div className="blog-widget widget-categories">
    <h5 className="wdget-title">Our Follower</h5>
    <ul className="followers-list">
      <li>
        <a href="https://www.facebook.com">
          <span>
            <i className="bx bxl-facebook" />
            Facebook
          </span>
          <span>50,520</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <span>
            <i className="bx bxl-twitter" />
            Twitter
          </span>
          <span>42,035</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com">
          <span>
            <i className="bx bxl-instagram" />
            Instagram
          </span>
          <span>3,850</span>
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com">
          <span>
            <i className="bx bxl-pinterest-alt" />
            Pinterest
          </span>
          <span>10,590</span>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default BlogSocialLinkWidget