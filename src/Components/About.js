import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Css/About.css'

function About() {
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,            // 👈 enables auto sliding
  autoplaySpeed: 2000,       // 👈 2 seconds delay
  cssEase: "linear",         // 👈 smooth sliding
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



  return (
    <div>
      <Nav />

      <div className="about-container">
        {/* Founder Section */}
        <section className="founder-section">
          <img 
            src="/images/shyjan.jpg" 
            alt="Founder of Aabel Steel Fabrication" 
            className="founder-img" 
          />
          <div className="founder-info">
            <h1>Our Founder</h1>
            <h3>Mr.Shyjan Varavukalayil</h3>
            <p>
              With over 15 years of experience in steel fabrication, 
              Mr. Shyjan Varavukalayil established <strong>Aabel Steel Fabricators </strong> 
              with a vision to provide high-quality and durable steel structures 
              for industries, businesses, and homes. His dedication and expertise 
              have been the driving force behind our success.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Structural Fabrication</h3>
              <p>We design and build strong frameworks for buildings, bridges, and warehouses.</p>
            </div>
            <div className="service-card">
              <h3>Custom Fabrication</h3>
              <p>Tailored steel solutions to match your exact project needs and designs.</p>
            </div>
            <div className="service-card">
              <h3>Industrial Welding</h3>
              <p>Professional welding for industrial machinery, equipment, and components.</p>
            </div>
            <div className="service-card">
              <h3>Gates & Railings</h3>
              <p>Modern and traditional designs crafted with precision and durability.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Our Work Gallery</h2>
          <Slider {...sliderSettings}>
            <div><img src="/images/work1.png" alt="Steel Work 1" className="gallery-img" /></div>
            <div><img src="/images/work2.png" alt="Steel Work 2" className="gallery-img" /></div>
            <div><img src="/images/work3.png" alt="Steel Work 3" className="gallery-img" /></div>
            <div><img src="/images/work4.png" alt="Steel Work 4" className="gallery-img" /></div>
            <div><img src="/images/work5.png" alt="Steel Work 5" className="gallery-img" /></div>
          </Slider>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default About
