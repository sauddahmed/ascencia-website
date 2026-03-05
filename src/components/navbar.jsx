import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // navbar transparent only at very top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${!scrolled ? "transparent" : ""}`}>
      <div className="nav-container">

        <div className="logo">
          <Link to="/">Ascencia Malta</Link>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Academics Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
          >
            <span>Academics</span>
            <div className={`dropdown-menu ${academicsOpen ? "open" : ""}`}>
              <Link to="/programmes" onClick={() => setMenuOpen(false)}>Programs & Courses</Link>
              <Link to="/departments" onClick={() => setMenuOpen(false)}>Departments</Link>
              <Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link>
              <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
              <Link to="/library" onClick={() => setMenuOpen(false)}>Library</Link>
            </div>
          </div>

          {/* Admissions Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setAdmissionsOpen(true)}
            onMouseLeave={() => setAdmissionsOpen(false)}
          >
            <span>Admissions</span>
            <div className={`dropdown-menu ${admissionsOpen ? "open" : ""}`}>
              <Link to="/apply" onClick={() => setMenuOpen(false)}>Apply Now</Link>
              <Link to="/requirements" onClick={() => setMenuOpen(false)}>Entry Requirements</Link>
              <Link to="/scholarships" onClick={() => setMenuOpen(false)}>Scholarships & Financial Aid</Link>
              <Link to="/tuition" onClick={() => setMenuOpen(false)}>Tuition & Fees</Link>
              <Link to="/visit" onClick={() => setMenuOpen(false)}>Campus Visit</Link>
            </div>
          </div>

          <Link to="/student-life" onClick={() => setMenuOpen(false)}>Student Life</Link>
          <a href="#news" onClick={() => setMenuOpen(false)}>News & Events</a>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;