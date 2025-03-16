import React from 'react';
// import contact_map from '../images/map-imgs.jpg';
import SEO from "./SEO";
import GoogleMap from './Googlemap';
import phone from '../images/phone.svg';
import mail from '../images/email.svg';
// import location from '../images/location.svg';

function Contact() {
  return (
        <>
        
        <SEO title="Acor Eleven - Contact Us"  description="" />
            <section className="contact-section3 animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center align-items-center my-5">
                    <div className="col-lg-6 text-center animate__animated animate__fadeIn">
                            {/* <img src={contact_map} alt='About Us Map' className="m-auto w-100 max-wmap" /> */}

                            <div className="office-grid">
        {/* First Office */}
        <div className="office-card">
          {/* <div className="office-icon">
            <i className="fas fa-building"></i>
          </div> */}
          <h3>HEAD OFFICE :</h3>
          <div className="address-details">
                <p>Flat/Rm 810A, Block B, 08/F, Hung Hom Commercial Centre, 37-41 Ma Tau Road, Hung Hom, KL.</p>
          </div>
          <div className="contact-info">
          <ul className='list-none'>
          <li><img width="24" src={phone} alt="" className="mr-2" /><a href="tel:+85262997587">+852-6299-7587</a></li>
          <li><img src={mail} width="24" alt="" className="mr-2" /><a href="mail:info@Acoreleven.com">info@Acoreleven.com</a></li>
          </ul>
          </div>
        </div>

        {/* Second Office */}
        <div className="office-card">
          {/* <div className="office-icon">
            <i className="fas fa-building"></i>
          </div> */}
          <h3>INDIA OFFICE :</h3>
          <div className="address-details">
            <p>Floor-3, 1/34 Pvt No.302, Near Main Ganga Ram Road, Old Rajendra Nagar, New Delhi - 110060</p>
          </div>
          <div className="contact-info">
            <ul className='list-none'>
            <li><img width="24" src={phone} alt="" className="mr-2" /><a href="tel:+85262997587">+852-6299-7587</a></li>
            <li><img src={mail} width="24" alt="" className="mr-2" /><a href="mail:info@Acoreleven.com">info@Acoreleven.com</a></li>
          </ul>
          </div>
        </div>
      </div>

                            
                        </div>
                    <div className="col-lg-6 text-left px-5 animate__animated animate__fadeIn">
                            <h2 className="contact_title">Get in <span>Touch</span></h2>
                            <p className="contact_desc font-family-roboto">Have questions or need assistance? Reach out to us for support or any Shipment inquiries</p>
                            <div className='mt-2'>
                            <form>
                                <div className="form-group">
                                        {/* <label for="nameexample">Name *</label> */}
                                        <input type="text" className="form-control" id="nameexample" aria-describedby="emailHelp" placeholder="Name*" />
                                    </div>

                                    <div className="form-group">
                                        {/* <label for="exampleInputEmail1">Email address</label> */}
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        {/* <label for="exampleInputPassword1">Phone number </label> */}
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Phone number *" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1" placeholder="How did you find us?">
                                        <option disbled>How did you find us?</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Send</button>
                                    </form>
                            </div>



                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='my-5'>
                <div className='container'>
                <GoogleMap />
                </div>
            </section>
        </>
    );
}
export default Contact;