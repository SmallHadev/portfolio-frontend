import React from "react";
import "./SkillSection.css";

export default function SkillSection() {
  const skillCategories = [
    {
      title: "Desain",
      tags: [
        "UML",
        "Wireframe",
        "Ui Design",
        "User Flow",
        "Layout Design",
        "Digital Branding",
        "Prototyping",
      ],
    },
    {
      title: "Development",
      tags: [
        "React",
        "HTML/CSS",
        "GD Script",
        "Java Script",
        "Jetpack Compose",
        "Laravel",
      ],
    },
    {
      title: "Creative Media",
      tags: [
        "UML",
        "Wireframe",
        "Prototyping",
        "Graphic Design",
        "Visual Content",
        "Digital Branding",
      ],
    },
  ];

  const tools = [
    { name: "Draw.io", icon: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "CorelDraw", icon: "https://cdn.simpleicons.org/coreldraw/00529B" },
    { name: "Canva", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    
  ];

  const marqueeText = "i design i build i create • ";

  return (
    <section id="skill" className="skill-section">
      {/* MARQUEE ATAS */}
      <div className="marquee-banner marquee-top">
        <div className="marquee-track">
          <span>{marqueeText.repeat(8)}</span>
          <span>{marqueeText.repeat(8)}</span>
        </div>
      </div>

      <h2 className="skill-title">Skill</h2>

      <div className="skill-container">
        {/* SISI KIRI: SKILL TAGS */}
        <div className="skill-left">
          {skillCategories.map((cat, catIdx) => (
            <div key={catIdx} className="skill-group">
              <h3>{cat.title}</h3>
              <div className="tags-container">
                {cat.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`skill-tag float-anim-${((catIdx + tagIdx) % 4) + 1}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SISI KANAN: TOOLS */}
        <div className="skill-right">
          <h3 className="tools-title">TOOLS</h3>
          <div className="tools-cloud">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`tool-item float-anim-${(index % 4) + 1}`}
              >
                <img src={tool.icon} alt={tool.name} title={tool.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE BAWAH */}
      <div className="marquee-banner marquee-bottom">
        <div className="marquee-track">
          <span>{marqueeText.repeat(8)}</span>
          <span>{marqueeText.repeat(8)}</span>
        </div>
      </div>
    </section>
  );
}