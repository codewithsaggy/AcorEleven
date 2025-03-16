import React from 'react';
import about_map from '../images/about-map.png';
import SEO from "./SEO";

function About() {
  return (
        <>
        <SEO title="Acor Eleven - Air Freight Services"  description="" />
            <div className="ftco-blocks-cover-1 animate__animated animate__fadeIn">
                <div className="ftco-cover-1 ftco-about overlay">
                    <div className="container">
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-6 animate__animated animate__fadeIn">
                                <h1 className='text-uppercase streamline-text'>We are building the <br/>Operating System<br/>for Commerce</h1>
                                <p className="streamline-p font-family-roboto">Trusted partner for small businesses, large <br/>marketplaces and every type of business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="animate__animated animate__fadeIn">
                <div className="container text-center about-section2">
                    <h2 className="mb-4 text-center text-black About-title">About Us</h2>
                    <p className="text-gray text-center font-family-popins About-descrip">Success is critical to any business. In the current day scenario where speed  and efficiency are of utmost importance in the delivery of any product  or service, any leeway can become critical thus posing a threat to the  business. AcorEleven understands the consequences of promptness and  reliability and hence embeds these values into its core business  philosophy.</p>
                </div>
            </section>
            <section className="about-section3 animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 text-center">
                        <img src={about_map} alt='About Us Map' className="m-auto w-100 max-wmap" />
                        </div>
                        <div className="col-lg-6 text-left px-5">
                            <h2 className="about_vm">Our Mission & Vision</h2>
                            <p className="about_desc_vm">Mission: AcorEleven, we connect the world through fast, reliable, and innovative shipping solutions. Our commitment is to deliver excellence, providing seamless, secure, and cost-effective transportation that empowers businesses and individuals to reach their global potential.</p>
                            <p className="about_desc_vm">Vision: To be the world's leading logistics partner, transforming shipping through cutting-edge technology, sustainable practices, and exceptional customer service. We aim to make global connectivity effortless, breaking down distance barriers and creating a more interconnected world.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;