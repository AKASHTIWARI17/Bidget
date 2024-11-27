import Layout from '@/components/Layout/Layout'
import BLogTagWidget from '@/components/blog/BLogTagWidget'
import BlogCategoryWidget from '@/components/blog/BlogCategoryWidget'
import BlogLatestPostWidget from '@/components/blog/BlogLatestPostWidget'
import BlogSocialLinkWidget from '@/components/blog/BlogSocialLinkWidget'
import Breadcrumb from '@/components/common/Breadcrumb'


function BlogDetails() {
  return (
    <Layout>
        <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
        <section className="blog-details-section pt-110">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-8">
        {/* blog-details-header */}
        <div className="blog-details-header">
          <p className="catgory">BMW Car Bidding</p>
          <h3>A brand for a company is like reputation for a person. You earn reputation by trying</h3>
          <div className="header-meta">
            <div className="meta-item">
              <i className="bx bxs-user" /><span>Jane Cooper</span>
            </div>
            <div className="meta-item">
              <i className="bx bx-time" /><span>5 Min Read</span>
            </div>
          </div>
        </div>
        {/* blog-dtails-body */}
        <div className="blog-dtails-body">
          <div className="blog-details-img">
            <img src="assets/images/blog/blogd.png" alt="" />
          </div>
          <p className="common-para">Gochujang ugh viral, butcher pabst put a bird on it meditation austin craft beer banh mi. Distillery ramps af, gochujang hell of VHS kitsch austin. Vegan air plant trust fund, poke sartorial ennui next level photo booth coloring book etsy green juice meditation austin craft beer.</p>
          <h5 className="subheading">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id est laborum.</h5>
          <div className="blockqute-area">
            <div className="author">
              <img src="assets/images/blog/blockquote-img.png" alt="" />
            </div>
            <div className="block-quote">
              <i className="bx bxs-quote-right" />
              <p>“Our task must be to free ourselves… by widening our circle of compassion toe brace all living creatures and the whole of nature and it’s.</p>
              <h5><a href="#">Leslie Alexander</a></h5>
            </div>
          </div>
          <p className="common-para mb-25">Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
          <p className="common-para">Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia co nsequuntur magni dolores eos qui ratione ed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam </p>
          <div className="blog-video-area">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="blog-video">
                  <div className="wrapper">
                    <div className="video-pluse">
                      <span  />
                      <span  />
                      <span  />
                      <a href="https://www.youtube.com/watch?v=u31qwQUeGuM" className="video-frame video-icon"><i className="bx bx-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/images/blog/blogd-vdo2.png" alt="" />
              </div>
            </div>
          </div>
          <p className="common-para">Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
        </div>
        {/* blog-details-social */}
        <div className="blog-details-social">
          <div className="row g-3">
            <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
              <ul className="post-tag-list">
                <li>TAGS:</li>
                <li><a href="#">Survey,</a></li>
                <li><a href="#">Data,</a></li>
                <li><a href="#">Center,</a></li>
                <li><a href="#">VAS,</a></li>
                <li><a href="#">Setup</a></li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
              <ul className="blog-icon-list">
                <li>Follow:</li>
                <li><a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a></li>
                <li><a href="https://www.pinterest.com"><i className="bx bxl-pinterest-alt" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* comment-area */}
        <div className="comment-area">
          <h4>02 Comments</h4>
          <ul className="comment-list">
            <li className="single-comment"> 
              <div className="comment-header">
                <div className="comment-img">
                  <img src="assets/images/blog/comm1.png" alt="" />
                </div>
                <div className="comment-title">
                  <h5>DAVID MARTIN</h5>
                  <p>20 September, 2021 . 4:00 pm</p>
                </div>
              </div>
              <div className="comment-body">
                <p>Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis qui ratione.</p>
                <a href="#" className="reply-btn">Reply</a>
              </div>
            </li>
            <li className="single-comment"> 
              <div className="comment-header">
                <div className="comment-img">
                  <img src="assets/images/blog/blog-author-x.png" alt="" />
                </div>
                <div className="comment-title">
                  <h5>ABDULLAH ANSARI</h5>
                  <p>20 September, 2021 . 4:00 pm</p>
                </div>
              </div>
              <div className="comment-body">
                <p>Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis qui ratione.</p>
                <a href="#" className="reply-btn">Reply</a>
              </div>
            </li>
          </ul>
          <h4>Leave A Comment</h4>
          <form className="comment-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Your Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Your Email</label>
                  <input type="text" placeholder="Enter Your Email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <label>Your Message</label>
                  <textarea placeholder="Enter Your Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <button className="submit-button">Submit Comment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <form className="sidebar-search">
          <div className="form-inner d-flex justify-content-center ">
            <input type="text" placeholder="Enter Keward" />
            <button className="search-btn">SEARCH</button>
          </div>
        </form>
        <div className="blog-sidebar">
          <BlogCategoryWidget/>
         <BlogLatestPostWidget/>
          <BLogTagWidget/>
         <BlogSocialLinkWidget/>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layout>
  )
}

export default BlogDetails