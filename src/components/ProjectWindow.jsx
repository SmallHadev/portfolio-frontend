import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import "./ProjectWindow.css";

export default function ProjectWindow() {
  const categories = ["Design", "Web", "Android", "Picture", "Vidiografi"];

  // State untuk Tab & Navigasi History
  const [activeTab, setActiveTab] = useState("Design");
  const [history, setHistory] = useState(["Design"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // State untuk Fitur Kanan (Search & View Layout)
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [viewMode, setViewMode] = useState("large"); // 'large' atau 'detail'

  // Fungsi saat tombol kategori ditekan
  const handleSelectTab = (cat) => {
    if (cat === activeTab) return;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(cat);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveTab(cat);
  };

  // Fungsi Tombol Back
  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setActiveTab(history[newIndex]);
    }
  };

  // Fungsi Tombol Next
  const handleNext = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setActiveTab(history[newIndex]);
    }
  };

  // Filter Data Berdasarkan Kategori & Query Search
  const filteredProjects = projectsData.filter((item) => {
    const matchCategory = item.category === activeTab;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="window-container">
      {/* HEADER NAVBAR WINDOW */}
      <div className="window-header">
        {/* Tombol Back & Next (Kiri) */}
        <div className="nav-buttons">
          <button
            className={`nav-btn ${historyIndex === 0 ? "disabled" : ""}`}
            onClick={handleBack}
            disabled={historyIndex === 0}
            title="Back"
          >
            {/* SVG Icon Back */}
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className={`nav-btn ${historyIndex >= history.length - 1 ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={historyIndex >= history.length - 1}
            title="Next"
          >
            {/* SVG Icon Next */}
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Judul Window */}
        <h3 className="window-title">Projek</h3>

        {/* Tombol Search & Setting Tampilan (Kanan) */}
        <div className="window-actions">
          {/* Input Search yang bisa di-toggle */}
          <div className={`search-box ${isSearchOpen ? "open" : ""}`}>
            <button
              className="action-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              title="Search"
            >
              {/* SVG Icon Search */}
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Cari projek..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            )}
          </div>

          {/* Tombol Switch View Mode (Large Icon vs Detail List) */}
          <button
            className="action-btn"
            onClick={() => setViewMode(viewMode === "large" ? "detail" : "large")}
            title={viewMode === "large" ? "Ubah ke Detail View" : "Ubah ke Large Icon"}
          >
            {viewMode === "large" ? (
              /* SVG Icon Detail / Menu List */
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            ) : (
              /* SVG Icon Grid Large */
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* BODY WINDOW */}
      <div className="window-body">
        {/* Sidebar Kategori */}
        <div className="window-sidebar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => handleSelectTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="window-content">
          {filteredProjects.length === 0 ? (
            <div className="no-data">Projek tidak ditemukan...</div>
          ) : viewMode === "large" ? (
            /* TAMPILAN LARGE GRID */
            <div className="projects-grid-large">
              {filteredProjects.map((project) => (
                <div key={project.id} className="card-large">
                  <div className="img-wrapper">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="card-body">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tech?.map((t, idx) => (
                        <span key={idx} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* TAMPILAN DETAIL LIST */
            <div className="projects-list-detail">
              <div className="detail-header">
                <span>Nama Projek</span>
                <span>Kategori</span>
                <span>Teknologi</span>
              </div>
              {filteredProjects.map((project) => (
                <div key={project.id} className="detail-row">
                  <div className="detail-name">
                    <img src={project.image} alt="" className="thumb-small" />
                    <div>
                      <strong>{project.title}</strong>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <span className="detail-category">{project.category}</span>
                  <div className="detail-tech">
                    {project.tech?.map((t, idx) => (
                      <span key={idx} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}