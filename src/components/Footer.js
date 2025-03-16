import React from 'react';
import logo from '../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import phone from '../images/phone.svg';
import mail from '../images/email.svg';
import location from '../images/location.svg';

function Footer() {
  return (
    <footer className="site-footer animate__animated animate__fadeIn  animate__delay-1s">
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <div className="row">

              <div className="col-md-4 col-12 ml-auto">
                <Link to="/" className="text-black"><span className="text-primary"><img className="ml-18px" src={logo} alt="" /></span></Link>
                <p className='font-family-roboto text-justify'>Acor Eleven Express Private Limited is an emerging player in the international express logistics industry, specializing in door-to-door express delivery services. The company focuses on serving the rapidly growing e-commerce market, providing fast, reliable, and efficient cross-border shipping solutions. </p>
          </div>

<div className='col-md-8 col-12'>
  <div className='row'>
              <div className="col-md-4 ml-auto">
                <h1 className="footer-heading mb-4 font-family-space-grotesk text-uppercase">Navigation</h1>
                <ul className="list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              
              <div className="col-md-4 ml-auto">
                <h1 className="footer-heading mb-4 font-family-space-grotesk text-uppercase">Services</h1>
                <ul className="list-unstyled footer-navigate">
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
              </div>

              <div className="col-md-4 ml-auto">
                <h1 className="footer-heading mb-4 font-family-space-grotesk text-uppercase">contact info</h1>
                <ul className="list-unstyled">
                  <li className='d-flex align-items-start'><img width="24" src={phone} alt="" className="mr-2" /><a href="tel:+85262997587">+852-6299-7587</a></li>
                  <li className='d-flex align-items-start'><img src={mail} width="24" alt="" className="mr-2" /><a href="mail:info@Acoreleven.com">info@Acoreleven.com</a></li>
            <li className='d-flex align-items-start'><img width="24" src={location} alt="" className="mr-2" /><a href="/contact"><b>HEAD OFFICE :</b><br/>Flat/Rm 810A, Block B, 08/F, Hung Hom Commercial Centre, 37-41 Ma Tau Road, Hung Hom, KL.</a></li>
            <li className='d-flex align-items-start'><img width="24" src={location} alt="" className="mr-2" /><a href="/contact"><b>INDIA OFFICE :</b><br/>Floor-3, 1/34 Pvt No.302, Near Main Ganga Ram Road, Old Rajendra Nagar, New Delhi - 110060</a></li>
                </ul>
              </div>
            </div>
        </div>
            </div>
          </div>

          {/* <div className="col-md-4 ml-auto">
            <div className="mb-5">
              <h1 className="footer-heading mb-4 font-family-space-grotesk text-uppercase">Subscribe Us</h1>
              <form action="#" method="post" className="footer-suscribe-form">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control border-secondary text-white bg-transparent font-family-roboto" placeholder="Enter Your Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                  </div>
                  <div className="form-group">
                    <button className="w-100 site-btn font-family-space-grotesk text-uppercase" type="button" id="button-addon2">Subscribe Now</button>
                  </div>
                </form>
            </div>
          </div>

          <div className="col-md-4">

          </div> */}
        </div>

        <div className="row pt-2 mt-2 text-center border-top">
          <div className="col-md-6">
            <div className="pt-3">
              <p className="copyright font-family-space-grotesk text-uppercase text-left">
                Copyright &copy; {new Date().getFullYear()}  <a href="/" className='fw-bold' style={{color: '#D50C0C'}}>ACORELEVEN</a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
          <div className="pt-3">
            <p className="copyright font-family-space-grotesk text-uppercase text-right">
              Designed & Developed by <a href="https://qicapp.com" className='fw-bold' style={{color: '#D50C0C'}} target="_blank" rel="noopener noreferrer">QicApp</a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
