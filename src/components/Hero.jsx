import "./Hero.css";
import heroImg from "../assets/foto1.png";
import emailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";
import igIcon from "../assets/Instagram.png";

function Hero() {
  return (
    <section id="beranda" className="hero-wrapper">
      
      {/* CLASS 2: Portfolio Title Container (Teks Atas, Portfolio & 2026) */}
      <div className="portfolio-title-container">
        {/* Teks ditempatkan disini agar sejajar lurus diatas huruf 'p' */}
        <span className="top-title">Digital Creative & Developer</span>
        
        <h1>
          portfolio
          <span className="year-tag">2026</span>
        </h1>
      </div>

      {/* CLASS 3: Gambar Container */}
      <div className="gambar-container">
        <img src={heroImg} alt="Hero Floating" />
      </div>

      {/* Baris Bawah: Deskripsi Kiri & Sosmed Kanan */}
      <div className="bottom-row-wrapper">
        
        {/* CLASS 1 (Bagian Bawah): Deskripsi Teks */}
        <div className="hero-text-container">
          <div className="bottom-desc-box">
            <h3 className="bottom-title">Digital Creative & Developer</h3>
            <p className="bottom-desc">
              I design, build, and create digital experiences through design,
              technology, and visual media.
            </p>
          </div>
        </div>

        {/* CLASS 4: Social Media Container */}
        <div className="social-media-container">
          <a href="mailto:email@gmail.com" target="_blank" rel="noreferrer">
            <img src={emailIcon} alt="Email" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={igIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;