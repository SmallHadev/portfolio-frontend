import BatikPattern from "./BatikPattern";
import "./BatikPattern.css";
import "./AboutSection.css";
import profileImg from "../assets/aboutprofil.png";

function AboutSection() {
  const handleContactClick = () => {
    const contactElement = document.getElementById("kontak");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tentang" className="about-wrapper">
      {/* Panggil BatikPattern tanpa props tambahan */}
      <BatikPattern />

      {/* Card Utama Tengah */}
      <div className="about-card-container">
        <div className="about-content-left">
          <h1 className="about-name">Achmad Thoricul Hadi</h1>
          <h4 className="about-subtitle">
            Bachelor Informatics Engineering - Univ Dr.Soetomo
          </h4>

          <p className="about-description">
            Hi, I'm Achmad, a digital creator passionate about bridging
            aesthetics and code. I bridge graphic design, UI/UX, web
            development, and game development, crafting clean visual
            identities, intuitive interfaces, functional websites, and
            interactive scenes using Canva, CorelDraw, VSCode, Figma, and Godot.
            Open for collaborations and new opportunities!
          </p>

          <button className="about-contact-btn" onClick={handleContactClick}>
            Contact
          </button>

          <p className="about-slogan">I design. I build. I create.</p>
        </div>

        <div className="about-content-right">
          <div className="profile-img-wrapper">
            <img src={profileImg} alt="Achmad Thoricul Hadi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;