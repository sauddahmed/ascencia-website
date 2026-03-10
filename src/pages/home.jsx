import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import "../styles/home.css";


import directorImg from "../assets/director.jpg";
import campus1Img from "../assets/campus1.jpg";
import campus2Img from "../assets/campus2.jpg";
import news1Img from "../assets/news1.jpg";
import news2Img from "../assets/news2.jpg";
import news3Img from "../assets/news3.jpg";
import partner1Img from "../assets/partner1.png";
import partner2Img from "../assets/partner2.png";
import partner3Img from "../assets/partner3.png";
import partner4Img from "../assets/partner4.png";
import partner5Img from "../assets/partner5.png";
import partner6Img from "../assets/partner6.png";

function Home() {
  const [campus, setCampus] = useState(1);

  const partners = [
    partner1Img,
    partner2Img,
    partner3Img,
    partner4Img,
    partner5Img,
    partner6Img,
  ];

  return (
    <>
      <HeroSection />

      {/* Welcome Intro Section */}
      <section className="welcome-intro section">
        <div className="container text-center">
          <h2>
            Welcome to <span className="hero-red">Ascencia </span>Malta
          </h2>
          <p>
            We are eager to give you the best education through student-centred
            academic programmes designed to prepare graduates for success in a
            dynamic global world. Located in the heart of the Mediterranean,
            Ascencia Malta is committed to excellence and professional growth.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section id="courses" className="programmes section">
        <div className="container">
          <h2 className="text-center">Find the best programme for yourself</h2>
          <p className="text-center">
            Because each training course corresponds to a personal ambition, all
            our students receive individual attention. The success of each
            student is our priority.
          </p>

          <div className="cards-grid">
            {[
              "POSTGRADUATE PROGRAMMES",
              "MBA DEGREES",
              "DBA DEGREES",
              "MASTERS DEGREES",
            ].map((title, i) => (
              <div className="card" key={i}>
                <div>
                  <span className="card-subtitle">COURSES</span>
                  <h3>{title}</h3>
                </div>
                <button className="card-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="director-intro section">
        <div className="container director-container">
          <div className="director-text">
            <h2>
              Welcome to <span className="hero-red">Ascencia </span>
              Malta Business School!
            </h2>

            <p>
              As the Director of Ascencia Malta Business and English Language
              School, it is an honour and a pleasure to welcome you dear
              students and faculty to our beautiful campus in Floriana, Malta.
            </p>

            <p>
              I am honoured to spearhead a school that is built on a solid
              foundation of academic integrity and excellence paired with an
              inherent commitment to learn, teach, innovate and champion
              knowledge and business success. Our academic teams have been
              tasked with the responsibility of mentoring some of the brightest
              minds of this generation.
            </p>

            <p>
              Watching our students evolve into trailblazers with achievements
              in both professional and personal spheres fuels our commitment to
              offering practical, and business-relevant education. Our mission
              is to ensure that after completing their studies with us, our
              students are able to step right into the world of work and excel.
            </p>

            <p>
              We understand that education is a vital tool in helping us
              discover our paths, and so I invite you all to join us at the
              heart of the Mediterranean to start your journey of
              self-discovery.
            </p>

            <p className="director-signoff">
              <strong>Your career starts here!</strong>
            </p>
          </div>

          <div className="director-image">
            <img
              src={directorImg}
              alt="Dr. Tess Giordmaina - Director of Ascencia Malta"
            />

            <div className="director-caption">
              <h4>Dr. Tess Giordmaina</h4>
              <p>Director of Ascencia Malta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus & Location */}
      <section className="campus section">
        <div className="container campus-container">
          <div className="campus-left">
            <h2>{campus === 1 ? "Our Campus" : "Our Second Campus"}</h2>
            <p>
              {campus === 1
                ? "Ascencia Malta is located in Floriana, right on the doorstep of Valletta — a historic and vibrant city in Malta with cultural richness and global connectivity."
                : "Our second campus is designed for innovation and collaboration, providing state-of-the-art facilities to nurture global leaders."}
            </p>

            <div className="campus-buttons">
              <button
                className={campus === 1 ? "active" : ""}
                onClick={() => setCampus(1)}
              >
                Campus 1
              </button>
              <button
                className={campus === 2 ? "active" : ""}
                onClick={() => setCampus(2)}
              >
                Campus 2
              </button>
            </div>
          </div>

          <div className="campus-right">
            <div className="campus-caption">
              <h4>{campus === 1 ? "Floriana Campus" : "Innovation Campus"}</h4>
              <p>
                {campus === 1
                  ? "Located in the heart of Floriana, surrounded by history and culture."
                  : "A modern campus designed for collaboration and cutting-edge research."}
              </p>
            </div>

            <img
              key={campus}
              src={campus === 1 ? campus1Img : campus2Img}
              alt="Ascencia Malta Campus"
              className="campus-img"
            />
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="partners section">
        <div className="container text-center">
          <h2>Our Partner Institutions</h2>
          <p className="partners-subtitle">
            We collaborate with leading international universities and academic
            institutions to deliver globally recognised education.
          </p>

          <div className="partners-grid">
            {partners.map((img, i) => (
              <div className="partner-card" key={i}>
                <img src={img} alt={`Partner ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="news section">
        <div className="container">
          <h2 className="text-center">Latest News & Events</h2>
          <br />

          <div className="cards-grid">
            <div className="news-card">
              <img src={news1Img} alt="World Cancer Day" />
              <div className="news-content">
                <p className="news-date">02/02/2026</p>
                <h4>World Cancer Day – Cancer Awareness at Ascencia Malta</h4>
                <button className="news-btn">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <img src={news2Img} alt="Historic Achievement" />
              <div className="news-content">
                <p className="news-date">20/09/2025</p>
                <h4>A New National Benchmark and Historic Achievement</h4>
                <button className="news-btn">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <img src={news3Img} alt="Showcasing Malta" />
              <div className="news-content">
                <p className="news-date">20/09/2025</p>
                <h4>Showcasing Malta as a Premier Study Destination</h4>
                <button className="news-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-us section">
        <div className="container text-center">
          <h2>Join Our International Community</h2>
          <p>
            The registration and admission procedure is simple and free. Feel
            free to contact us for any questions or guidance.
          </p>
          <button className="primary-btn">Get In Touch</button>
        </div>
      </section>
    </>
  );
}

export default Home;