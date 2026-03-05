import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h3>Ascencia Malta</h3>
          <p>
            Empowering future leaders through academic excellence,
            innovation, and global perspective.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Programs</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>Floriana, Malta</p>
          <p>Email: info@ascencia.mt</p>
          <p>Phone: +356 2034 1784</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ascencia Malta Business School. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;