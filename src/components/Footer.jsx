// src/components/Footer.jsx
import { FaInstagram } from 'react-icons/fa';
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


        {/* Contact Info */}
        <div className="contact-info text-sm md:text-base leading-relaxed">
          <p className="font-semibold mb-1">📍 Location:</p>
          <address className="not-italic mb-4">
            Department of Physics and Astrophysics,<br />
            North Campus, University of Delhi,<br />
            University Enclave,<br />
            Delhi - 110007
          </address>

          <p className="font-semibold mb-1">📞 Contact Numbers:</p>

          <p className="phone">
            <strong>Mukund Pareek:</strong> <a href="tel:+918290250929">+91 82902 50929</a>
          </p>
          <p className="phone">
            <strong>Jiten Dhaka:</strong> <a href="tel:+918955701507">+91 89557 01507</a>
          </p>
          <p className="phone">
            <strong>Pushkar Kumar:</strong> <a href="tel:+919801962235">+91 98019 62235</a>
          </p>
        </div>

        {/* Social Links */}
        <div className="social-links mt-4">
          <p className="font-semibold mb-1">🔗 Follow Us:</p>
          <a
            href="https://instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-800 transition"
          >
            <FaInstagram size={20} />
            @your_instagram_handle
          </a>
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