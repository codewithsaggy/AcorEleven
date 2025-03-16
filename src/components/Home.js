import React, { useState } from 'react';
import Rating from "react-rating-stars-component";
import washingtone from '../images/partners/c-1.png';
import techcrunch from '../images/partners/c-2.png';
import bloomberg from '../images/partners/c-3.png';
import gizmodo from '../images/partners/c-4.png';
import forbes from '../images/partners/c-5.png';
import whyUsImage1 from '../images/why-us-img1.png';
import whyUsImage2 from '../images/why-us-img2.png';
import cubeRound from '../images/cube-round.png';
import cubeSquare from '../images/cube-sqaure.png';
import testimonialBannerImage from '../images/testimonial-banner.png';
import testimonialQuoteImage from '../images/testimonial-quote.png';
import shippingContainer from '../images/shipping-container.png';
import SEO from "./SEO";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 

const Home = () => {

    const [awbNumber, setAwbNumber] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook to handle redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!awbNumber) {
            setError("Please enter an AWB number");
            return;
        }

        try {
            const response = await axios.post(
                "https://isms-api.trendingobjects.com/api/shipment/trackShipmentByAWB",
                { awb_number: awbNumber },
                { headers: { "Content-Type": "application/json" } }
            );

            // Check if API response is successful
            if (response.data?.status?.success) {
                const trackingUrl = "https://main.d2413d4o42skmy.amplifyapp.com/tracking";
                
                // Redirect to the tracking page (without token)
                window.location.href = trackingUrl; 
            } else {
                setError("Invalid AWB number.");
            }
        } catch (err) {
            setError("Error fetching tracking details. Try again.");
        }
    };

    const logos = [
        { src: washingtone, alt: 'The Washington Post' },
        { src: techcrunch, alt: 'TechCrunch' },
        { src:bloomberg, alt: 'Bloomberg' },
        { src: gizmodo, alt: 'GIZMODO' },
        { src: forbes, alt: 'Forbes' },
    ];

    const testimonials = [
        {
          name: "Jane Smith",
          designation: "Freelance Consultant",
          text: "I was very impressed with the handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
          rating: 5,
        },
        {
          name: "Michael Johnson",
          designation: "CEO",
          text: "I was very impressed with the handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
          rating: 5,
        },
        {
          name: "Sarah Lee",
          designation: "Online Retailer",
          text: "I was very impressed with the handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
          rating: 5,
        },
        {
          name: "John Doe",
          designation: "Business Owner",
          text: "I have been using Acroleven cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.",
          rating: 5,
        },
      ];

  return (
    <>

        <SEO title="Acor Eleven - Home"  description="" />
        <div className="ftco-blocks-cover-1">
            <div className="ftco-cover-1 overlay">
            <div className="container">
                <div className="row align-items-center mb-5 pb-5 banner-minh">
                <div className="col-lg-6 animate__animated animate__fadeIn">
                    <h5 className='text-uppercase'>We are best logistic company</h5>
                    <h1 className='text-uppercase streamline-text'>Streamline Your Shipping with Our Cargo Services</h1>
                    <p className="mb-5 streamline-p">Simplify your shipping process and make it more efficient with our cargo services. From start to finish, we'll handle everything to ensure your cargo arrives safely.</p>
                </div>
                <div className='col-lg-5 track-shippment animate__animated animate__fadeIn'>
                    <h4 className='track-title'>Track your shipment</h4>
                    <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group d-flex">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="AWB number" 
                        value={awbNumber} 
                        onChange={(e) => setAwbNumber(e.target.value)}
                    />
                    <button type="submit" className="track-btn">Track</button>
                </div>                
                    {error && <h6 className='font-family-poppins  text-red'>{error}</h6>}
                <p className="mb-0">See the tracking ID on the shipping document. <a href="" className="help-text">Help</a></p>
            </form>
        </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="block__73694 site-section border-top " id="why-us-section">
            <div className="container">
                <div className="row d-flex no-gutters align-items-stretch why-us-sec">
                    <div className="col-lg-6 mr-auto mt-lg-0 pr-lg-5 animate__animated animate__fadeIn  animate__delay-1s" >
                    <h2 className="mb-4 why-us">Why Us?</h2>
                    <p className='font-family-poppins text-gray why-us-p'>Benefit from competitive pricing, exceptional 24/7 customer support, and stringent security measures that protect your goods and data. With our commitment to compliance and local expertise in navigating complex customs, we make international shipping straightforward and cost-effective, allowing you to focus on growing your business. Trust us to be the backbone of your global logistics needs.</p>
                    </div>
                    <div className='col-lg-6 why-us-images animate__animated animate__fadeIn  animate__delay-1s'>
                        <img src={whyUsImage1} alt='Image 1' className='whyusimage1'/>
                        <img className='whyusimage2' src={whyUsImage2} alt='Image 2'/>
                    </div>
                </div>
            </div>
        </div>

        <section className="achievement-section site-section">
            <div className="container text-center">
                <h2 className="mb-4 text-center text-black what-achieved">What We Have Achieved</h2>
                <p className="mb-5 text-gray text-center font-family-popins what-achieved-p">Our efficient and reliable services ensure seamless, cost-effective international shipping for businesses of all sizes. We've enhanced global trade for countless businesses, ensuring timely deliveries and optimized logistics operations.</p>
                <div className="row gy-4">
                    <div className="col-md-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="achievement-card">
                            <img src={cubeSquare} alt='cubeSquare'/>
                            <h4 className="achievement-number mt-2">1M+</h4>
                            <p className="achievement-text">Shipments Handled</p>
                        </div>
                    </div>
                    <div className="col-md-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="achievement-card">
                            <img src={cubeSquare} alt='cubeSquare'/>
                            <h4 className="achievement-number mt-2">1000+</h4>
                            <p className="achievement-text">Happy Customers</p>
                        </div>
                    </div>
                    <div className="col-md-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="achievement-card">
                            <img src={cubeSquare} alt='cubeSquare'/>
                            <h4 className="achievement-number mt-2">10+</h4>
                            <p className="achievement-text">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="site-section bg-light" id="pricing-section">
            <div className="container">
                <div className="row mb-5 justify-content-center text-center">
                    <div className="col-md-7 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="block-heading-1">
                            <h4 className='text-red text-uppercase'>Our Services</h4>
                            <h1 className='font-family-space-grotesk text-black efficient-reliable'>Efficient and Reliable Shipping</h1>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="pricing our-services">
                            <img src={cubeRound} alt='cubeRound'/>
                            <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Ocean Shipping</h3>
                            <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs</p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="pricing our-services">
                            <img src={cubeRound} alt='cubeRound'/>
                            <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Air Shipping</h3>
                            <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <div className="pricing our-services">
                            <img src={cubeRound} alt='cubeRound'/>
                            <h3 className="text-dark-blue mt-4 text-uppercase font-weight-bold">Truck Shipping</h3>
                            <p className='font-family-roboto'>We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="featured-section animate__animated animate__fadeIn  animate__delay-1s">

            <div className="">
                <h2 className='mb-4 text-center text-white what-achieved'>Assosiate Partner</h2>
                <div className="featured-logos">
                {logos.map((logo, index) => (
                    <img
                    key={index}
                    className="logo"
                    src={logo.src}
                    alt={logo.alt}
                    />
                ))}
                </div>
            </div>
        </div>
        
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                {/* Left Side */}
                    <div className="col-md-6 animate__animated animate__fadeIn  animate__delay-1s">
                        <h6 className="text-red font-family-space-grotesk text-uppercase testimonial-title">Testimonials</h6>
                        <h2 className="text-dark-blue font-family-space-grotesk text-uppercase font-size-42">Our Clients Speak<br/> for Us</h2>
                        <img
                            src={testimonialBannerImage}
                            alt="Logistics Testimonial"
                            className="img-fluid rounded min-width-100"
                        />
                        <img
                            src={testimonialQuoteImage}
                            className='testimonial-quote'
                            alt="Logistics Testimonial"
                        />
                        <div className="highlighted-testimonial mt-3 p-4">
                        <Rating
                            value={5}
                            edit={false}
                            size={38}
                            activeColor="#ffd700"
                        />
                        <p className="mt-2 text-black">
                            "I have been using Acroleven cargo logistic & transportation
                            services for over a year now and I am extremely satisfied with
                            their service. They are efficient, reliable, and always deliver
                            on time. I highly recommend them to anyone in need of logistics
                            services."
                        </p>
                        <p>
                            <h6 className='text-black font-family-space-grotesk text-uppercase testimonial-name'>John Doe, Business Owner</h6>
                        </p>
                        </div>
                    </div>

                {/* Right Side */}
                    <div className="col-md-6 testimonial-data animate__animated animate__fadeIn  animate__delay-1s">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={index} className="testimonial-card p-4 mb-3">
                            <Rating
                            value={testimonial.rating}
                            edit={false}
                            size={38}
                            activeColor="#ffd700"
                            />
                            <p className="mt-2 text-dark-blue">{testimonial.text}</p>
                            <p>
                                <h6 className='text-dark-blue font-family-space-grotesk text-uppercase testimonial-name'>{testimonial.name}, {testimonial.designation}</h6>
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="cta-section animate__animated animate__fadeIn  animate__delay-1s">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-md-6 text-left shipping-text animate__animated animate__fadeIn  animate__delay-1s">
                        <h2 className="cta-text">
                        Are you looking for a one stop shipping solution?
                        </h2>
                        <button className="site-btn font-family-space-grotesk w-200px">Book Shipment</button>
                    </div>

                    {/* Right Content */}
                    <div className="col-md-6 p-0 text-right pt-4 animate__animated animate__fadeIn  animate__delay-1s">
                        <img
                        src={shippingContainer}
                        alt="Shipping Container"
                        className="cta-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;
