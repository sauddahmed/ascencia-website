import "../styles/about.css";

function About() {
  return (
    <div className="about-page container">
      <section className="intro">
        <h1>About Ascencia Malta</h1>
        <p>
          At Ascencia Malta, we empower students through critical thinking, creativity, and personalized guidance to prepare them for a successful future. :contentReference[oaicite:6]{index=6}
        </p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Excellence in education and mentorship.</li>
          <li>Inclusivity and diversity in learning.</li>
          <li>Real-world engagement and job readiness.</li>
        </ul>
      </section>

      <section className="location">
        <h2>Campus in Malta</h2>
        <p>
          Located in Floriana, near Valletta, Ascencia Malta offers a strategic Mediterranean setting for students to study and thrive. :contentReference[oaicite:7]{index=7}
        </p>
      </section>
    </div>
  );
}

export default About;