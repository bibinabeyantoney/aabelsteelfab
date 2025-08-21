import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Css/Contact.css";

function Contact() {
  return (
    <div>
      <Nav />

      <div className="contact-container">
        {/* Location Section */}
        <section className="location-section">
          <h2>Our Location</h2>
          <p>Aabel Steel Fabrication, Kerala, India</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2199695921463!2d76.5211443173546!3d9.662237229474565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d517d62da37f%3A0xa463267c0960e6e8!2sAabel%20Steel%20Fabricator&#39;s!5e0!3m2!1sen!2sin!4v1755763507792!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="details-section">
          <h2>Contact Us</h2>
          <div className="details-list">
            <p>
              📧 <strong>Email:</strong> aabelsteel@gmail.com
            </p>
            <p>
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              📍 <strong>Address:</strong> Aabel Steel Fabrication, Lisieux, Athirampuzha , Kerala, India
            </p>
            <p>
              ⏰ <strong>Working Hours:</strong> Mon – Sat (9 AM – 6 PM)
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
