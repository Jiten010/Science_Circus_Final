// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="submit-button">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p className="location">
            <strong>Location:</strong><br />
            Department of Physics and Astrophysics,<br />
            North Campus, University of Delhi,<br />
            University Enclave,<br />
            Delhi, 110007
          </p>

          <p className="owner-email">
            <strong>Email:</strong> <a href="mailto:mukundhp11@physics.du.ac.in">mukundhp11@physics.du.ac.in</a>
          </p>
          <p className="owner-email">
            <strong>Email:</strong> <a href="mailto:Jitendhaka01@physics.du.ac.in">Jitendhaka01@physics.du.ac.in</a>
          </p>

          <p className="owner-email">
            <strong>Email:</strong> <a href="mailto:pushkarkumar70611@physics.du.ac.in">pushkarkumar70611@physics.du.ac.in</a>
          </p>

          <p className="phone">
            <strong>Phone:</strong> <a href="tel:+918290250929">+91 82902 50929</a>
          </p>
          <p className="phone">
            <strong>Phone:</strong> <a href="tel:+918955701507">+91 89557 01507</a>
          </p>
          <p className="phone">
            <strong>Phone:</strong> <a href="tel:+919801962235">+91 98019 62235</a>
          </p>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Department of Physics & Astrophysics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;