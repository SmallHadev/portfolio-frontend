import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectWindow from "./components/ProjectWindow";
import WorkSection from "./components/WorkSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [layanans, setLayanans] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/layanans")
      .then((res) => setLayanans(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        color: "#2c3e50",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />

      {/* Section Home / Beranda */}
      <section id="beranda">
        <Hero />
      </section>

      {/* Section About / Tentang */}
      <section id="tentang">
        <AboutSection />
      </section>

      {/* Section Work / Project Window */}

      <section id="work">
        <WorkSection />
      </section>

      {/* Section Skill  */}

      <section id="skill">
        <SkillSection />
      </section>

      {/* Section Kontak / Footer */}
      <section id="kontak">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
