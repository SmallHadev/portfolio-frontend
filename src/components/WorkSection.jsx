import React from "react";
import ProjectWindow from "./ProjectWindow";
import "./WorkSection.css";

export default function WorkSection() {
  return (
    <section id="work" className="work-section-container">
      <div className="work-content-wrapper">
        
        {/* SISI KIRI: TULISAN DESKRIPSI */}
        <div className="work-text-side">
          <span className="small-heading">The</span>
          <h2 className="main-heading">Project</h2>
          <p className="description-text">
            A collection of projects I developed, managed, and conducted throughout my university studies.
          </p>
        </div>

        {/* SISI KANAN: WINDOW PROJEK */}
        <div className="work-window-side">
          <ProjectWindow />
        </div>

      </div>
    </section>
  );
}