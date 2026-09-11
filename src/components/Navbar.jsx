import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("beranda");
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ==========================================
  // REF UNTUK MENGECEK KLIK DI LUAR NAVBAR
  // ==========================================

  const navbarRef = useRef(null);


  // ==========================================
  // NAVBAR SCROLL + SCROLL SPY
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference =
        currentScrollY - lastScrollY;


      // ========================================
      // NAVBAR SCROLL
      // ========================================

      if (currentScrollY < 80) {
        setIsVisible(false);
      }

      else if (scrollDifference > 40) {
        setIsVisible(false);
      }

      else if (scrollDifference < -3) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);


      // ========================================
      // SCROLL SPY
      // ========================================

      const sections = [
        "beranda",
        "tentang",
        "work",
        "skill",
        "kontak",
      ];

      const scrollPosition =
        window.scrollY + 200;


      for (const sectionId of sections) {

        const element =
          document.getElementById(sectionId);

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


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, [lastScrollY]);


  // ==========================================
  // KLIK DI LUAR NAVBAR
  // ==========================================

  useEffect(() => {

    const handleClickOutside = (event) => {

      // Jika menu sedang terbuka
      // dan klik berada di luar navbar
      if (
        isMobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(
          event.target
        )
      ) {

        setIsMobileMenuOpen(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, [isMobileMenuOpen]);


  // ==========================================
  // NAVIGASI
  // ==========================================

  const handleNavClick = (id) => {

    setActiveTab(id);

    // Setelah memilih menu,
    // navbar mobile otomatis ditutup
    setIsMobileMenuOpen(false);


    const element =
      document.getElementById(id);


    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
      });

    }

  };


  // ==========================================
  // LABEL ACTIVE MOBILE
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
      ref={navbarRef}
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

        {/* HOME */}

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


        {/* ABOUT */}

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


        {/* WORK */}

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


        {/* SKILL */}

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


        {/* CONTACT */}

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

          {/* 
            TANDA PANAH / V DIHAPUS.
            SEKARANG HANYA MENAMPILKAN
            NAMA MENU YANG AKTIF.
          */}

          <span>
            {getActiveLabel()}
          </span>

        </button>


        {/* ======================================
            MOBILE MENU
            ====================================== */}

        {isMobileMenuOpen && (

          <div className="mobile-menu">


            {/* ==================================
                HOME
                ================================== */}

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

              <span>
                Home
              </span>

            </button>


            {/* ==================================
                ABOUT
                ================================== */}

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

              <span>
                About
              </span>

            </button>


            {/* ==================================
                WORK
                ================================== */}

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

              <span>
                Work
              </span>

            </button>


            {/* ==================================
                SKILL
                ================================== */}

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

              <span>
                Skill
              </span>

            </button>


            {/* ==================================
                CONTACT
                ================================== */}

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

              <span>
                Contact
              </span>

            </button>


          </div>

        )}

      </div>

    </div>

  );
}

export default Navbar;