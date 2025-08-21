import "./Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="contact-inline">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 Facebook
            </a>
            <span>|</span>
            <a href="mailto:yourmail@gmail.com">✉️ yourmail@gmail.com</a>
            <span>|</span>
            <a href="tel:+919876543210">📞 +91 98765 43210</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
