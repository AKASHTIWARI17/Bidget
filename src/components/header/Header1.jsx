import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  scrollY: 0,
  sidebar: false,
  modalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu: "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "SET_SCROLL_Y":
      return {
        ...state,
        scrollY: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case "TOGGLE_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}

function Header1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "SET_SCROLL_Y", payload: scrollY });
  };

  const handleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`mobile-search ${state.modalOpen ? "slide" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn" onClick={toggleModal}>
                {/* <i class="bi bi-search me-4"></i> */}
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className={state.scrollY > 120 ? "sticky-header" : ""}>
        <div className="header-area header-style-one px-md-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo.jpg" alt="logo" />
                    </a>
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <ul className="nav-actions nav-inner-actions d-flex d-xl-none">
                      <li className="search-btn" onClick={toggleModal}>
                        <i className="bi bi-search" />
                      </li>
                    </ul>
                    <div className="mobile-menu d-flex ">
                      <div
                        onClick={handleSidebar}
                        className={
                          state.sidebar
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 d-flex justify-content-center ">
                <nav
                  className={state.sidebar ? "main-nav slidenav" : "main-nav"}
                >
                  <div className="inner-logo d-xl-none text-center mt-4">
                    <a href="#">
                      <img src="assets/images/logo.jpg" alt="" />
                    </a>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <a href="#">Home</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("home-one")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "home-one"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/">
                            <a>Home Accessories</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-car">
                            <a>Home Car</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-land">
                            <a>Home Land</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-art-light">
                            <a>Home Light-art</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-art-dark">
                            <a>Home Dark-art</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Auction</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("auction")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "auction"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/auction">
                            auction
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/auction-details">
                            auction details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Pages</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("pages")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "pages"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/about">
                            <a>about</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/winner">
                            <a>winner</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/login">
                            <a>login</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/register">
                            <a>register</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/faq">
                            <a>faq</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/privacy">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/404">
                            <a>Error</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Blog</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("blog")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "blog"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Blog Standard</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>Blog Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact">
                        <a>contact </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="contact-mail inner-contact-mail mt-5 d-block d-xl-none">
                    <span>Message Us</span>
                    <a href="mailto:support@example.com">support@arada.com</a>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 d-xl-flex align-items-center justify-content-end d-none">
                <div className="nav-right d-flex align-items-center">
                  <ul className="nav-actions">
                    <li className="search-btn" onClick={toggleModal}>
                      <i className="bi bi-search" />
                    </li>
                  </ul>
                  <div className="contact-no d-flex align-items-center">
                    <div className="contact-icon">
                      <img src="assets/images/icon/phone-w.svg" alt="" />
                    </div>
                    <div className="contact-info">
                      <p>Hot Line Number</p>
                      <h6>
                        <a href="tel:+8801761111456">+971 048 252 888</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
