import "../styles/hero.css";
import heroImg from "../assets/heroSection.jpg";

function HeroSection() {
  return (
    <section 
  className="hero-section"
  style={{ backgroundImage: `url(${heroImg})` }}
>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Ascencia Malta</h1>
          <p>
            We are eager to give you the best education. Discover our
            courses designed to prepare you for success in a global world.
          </p>
          <a href="#courses">
            <button className="hero-btn">Discover Our Courses</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;