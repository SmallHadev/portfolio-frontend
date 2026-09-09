import React, { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      // Sesuaikan URL endpoint ini dengan domain/port server Laravel kamu
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Pesan berhasil terkirim! Terima kasih.");
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        setStatusMessage("Gagal mengirim pesan. Periksa kembali inputan Anda.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Terjadi kesalahan jaringan/server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="contact-section">
      <div className="contact-container">
        {/* SISI KIRI */}
        <div className="contact-left">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-desc">
            Have a project, opportunity, or idea in mind? I'd love to hear
            about it. Whether it's a design project, digital experience, or
            something that needs to be built, feel free to reach out. Let's
            create something meaningful together.
          </p>
        </div>

        {/* SISI KANAN */}
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Enter Your Name...."
                required
              />
            </div>

            <div className="form-group">
              <label>Gmail</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Enter Your Email..."
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Contact"}
            </button>

            {statusMessage && <p className="status-msg">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}