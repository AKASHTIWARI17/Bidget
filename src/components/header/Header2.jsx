import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  scrollY: 0,
  sidebar: false,
  modalOpen: false,
  rightSidebar: false,
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
    case "RIGHT_SIDEBAR":
      return { ...state, rightSidebar: !state.rightSidebar };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}

function Header2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }
  function handleRightSidebar() {
    dispatch({ type: "RIGHT_SIDEBAR" });
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

      <div
        className={
          state.rightSidebar
            ? "menu-toggle-btn-full-shape show-sidebar"
            : "menu-toggle-btn-full-shape"
        }
      >
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="cross-icon" onClick={handleRightSidebar}>
              <i className="bx bx-x" />
            </div>
            <div className="sidebar-logo">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="sidebar-body">
            <h5>Our Social Site</h5>
            <ul className="sidebar-social">
              <li>
                <a href="https://www.facebook.com">
                  <i className="bx bxl-facebook" />
                  <span>facebook.com/Egens Theme</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="bx bxl-twitter" />
                  <span>twitter.com/Egens Theme/</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <i className="bx bxl-instagram" />
                  <span>instagram.com/Egens Theme/</span>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com">
                  <i className="bx bxl-pinterest-alt" />
                  <span>pinterest.com/Egens Theme/</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <p>Need Any Help? Please Mail Us!</p>
            <a href="mailto:info@Egenstheme.com">
              <span>
                <i className="bx bx-envelope" />
                info@Egens Theme.com
              </span>
            </a>
          </div>
        </div>
        <div className="sidebar-bottom-icon">
          <svg
            width={40}
            height={41}
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1687_55"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={40}
              height={41}
            >
              <rect width="39.8116" height={41} fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_1687_55)">
              <path d="M30.6961 2.43256L1.93437 23.5151C0.104333 24.8566 -0.246827 27.4996 1.15152 29.4073L16.3665 50.1642C17.7648 52.0719 20.391 52.5325 22.221 51.1911L50.9828 30.1085C52.8128 28.7671 53.164 26.1241 51.7657 24.2164L36.5507 3.45945C35.1523 1.55176 32.5262 1.09113 30.6961 2.43256ZM32.3867 4.73888C32.537 4.62871 32.7038 4.55641 32.8761 4.51736L27.8759 28.7454L3.26629 26.2216C3.35545 26.0691 3.47455 25.9317 3.62484 25.8215L32.3867 4.73888ZM49.2922 27.8021L20.5304 48.8847C19.9201 49.3321 19.0453 49.1787 18.5789 48.5424L4.37018 29.1583L28.9084 31.6743C29.2548 31.7094 29.5815 31.6137 29.8397 31.4245C30.0979 31.2352 30.2876 30.9525 30.3582 30.6116L35.3445 6.45391L49.5532 25.8381C50.0195 26.4744 49.9026 27.3547 49.2922 27.8021Z" />
            </g>
          </svg>
        </div>
      </div>

      <header className={state.scrollY > 120 ? "sticky-header" : ""}>
        <div className="header-area header-style-one px-md-5">
          <div className="container-fluid" style={{ padding: "1rem" }}>
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
                      <li className="header-account me-0 position-relative">
                        <Link
                          legacyBehavior
                          href="/login"
                          id="dropdownMenu4"
                          data-bs-toggle="dropdown"
                        >
                          <a>
                            <i className="bi bi-person-fill" />
                          </a>
                        </Link>
                        <ul
                          className="dropdown-menu account-list-mobile"
                          aria-labelledby="dropdownMenu4"
                        >
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>My account</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/register">
                              <a>Settings</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>
                          </li>
                          <li className="dropdown-item mb-0">
                            <Link legacyBehavior href="/register.">
                              <a>Register</a>
                            </Link>
                          </li>
                        </ul>
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
              <div className="col-xl-6">
                <nav
                  className={state.sidebar ? "main-nav  slidenav" : "main-nav"}
                >
                  <div className="inner-logo d-xl-none text-center mt-4">
                    <a href="#">
                      <img src="assets/images/logo-dark.png" alt="" />
                    </a>
                  </div>
                  {/* <ul>
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
                  </ul> */}
                  <div className="contact-mail inner-contact-mail mt-5 d-block d-xl-none">
                    <span>Message Us</span>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </div>
                </nav>
              </div>
              <div className="col-xl-4 d-xl-flex align-items-center justify-content-end d-none">
                <div className="nav-right d-flex align-items-center">
                  <form
                    action="#"
                    id="header_searchbar"
                    className="d-xxl-block d-none"
                  >
                    <div className="nav-searchbar">
                      <input type="text" placeholder="Search your items" />
                    </div>
                  </form>
                  <div className="nav-actions d-flex align-items-center">
                    <ul className="d-flex">
                      <li className="search-btn d-block d-xxl-none">
                        <i className="bi bi-search" />
                      </li>
                      <li className="header-account me-0 position-relative">
                        <a id="dropdownMenu2" data-bs-toggle="dropdown">
                          <i className="bi bi-person-fill" />
                        </a>
                        <ul
                          className="dropdown-menu account-list"
                          aria-labelledby="dropdownMenu2"
                        >
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>My account</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/register">
                              <a>Settings</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/register">
                              <a>Register</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li />
                      <li
                        className="menu-sidebar-btn"
                        onClick={handleRightSidebar}
                      >
                        <i className="bi bi-list" />
                      </li>
                    </ul>
                    <div className="contact-mail">
                      <span>Message Us</span>
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
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

export default Header2;
