import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/header/Header1";
import React from "react";

function Contact() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Contact" pageTitle="Contact" />
        <div className="contact-wrapper  mt-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header mx-auto text-center">
                  <h3>Any Asking To The Officers?</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-box-wrap">
                  <h4>Contact Us</h4>
                  <div className="single-contact-box">
                    <h6>Let’s Talk</h6>
                    <a href="mailto:info@example.com" className="mail">
                      info@example.com
                    </a>{" "}
                    <a href="mailto:support@example.com" className="mail">
                      support@example.com
                    </a>
                    <a href="tel:8801761111456" className="phone">
                      +88 0176 1111 456
                    </a>
                  </div>
                  <div className="single-contact-box">
                    <h6>Loacation.</h6>
                    <a href="#" className="location">
                      168/170, Ave 01, Streets Suite 66xyz, Bangladesh
                    </a>
                  </div>
                  <div className="single-contact-box">
                    <h6>Social Site Link</h6>
                    <a href="#" className="weblink">
                      Facebook: https://www.facebook.com/Egens Theme
                    </a>
                    <a href="#" className="weblink">
                      Twitter: https://www.twitter.com/Egens Theme
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="contact-form">
                  <h4>Questions or Comments?</h4>
                  <form action="#" id="contact_form" method="post">
                    <div className="contact-input-group">
                      <label htmlFor="first-Name">Full Name</label>
                      <input
                        type="text"
                        id="first-Name"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="contact-input-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="contact-input-group">
                      <label htmlFor="email">Message</label>
                      <textarea
                        id="massege"
                        cols={30}
                        rows={7}
                        placeholder="Type your Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="contact-input-group mt-0">
                      <button type="submit" className="submit-btn">
                        Submit Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
