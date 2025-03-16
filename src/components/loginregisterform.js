import React,{ useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import loginbg from '../images/login-bg.jpg';

function Navbar() {

  const [offcanvasMenu, setOffcanvasMenu] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  // API
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  // const [loading, setLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    // setLoading(true);
  
    try {
      const response = await fetch('https://isms-api.trendingobjects.com/api/customer/sendEmailOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });
  
      if(response.ok) {
      const data = await response.json();

      console.log('response json', data);

        if(data.status.success) {
          // OTP sent successfully
          console.log('OTP sent successfully:', data);
        }else {
          // Failed to send OTP
          console.error('Failed to send OTP:', data);
        }
      }
      else {
        const errorData = await response.json();
        console.error('Error Response:', errorData);
      }
    }
    catch(error) {
      console.error('Fetch Errors:', error);
    }
    //  finally {
    //   setLoading(false);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
  
    try {
      const payload = { 
        email,
        otp: Number(otp), // Ensure OTP is sent as a number
      };
      const response = await fetch('https://isms-api.trendingobjects.com/api/customer/verifyEmailOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.status.success) {
          // console.log(data); // Handle login success
          // Redirect to dashboard with token in URL
          window.location.href = `https://main.d2413d4o42skmy.amplifyapp.com/dashboard?token=${data.token}`;
        } else {
          console.error('Error Response:', data);
        }
      } else {
        const errorData = await response.json();
        console.error('Error Response:', errorData);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 1000ms delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  useEffect(() => {
    const cloneMenu = () => {
      const menu = document.querySelector(".js-clone-nav");
      if (menu) {
        const clonedItems = Array.from(menu.children).map((item, index) => (
          <li key={index} className={item.className}>
            {item.querySelector("a") && (
              <NavLink to={item.querySelector("a").href} onClick={toggleMenu} className="nav-link">
                {item.querySelector("a").textContent}
              </NavLink>
            )}
            {item.querySelector("ul") && (
              <li className="has-children">
                <ul className="dropdown arrow-top">
                  {Array.from(item.querySelector("ul").children).map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink to={subItem.querySelector("a").href} onClick={toggleMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        {subItem.querySelector("a").textContent}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {item.querySelector("button") && (
              <button className="site-btn ml-3">Login</button>
            )}
          </li>
        ));
        setMenuItems(clonedItems);
      }
    };

    cloneMenu();
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setOffcanvasMenu((prev) => !prev);
  };

  // Handle window resize to remove the offcanvas menu if the screen is resized to larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOffcanvasMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const [activeTab, setActiveTab] = useState('email');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>

      {showLoader && (
          <>
          <div id="overlayer"></div>
            <div className="loader">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}

      <div className={`${offcanvasMenu ? "offcanvas-menu" : ""}`}>
        <div className={`site-mobile-menu site-navbar-target`}>
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3" onClick={toggleMenu}>
              <span className="icon-close2"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className='site-nav-wrap'>{menuItems}</ul>
          </div>
        </div>
        <header className="site-navbar js-sticky-header site-navbar-target animate__animated animate__fadeIn  animate__delay-1s" role="banner">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="site-logo">
                <Link to="/" className="text-black"><span className="text-primary"><img src={logo} alt="sitelogo" /></span></ Link>
              </div>
              <div className="col-12">
                <nav className="site-navigation text-right ml-auto " role="navigation">
                  <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                      About Us
                    </NavLink>
                  </li>
                  <li className="has-children">
                    <a href="/" className="nav-link">Services</a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <NavLink to="/courier-services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Courier Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/air-freight" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Air Freight
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ocean-freight" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Ocean Freight
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/inland-transport-services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Inland Transport Services
                        </NavLink>
                      </li>
                      
                      <li>
                        <NavLink to="/customs-clearnance-documentation" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Customs Clearances & Documentation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/warehouse-services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Warehouse Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/packaging-relocation" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Packaging & Relocation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/trade-finance" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Trade Finance
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                      Blog
                    </NavLink>
                  </li>
                    <li><a taget="_blank" href='/' className="navm-btn" onClick={handleOpenModal}>Login</a></li>
                    <li><a taget="_blank" href="tel:+1849721548" className="navm-btn clr-red">+18-4972-1548</a></li>
                  </ul>
                </nav>
              </div>
              <div className="toggle-button d-inline-block d-lg-none"><a href="/" className="site-menu-toggle py-5 js-menu-toggle text-black" onClick={toggleMenu}><span className="icon-menu h2 text-black"></span></a></div>

            </div>
          </div>
        </header>
      </div>

      {/********Global popup button*******/}
      <div className="container">
      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show z-n5"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered modal-minsize login-form">
            <div className="modal-content">
              <div className="modal-body p-0">
              <div className='row'>
                <div className="col-lg-6 col-md-12 p-5 d-flex align-items-center">
                      <div className="w-100 font-family-sen">
                          <h3 className="isms-text-md font-family-sen text-black">Login</h3>
                          <p className="isms-text-sm">Enter the <span>email </span> and OTP to sign in</p>
                          <div className="container mt-3 p-0">
                            <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item w-50" role="presentation">
                                <button
                                  className={`nav-link ${activeTab === 'email' ? 'active' : ''} w-100`}
                                  onClick={() => handleTabChange('email')}
                                  type="button"
                                  role="tab">
                                  Email
                                </button>
                              </li>
                              <li className="nav-item w-50" role="presentation">
                                <button
                                  className={`nav-link ${activeTab === 'phone' ? 'active' : ''} w-100`}
                                  onClick={() => handleTabChange('phone')}
                                  type="button"
                                  role="tab">
                                  Phone Number
                                </button>
                              </li>
                            </ul>
                            <div className="tab-content mt-3">
                              {activeTab === 'email' && (
                                <div className="tab-pane fade show active" role="tabpanel">
                               <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="emailInput" className="form-label">Email address</label>
    <input
      type="email"
      className={`form-control ${!isEmailValid && 'is-invalid'}`}
      id="emailInput"
      placeholder="Enter your email"
      value={email}
      onChange={handleEmailChange}
    />
    <button
      className="btn btn-outline-success float-right otp-btn"
      onClick={sendOtp}
    >
      {/* {loading ? 'Sending...' : 'Get OTP'} */}
    </button>
    {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="otpInput" className="form-label">OTP</label>
    <input
      type="text"
      className="form-control"
      id="otpInput"
      placeholder="Enter OTP"
      value={otp}
      onChange={handleOtpChange}
    />
  </div>
  <div className="mb-3">
    <p className="login-optn">
      Didn’t get code? <a href="/" onClick={sendOtp}>Resend</a>
    </p>
  </div>
  <button
    type="submit"
    className="btn site-btn w-100 mt-3"
  >
    {/* {loading ? 'Logging in...' : 'Login'} */}
  </button>
  <div className="mt-2">
    <p className="login-optn">
      Not registered yet? <a href="/">Create an Account</a>
    </p>
  </div>
</form>

                                </div>
                              )}
                              {activeTab === 'phone' && (
                                <div className="tab-pane fade show active" role="tabpanel">
                                   <form>
                                    <div className="mb-3">
                                      <label htmlFor="emailInput" className="form-label">Phone Number</label>
                                      <input type="text" className="form-control" id="PhoneInput" placeholder="" required />
                                      <button className='btn btn-outline-success float-right otp-btn'>Get OTP</button>
                                    </div>
                                    <div className="mb-3">
                                      <label htmlFor="emailInput" className="form-label">OTP</label>
                                      <input type="text" className="form-control" id="OTPInput" placeholder="" required />
                                    </div>
                                    <div className="mb-3">
                                      <p className='login-optn'>Didn’t get code? <a href='/'>Resend</a></p>
                                    </div>
                                    <button type="submit" className="btn site-btn w-100 mt-3">Login</button>
                                    <div className="mt-2">
                                      <p className='login-optn'>Not registered yet?  <a href='/'>Create an Account</a></p>
                                    </div>
                                  </form>
                                </div>
                              )}
                            </div>
                          </div>
                </div>
              </div>     
                <div className="col-lg-6 col-12 p-0">
                <img className="w-100 h-100 rounded" src={loginbg} alt="" />
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}





export default Navbar;