import { useState, useEffect } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("beranda");
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // 1. Logika Sembunyi / Muncul Navbar saat Scroll
      if (currentScrollY < 80) {
        setIsVisible(false);
      } else if (scrollDifference > 40) {
        setIsVisible(false);
      } else if (scrollDifference < -3) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // 2. Logika ScrollSpy (Deteksi Otomatis Halaman Aktif)
      const sections = ["beranda", "tentang", "work", "skill", "kontak"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`navbar-wrapper ${
        isVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <nav className="nav-container">
        <button
          className={`nav-item ${activeTab === "beranda" ? "active" : ""}`}
          onClick={() => handleNavClick("beranda")}
        >
          Home
        </button>

        <button
          className={`nav-item ${activeTab === "tentang" ? "active" : ""}`}
          onClick={() => handleNavClick("tentang")}
        >
          About
        </button>

        <button
          className={`nav-item ${activeTab === "work" ? "active" : ""}`}
          onClick={() => handleNavClick("work")}
        >
          Work
        </button>
        
        <button
          className={`nav-item ${activeTab === "skill" ? "active" : ""}`}
          onClick={() => handleNavClick("skill")}
        >
          Skill
        </button>

        <button
          className={`nav-item ${activeTab === "kontak" ? "active" : ""}`}
          onClick={() => handleNavClick("kontak")}
        >
          Kontak
        </button>
      </nav>
    </div>
  );
}

export default Navbar;