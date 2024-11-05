import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Home.css'

import c1 from './images/c1.jpeg'
import c2 from './images/c2.jpeg'
import c3 from './images/c3.jpeg'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.webp'
import a1 from './images/a1.webp'
import a2 from './images/a2.webp'
import a3 from './images/a3.webp'
import a4 from './images/a4.webp'
import bg1 from './images/bg1.jpeg'
import sc1 from './images/sc1.webp'
import sc2 from './images/sc2.webp'
import sc3 from './images/sc3.webp'
import sc4 from './images/sc4.webp'
import sc5 from './images/sc5.webp'
import sc6 from './images/sc6.webp'
import sc7 from './images/sc7.webp'
import sc8 from './images/sc8.webp'
import f1 from './images/f1.avif'
import f3 from './images/f3.webp'
import f4 from './images/f4.webp'
import f5 from './images/f5.webp'
import f6 from './images/f6.jpg'
import f7 from './images/f7.webp'
import f8 from './images/f8.webp'
import f9 from './images/f9.webp'
import e1 from './images/e1.webp'
import e2 from './images/e2.webp'
import r1 from './images/r1.png'
import r2 from './images/r2.png'





const Home = () => {
    return (
        <div>
            <br />
            <div className="container-fluid">
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Fall for Our Fabulous Flowers!</h3>
                            <p>Bring the Beauty of Autumn Indoors</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Make it a Birthday to Remember!</h3>
                            <p>Bring a smile to their face with fresh flowers!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Fall for Our Fabulous Flowers!</h3>
                            <p>Bring the Beauty of Autumn Indoors</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <br /><br />
            <h2>Shop by Category</h2>
            <div className='container-fluid'><br />

                <div className='row'>
                    <div className='col col-sm-6 col-lg-4 col-lg-4'>
                        <div class="card" style={{ width: "19rem", border: 'none' }}>
                            <img src={s1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Flower</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-6 col-lg-4 col-lg-4'>
                        <div class="card" style={{ width: "19rem", border: 'none' }}>
                            <img src={s2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Subscriptions</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-6 col-lg-4 col-lg-4'>
                        <div class="card" style={{ width: "19rem", border: 'none' }}>
                            <img src={s3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Luxury Flowers</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div><br /><br />

            {/* ------------------------------------------------------------------------------------- */}

            <div className='container-fluid'>
                <h2 style={{ textAlign: 'center', fontWeight: 400 }}>BEST SELLERS</h2><br />
                <div className='row'>
                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={a1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Designer's Choice - Autumn Mix</h3>
                                <p style={{ textAlign: 'center' }}>A beautyful display of autumnal blooms, perfectfor coffe
                                    tables or bedsie tables.
                                </p>
                                <p style={{ textAlign: 'center' }}>$125.00</p>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={a2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Old New Yorker</h3>
                                <p style={{ textAlign: 'center' }}>Classic and timeless, like New York City itself</p>
                                <p style={{ textAlign: 'center' }}>$115.00</p><br /><br />
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={a3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>Designer's Choice - Blush & Pinks</h3>
                                <p style={{ textAlign: 'center', marginTop: '5px' }}>Classic and timeless, like New York City itself.</p>
                                <p style={{ textAlign: 'center' }}>$115.00</p><br></br>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={a4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text" style={{ color: 'teal', textAlign: 'center', fontWeight: 300, }}>The Plaza</h3>
                                <p style={{ textAlign: 'center', marginTop: '15px' }}>Custom blush and pinks arrangement in a vase.</p>
                                <p style={{ textAlign: 'center' }}>$125.00</p><br /><br />
                            </div>
                        </div>
                    </div>
                </div><br />

                <div style={{ textAlign: 'center' }}>
                    <button style={{
                        color: 'white', border: '1px solid white', backgroundColor: 'black',
                        borderRadius: '45px', margin: '3px', padding: '10px', width: '13%'
                    }}>shop All</button>
                </div>
            </div><br /><br />

            {/* ------------------------------------------------------------------------------------------------- */}


            <div className='container-fluid' >
                <div className='row' >
                    <div className='col-sm-12 col-lg-12 col-md-12'>
                        <div className='images'>
                            <img src={bg1} style={{ width: '100%', height: '380px' }}></img>
                            <h2 className='text-overlay'>A premier and family-owned <br /> luxury floral boutique in <br />the heart of NYC.</h2>
                        </div>
                    </div>
                </div>
            </div> <br /><br /><br /><br /><br />

            {/* ------------------------------------------------------------------------------ */}

            <div className='container-fluid'>
                <h3 className='text' >LUXURY</h3><br />
                <div className='row vertical-scroll'>

                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc1} class="card-img-tops" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>



                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>



                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>



                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc7} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>



                    <div class="card" style={{ width: "18rem" }}>
                        <img src={sc8} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br /><br />

            {/* --------------------------------------------------------------------------------------------- */}


            <div className='container-fluid'>
                <h1 className='two'>Looking for something specific?</h1> <br />
                <div className='row '>
                    <div className='col col-sm-3 col-md-3 col-lg-3 '>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Ballard's Rays Of Life</h5>
                                <p class="card-text">Regular price$110.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Rhapsody</h5>
                                <p class="card-text">Regular price$139.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Ballard's Best Day Ever</h5>
                                <p class="card-text">Regular priceFrom $79.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Pop of Purple</h5>
                                <p class="card-text">Regular price$30.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col col-sm-3 col-md-3 col-lg-3 g-4'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Pop of Purple</h5>
                                <p class="card-text">Regular price$30.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3 g-4'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Pop of Purple</h5>
                                <p class="card-text">Regular price$30.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3 g-4'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Pop of Purple</h5>
                                <p class="card-text">Regular price$30.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3 g-4'>
                        <div class="card" style={{ width: "16rem" }}>
                            <img src={f8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    Pop of Purple</h5>
                                <p class="card-text">Regular price$30.00</p>
                                <div className='btns'>
                                    <a href="#" class="btn btn-dark mx-2">Share </a>
                                    <a href="#" class="btn btn-dark mx-2">Add Card </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br></br>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-sm-6 col-md-6 col-lg-6'>
                        <div class="card" style={{ width: "34rem" }}>
                            <img src={e1} class="card-img-top" alt="..." />
                        </div>

                    </div>
                    <div className='col col-sm-6 col-md-6 col-lg-6'>
                        <div class="card" style={{ width: "30rem", border: "none" }}>
                            <div class="card-body">
                                <h1 class="card-texts1"> Event Florals</h1>
                                <p className='p1'>Bring your event to life with stunning floral centerpieces! Elevate corporate
                                    luncheons, bridal and baby showers, bar/bat mitzvahs, and more. Our designers
                                    will work to craft the perfect arrangement to fit your event needs.
                                </p>
                                <button className='buttons'>Learn About Events</button>

                            </div>
                        </div>

                    </div>

                </div>
            </div><br /><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-sm-6 col-md-6 col-lg-6'>
                        <div className='col col-sm-6 col-md-6 col-lg-6'>
                            <div class="card" style={{ width: "34rem" }}>
                                <img src={e2} class="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div class="card cardscolor" style={{ width: "34rem" }} >
                        <div class="card-bodys">
                            <h1 class="card-texts11"> Charity in Bloom</h1>
                            <p className='p1'>Bring your event to life with stunning floral centerpieces! Elevate corporate
                                luncheons, bridal and baby showers, bar/bat mitzvahs, and more. Our designers
                                will work to craft the perfect arrangement to fit your event needs.
                            </p>
                            <button className='buttonss'>Learn About Events</button>
                        </div>
                    </div>

                </div>

            </div><br /><br /><br /><br /><br />

            <div className='container-fluid text-center'>
                <h2 className='twoo'>Real Reviews from Real Customers</h2><br /><br />
                <div className='row align-items-center'>
                    <div className='col d-flex justify-content-center'>
                        <img src={r1} alt="Review 1" className="review-image" />
                    </div>
                    <div className='col col d-flex justify-content-center'>
                        <div className="boxes text-center">
                            <h4>4.7</h4>
                            <h6>out of 5</h6>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className='boxes1 text-center'>
                            <h4>Overall Ratings</h4>
                            <div class="star-rating">
                                <span class="star filled">★</span>
                                <span class="star filled">★</span>
                                <span class="star filled">★</span>
                                <span class="star filled">★</span>
                                <span class="star">☆</span>
                            </div>
                        </div>
                    </div>

                    <div className='col d-flex justify-content-center'>
                        <div className='boxes1 text-center'>
                            <h1>95%</h1>
                            <p>of customers that buy from this merchant give them a 4
                                or 5-Star rating.</p>

                        </div>

                    </div>
                    <div className='col d-flex justify-content-center'>
                        <img src={r2} alt="Review 2" className="review-image" />
                    </div>

                </div><hr />
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "18rem", }} >
                            <div class="card-body " style={{ textAlign: 'left' }}>
                                <div class="star-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">☆</span>
                                </div>
                                <h4>Theodora Wohler</h4>
                                <p class="card-text">27 oct 2024</p>

                                <p class="card-text">
                                    Lovely flowers ... wonderful follow up when my daughter</p>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "18rem", }} >
                            <div class="card-body " style={{ textAlign: 'left' }}>
                                <div class="star-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star ">☆</span>
                                    <span class="star ">☆</span>
                                    <span class="star">☆</span>
                                </div>
                                <h4>By Gillian Lewis</h4>
                                <p class="card-text">27 oct 2024</p>

                                <p class="card-text">
                                    Lovely flowers ... wonderful follow up when my daughter</p>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "18rem", }} >
                            <div class="card-body " style={{ textAlign: 'left' }}>
                                <div class="star-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">☆</span>
                                    <span class="star">☆</span>
                                </div>
                                <h4>By Livi Jayne</h4>
                                <p class="card-text">27 oct 2024</p>

                                <p class="card-text">
                                    Lovely flowers ... wonderful follow up when my daughter</p>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-3 col-md-3 col-lg-3'>
                        <div class="card" style={{ width: "18rem", }} >
                            <div class="card-body " style={{ textAlign: 'left' }}>
                                <div class="star-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">☆</span>
                                </div>
                                <h4>By Camilla Veevers</h4>
                                <p class="card-text">27 oct 2024</p>

                                <p class="card-text">
                                    Lovely flowers ... wonderful follow up when my daughter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br />

            <div className='container-fluid colr'><br/>
                <div className='row'>
                    <div className='col'>
                        <h2 className='name'>Join Our Mailing List for Discounts & More! Email EmailSIGN UP</h2>
                    </div>
                </div>
                <br />

                <div className='row'>
                    <div className='col col-sm-12 col-lg-12 col-md-12 text-center'>
                        <input className="in" placeholder='Email' style={{
                            width: '500px', padding: '5px'

                        }}></input>
                    </div>
                </div><br />

                <div className='row'>
                    <div className='col text-center'>
                        <i class='bx bxl-facebook-square'></i>
                        <i class='bx bxl-instagram'></i>
                        <i class='bx bxl-twitter'></i>
                        <i class='bx bxl-whatsapp'></i>
                    </div>
                </div><br />
                <div className='row find'>
                    <div className='col col-sm-6 col-lg-4 col-md-4'>
                        <h6 className='six'>About</h6>
                        <p>Our Story</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                        <p>Care Instructions</p>
                        <p>Blog</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Accessibility</p>
                    </div>
                    <div className='col col-sm-6 col-lg-4 col-md-4'>
                        <h6>Shop</h6>
                        <p>All Products</p>
                        <p>Flowers</p>
                        <p>Sympathy</p>
                        <p>Gifts</p>
                        <p>Subscriptions</p>
                        <p>Same Day Delivery</p>

                    </div>
                    <div className='col col-sm-6 col-md-4 col-lg-4'>
                        <h6>Local Delivery</h6>
                        <p>Financial District Delivery</p>
                        <p>Manhattan Delivery</p>
                        <p>Midtown Manhattan Delivery</p>
                        <p>Theatre District Delivery</p>
                        <p>Tribeca Delivery</p>
                        <p>Upper East Side Delivery</p>
                        <p>Upper West Side Delivery</p>
                        <p>Williamsburg Delivery</p>
                    </div>

                </div>
                <hr></hr>
                <p className='ph'>© 2024, Scotts Flowers NYC
                    Refund policy
                    Privacy policy
                    Terms of service</p><br/>


            </div><br /><br />







        </div>
    );
};

export default Home;
