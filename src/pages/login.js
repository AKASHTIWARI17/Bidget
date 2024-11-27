import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <Layout>
      <Breadcrumb pageName="Login" pageTitle="Login" />
      <section className="register-section pt-110">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-12">
              <div className="register-btn-group">
                <Link legacyBehavior href="/register">
                  <a className="register-btn style2">Register</a>
                </Link>
                <Link legacyBehavior href="/login">
                  <a className="login-btn style2">Login</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="register-left-area style2">
                <h3>Hello Again</h3>
                <p>Wellcome Back You’ve Been Missed</p>
                <Link legacyBehavior href="/">
                  <a className="transparent-btn">Back Home</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-form-area">
                <h3>Login Your Account</h3>
                <form className="w-100">
                  <div className="form-inner">
                    <label>User Name*</label>
                    <input type="text" placeholder="User Name" />
                  </div>
                  <div className="form-inner">
                    <label htmlFor="email">Password*</label>
                    <input
                      type={!passwordVisible ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <i
                      onClick={() => togglePasswordVisibility()}
                      className={
                        !passwordVisible
                          ? "bi bi-eye-slash"
                          : "bi bi-eye-slash  bi-eye"
                      }
                      id="togglePassword"
                    />
                  </div>
                  <div className="form-inner d-flex justify-content-between flex-wrap">
                    <div className="form-group">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">
                        I agree to the Terms &amp; Policy
                      </label>
                    </div>
                    {/* <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
                          <label class="check-box-text">Remember Me</label> */}
                    <a href="#" className="forgot-pass">
                      Forgotten Password
                    </a>
                  </div>
                  <button className="account-btn">LOGIN ACCOUNT</button>
                </form>
                <div className="alternate-signup-box">
                  <h6>or Sign up WITH</h6>
                  <div className="btn-group gap-4">
                    <a href="#" className="google-btn d-flex align-items-center">
                      <i className="bx bxl-google" />
                      <span>Signup whit google</span>
                    </a>
                    <a href="#" className="facebook-btn d-flex align-items-center">
                      <i className="bx bxl-facebook" />
                      Sign up whit facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
