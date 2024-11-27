import Layout from "@/components/Layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React, { useReducer } from "react";
const initialState = {
  password: "",
  passwordVisible: false,
  confirmPassword: "",
  confirmPasswordVisible: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, passwordVisible: !state.passwordVisible };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
      return {
        ...state,
        confirmPasswordVisible: !state.confirmPasswordVisible,
      };
    default:
      throw new Error();
  }
}
function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePasswordToggle = () => {
    dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" });
  };

  const handleConfirmPasswordToggle = () => {
    dispatch({ type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY" });
  };
  return (
    <Layout>
      <Breadcrumb pageName="Register" pageTitle="Register" />
      <section className="register-section pt-110">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-12">
              <div className="register-btn-group">
                <Link legacyBehavior href="/register">
                  <a className="register-btn">Register</a>
                </Link>
                <Link legacyBehavior href="/login">
                  <a className="login-btn">Login</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="register-left-area">
                <h3>Hello Again</h3>
                <p>Wellcome Back You’ve Been Missed</p>
                <Link legacyBehavior href="/">
                  <a className="transparent-btn">Back Home</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-form-area">
                <h3>Register Your Account</h3>
                <form className="w-100">
                  <div className="form-inner">
                    <label>Full Name*</label>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="form-inner">
                    <label>Email *</label>
                    <input type="text" placeholder="Your email" />
                  </div>
                  <div className="form-inner">
                    <label htmlFor="password">Password*</label>
                    <input
                      type={!state.passwordVisible ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <i
                      onClick={handlePasswordToggle}
                      className={
                        !state.passwordVisible
                          ? "bi bi-eye-slash"
                          : "bi bi-eye-slash  bi-eye"
                      }
                      style={{cursor:"pointer"}}
                      id="togglePassword"
                    />
                  </div>
                  <div className="form-inner">
                    <label htmlFor="password2">Confirm Password*</label>
                    <input
                      type={!state.confirmPasswordVisible ? "password" : "text"}
                      name="confirmpassword"
                      id="password2"
                      placeholder="Confirm Password"
                    />
                    <i
                      onClick={handleConfirmPasswordToggle}
                      className={
                        !state.confirmPasswordVisible
                          ? "bi bi-eye-slash"
                          : "bi bi-eye-slash  bi-eye"
                      }
                      style={{cursor:"pointer"}}
                    />
                  </div>
                  <div className="form-inner d-flex justify-content-between flex-wrap">
                    <div className="form-group">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">Remember Me</label>
                    </div>
                    <a href="#" className="forgot-pass">
                      Forgotten Password
                    </a>
                  </div>
                  <button className="account-btn">CREATE AN ACCOUNT</button>
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

export default Register;
