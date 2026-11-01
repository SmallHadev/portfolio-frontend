import React from "react";
import ProjectWindow from "./ProjectWindow";
import "./WorkSection.css";

export default function WorkSection() {
  return (
    <section id="work" className="work-section-container">
      <div className="work-content-wrapper">
        {/* SISI KIRI: TULISAN DESKRIPSI & TOMBOL */}
        <div className="work-text-side">
          <span className="small-heading">The</span>
          <h2 className="main-heading">Project</h2>
          <p className="description-text">
            A collection of projects I developed, managed, and conducted
            throughout my university studies.
          </p>

          {/* Tombol Download PDF Portofolio */}
          <a
            href="/Porto-Creative-achmad.pdf"
            download="Porto-Creative-achmad.pdf"
            className="btn-full-project"
          >
            Get a Full Project
          </a>
        </div>

        {/* SISI KANAN: WINDOW PROJEK */}
        <div className="work-window-side">
          <ProjectWindow />
        </div>
      </div>
    </section>
  );
}
