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

        <div className="flex flex-col md:flex-row justify-between gap-10 py-10 px-4 md:px-20 bg-black text-white">
          {/* Left - Google Map */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Event Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.242414538388!2d77.21184859707391!3d28.68813876685335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9471e3fb21%3A0x667fc1ab94188ca2!2sDepartment%20of%20Physics%20and%20Astrophysics!5e1!3m2!1sen!2sin!4v1743925491390!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Right - Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Contact Information</h2>

            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-teal-700 rounded-md">
                📍
              </div>
              <p>
                Department of Physics and Astrophysics<br />
                North Campus, University of Delhi,<br />
                University Enclave, Delhi - 110007
              </p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-teal-700 rounded-md">
                📞
              </div>
              <div>
                <a href="tel:+918290250929" className="block hover:underline">+91 82902 50929</a>
                <a href="tel:+918955701507" className="block hover:underline">+91 89557 01507</a>
                <a href="tel:+919801962235" className="block hover:underline">+91 98019 62235</a>
              </div>
            </div>

            {/* Socials */}
            <h2 className="text-xl font-semibold text-teal-400 mt-6 mb-2">Connect With Us</h2>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/the.sciencecircus?igsh=OGZjYXc0cHZyYm5m&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 bg-teal-700 rounded-md text-xl"><Instagram /></a>
            </div>
          </div>
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