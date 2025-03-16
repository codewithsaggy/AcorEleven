import React from 'react';
import blogimg1 from '../images/blog/blog1.jpg';
import blogimg2 from '../images/blog/blog2.jpg';
import blogimg3 from '../images/blog/blog3.jpg';
import blogimg4 from '../images/blog/blog4.jpg';
import blogimg5 from '../images/blog/blog5.jpg';
import blogimg6 from '../images/blog/blog6.jpg';
import leftarrow from '../images/left-arrow.png';
import rightarrow from '../images/right-arrow.png';
import SEO from "./SEO";

function Blog() {
  return (
        <>
    <SEO title="Acor Eleven - Blogs"  description="" />
        <section className='blog-heads'>
        <div className="container">
            
            <div className="row text-center">
                <div className='col-12'>
            <h2 className='page_titles'>OUR BLOGS</h2>
            <p className='main-titles font-family-space-grotesk'>Find our all blogs from here</p>
            <p className='bsub-descrip'>Learn Everything about Logistics & Beyond</p>
            </div>
            </div>
        </div>
        </section>

            <section className="animate__animated animate__fadeIn">
                <div className="container">

                <div className="row">
                <div className="col-lg-12 animate__animated animate__fadeIn">
                    <h2 className='choose_title'>Choose Topic</h2>
                </div>
                <div className="col-lg-12 animate__animated animate__fadeIn">
                <ul className="nav nav-pills nav_gapsx blogs">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Trade News</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Beyond Logistics</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Logistics Exclusive</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Technology</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Express Delivery</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Domestic Express</button>
                    </li>
                        <li className="nav-item dropdown ml-auto ">
                            <a className="nav-link dropdown-toggle lastnth" data-bs-toggle="dropdown" href='/blog' role="button" aria-expanded="false">See All</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/blog'>Action</a></li>
                                <li><a className="dropdown-item" href='/blog'>Another action</a></li>
                                <li><a className="dropdown-item" href='/blog'>Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="tab-content blog-contnt" id="myTabContent">
                        <div className="tab-pane fade show active blog-contents" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg1} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Everything You Need to Know About Express Delivery</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg2} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Air Freight Guide for Exporters & Importers</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg3} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Choosing the Right Logistics Company: What to Look for and Why It Matters</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg4} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Shield Your Smile: How Dental Sealants Block Cavities</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg5} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Step-by-Step Process of Air Cargo Tracking</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5'>
                                    <div className="card">
                                        <img src={blogimg6} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">What is E-commerce? A Journey Through Evolution and Innovation</h5>
                                            <p className="card-text"> June 28, 2024</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12 col-12'>
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li><img src={leftarrow} className="pagi-arw" alt="" /></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                                            <li className="page-item"><a className="page-link" href="#">8</a></li>
                                            <li><img src={rightarrow} className="pagi-arw" alt="" /></li>
                                            
                                        </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">tab2</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">tab3</div>
                    </div>

                </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default Blog;