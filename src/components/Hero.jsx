import "./Hero.css";

import heroImg from "../assets/foto1.png";
import emailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";
import igIcon from "../assets/Instagram.png";

function Hero() {
  return (
    <section
      id="beranda"
      className="hero-wrapper"
    >

      {/* ======================================
          JUDUL + PORTFOLIO
          ====================================== */}

      <div className="portfolio-title-container">

        <span className="top-title">
          Digital Creative & Developer
        </span>

        <h1>
          portfolio

          <span className="year-tag">
            2026
          </span>
        </h1>

      </div>

      {/* ======================================
          FOTO HERO
          ====================================== */}

      <div className="gambar-container">

        <img
          src={heroImg}
          alt="Hero Floating"
        />

      </div>

      {/* ======================================
          BOTTOM SECTION
          ====================================== */}

      <div className="bottom-row-wrapper">

        {/* ====================================
            DESKRIPSI
            ==================================== */}

        <div className="hero-text-container">

          <div className="bottom-desc-box">

            <h3 className="bottom-title">
              Digital Creative & Developer
            </h3>

            <p className="bottom-desc">
              I design, build, and create
              digital experiences through
              design, technology, and visual
              media.
            </p>

          </div>

        </div>

        {/* ====================================
            SOCIAL MEDIA
            ==================================== */}

        <div className="social-media-container">

          <a
            href="mailto:achmadthoricul@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="social-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/achmad-thoricul-hadi-ab3600433/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="social-icon"
            />
          </a>

          <a
            href="https://github.com/SmallHadev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="social-icon"
            />
          </a>

          <a
            href="https://www.instagram.com/ach.thoricul/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={igIcon}
              alt="Instagram"
              className="social-icon"
            />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;