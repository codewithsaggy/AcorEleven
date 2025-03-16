import React from 'react';
import cubeRound from '../images/cube-round.png';
import cubeSquare from '../images/cube-sqaure.png';
import serviceOceanFreight from '../images/service-ocean-freight.png';
import SEO from "./SEO";

function CourierService() {
  return (
        <>
        <SEO title="Acor Eleven - Courier Services"  description="" />
            <div className="ftco-blocks-cover-1 animate__animated animate__fadeIn">
                <div className="ftco-cover-1 ftco-service-1 overlay">
                    <div className="container">
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-6">
                                <h1 className='text-uppercase streamline-text'>Courier Service<br/> Forwarding</h1>
                                <p className="streamline-p font-family-roboto">Optimize your ocean freight shipping process<br/> with AcoEleven’s logistics solutions</p>
                                <button className="site-btn font-family-sen service-container-contact-us-btn">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block__73694 site-section">
                <div className="container">
                    <div className="row d-flex no-gutters align-items-stretch why-us-sec">
                        <div className="col-lg-6 mr-auto mt-lg-0 pr-lg-5 p-5" >
                        <h2 className="mb-4 ocean-freight text-uppercase">Ocean Freight</h2>
                        <p className='font-family-poppins text-gray ocean-freight-p'>Ocean freight is the cost effective method of transporting large volumes of goods over distant destinations. Ocean freight, commonly referred as Sea freight is the ideal mode for transporting heavy, bulky, and not  time-sensitive goods like- heavy machinery and defense equipment, etc.  There are two modes of transporting goods via ocean- FCL and LCL.</p>
                        </div>
                        <div className='col-lg-6 why-us-images'>
                            <img src={serviceOceanFreight} alt='Image 1' className='serviceOceanFreight'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section benefits-section" id="pricing-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-md-7">
                            <div className="block-heading-1">
                                <h1 className='font-family-space-grotesk text-black efficient-reliable'>Benefits</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                            <div className="pricing benefits">
                                <img src={cubeSquare} alt='cubeSquare'/>
                                <h3 className="service-benefits-title mt-4 font-family-poppins">Cost-Effectiveness</h3>
                                <p className='font-family-poppins text-gray'>Ocean freight is the cheapest option for transporting large shipments over long distances.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                            <div className="pricing benefits">
                                <img src={cubeSquare} alt='cubeSquare'/>
                                <h3 className="service-benefits-title mt-4 font-family-poppins">High Capacity</h3>
                                <p className='font-family-poppins text-gray'>Ships can handle heavy or oversized goods, making them ideal for bulk cargo.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                            <div className="pricing benefits">
                                <img src={cubeSquare} alt='cubeSquare'/>
                                <h3 className="service-benefits-title mt-4 font-family-poppins">Global Reach</h3>
                                <p className='font-family-poppins text-gray'>With access to international ports, ocean freight supports worldwide trade.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                            <div className="pricing benefits">
                                <img src={cubeSquare} alt='cubeSquare'/>
                                <h3 className="service-benefits-title mt-4 font-family-poppins">Versatile Handling</h3>
                                <p className='font-family-poppins text-gray'>Accommodates a variety of goods, including dry, liquid, and temperature-controlled shipments..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-md-12 text-center shipping-text">
                            <h2 className="cta-text">
                            Are you looking for a one stop<br/> shipping solution?
                            </h2>
                            <button className="site-btn font-family-space-grotesk w-200px">Book Shipment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light" id="pricing-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-md-7">
                            <div className="block-heading-1">
                                <h4 className='text-red text-uppercase'>Our Services</h4>
                                <h1 className='font-family-space-grotesk text-black efficient-reliable'>Explore other Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div className="pricing our-services">
                                <img src={cubeRound} alt='cubeRound'/>
                                <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Ocean Shipping</h3>
                                <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs</p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div className="pricing our-services">
                                <img src={cubeRound} alt='cubeRound'/>
                                <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Air Shipping</h3>
                                <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div className="pricing our-services">
                                <img src={cubeRound} alt='cubeRound'/>
                                <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Truck Shipping</h3>
                                <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    
  );
}

export default CourierService;
