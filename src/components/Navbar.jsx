import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("beranda");
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // ==========================================
      // NAVBAR SCROLL
      // ==========================================

      if (currentScrollY < 80) {
        setIsVisible(false);
      } else if (scrollDifference > 40) {
        setIsVisible(false);
      } else if (scrollDifference < -3) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // ==========================================
      // SCROLL SPY
      // ==========================================

      const sections = [
        "beranda",
        "tentang",
        "work",
        "skill",
        "kontak",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ==========================================
  // ACTIVE LABEL
  // ==========================================

  const getActiveLabel = () => {
    switch (activeTab) {
      case "beranda":
        return "Home";

      case "tentang":
        return "About";

      case "work":
        return "Work";

      case "skill":
        return "Skill";

      case "kontak":
        return "Contact";

      default:
        return "Home";
    }
  };

  return (
    <div
      className={`navbar-wrapper ${
        isVisible
          ? "navbar-visible"
          : "navbar-hidden"
      }`}
    >

      {/* ========================================
          DESKTOP NAVBAR
          ======================================== */}

      <nav className="desktop-nav-container">

        <button
          className={`nav-item ${
            activeTab === "beranda"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavClick("beranda")
          }
        >
          Home
        </button>

        <button
          className={`nav-item ${
            activeTab === "tentang"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavClick("tentang")
          }
        >
          About
        </button>

        <button
          className={`nav-item ${
            activeTab === "work"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavClick("work")
          }
        >
          Work
        </button>

        <button
          className={`nav-item ${
            activeTab === "skill"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavClick("skill")
          }
        >
          Skill
        </button>

        <button
          className={`nav-item ${
            activeTab === "kontak"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavClick("kontak")
          }
        >
          Contact
        </button>

      </nav>


      {/* ========================================
          MOBILE NAVBAR
          ======================================== */}

      <div className="mobile-navbar">

        {/* ======================================
            MOBILE BUTTON
            ====================================== */}

        <button
          className={`mobile-nav-button ${
            isMobileMenuOpen
              ? "menu-open"
              : ""
          }`}
          onClick={() =>
            setIsMobileMenuOpen(
              !isMobileMenuOpen
            )
          }
        >

          <span>
            {getActiveLabel()}
          </span>

          <span className="mobile-arrow">
            {isMobileMenuOpen ? "‹" : "⌄"}
          </span>

        </button>


        {/* ======================================
            MOBILE MENU
            ====================================== */}

        {isMobileMenuOpen && (

          <div className="mobile-menu">

            {/* HOME */}

            <button
              className={`mobile-menu-item ${
                activeTab === "beranda"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick("beranda")
              }
            >
              <span>Home</span>

              {activeTab === "beranda" && (
                <span className="active-arrow">
                  ‹
                </span>
              )}
            </button>


            {/* ABOUT */}

            <button
              className={`mobile-menu-item ${
                activeTab === "tentang"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick("tentang")
              }
            >
              <span>About</span>

              {activeTab === "tentang" && (
                <span className="active-arrow">
                  ‹
                </span>
              )}
            </button>


            {/* WORK */}

            <button
              className={`mobile-menu-item ${
                activeTab === "work"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick("work")
              }
            >
              <span>Work</span>

              {activeTab === "work" && (
                <span className="active-arrow">
                  ‹
                </span>
              )}
            </button>


            {/* SKILL */}

            <button
              className={`mobile-menu-item ${
                activeTab === "skill"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick("skill")
              }
            >
              <span>Skill</span>

              {activeTab === "skill" && (
                <span className="active-arrow">
                  ‹
                </span>
              )}
            </button>


            {/* CONTACT */}

            <button
              className={`mobile-menu-item ${
                activeTab === "kontak"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick("kontak")
              }
            >
              <span>Contact</span>

              {activeTab === "kontak" && (
                <span className="active-arrow">
                  ‹
                </span>
              )}
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Navbar;