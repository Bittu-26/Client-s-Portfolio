import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import cert3D from "../assets/certificates/3dprinting.jpg";
import certJava from "../assets/certificates/java.jpg";

const certificates = [
  {
    title: "Product Engineering using 3D Printing & FEA",
    image: cert3D,
    description:
      "Focused on additive manufacturing, 3D printing processes, and Finite Element Analysis using ANSYS for structural validation and design optimization."
  },
  {
    title: "Java Object Oriented Programming",
    image: certJava,
    description:
      "Comprehensive training in Object-Oriented Programming concepts including inheritance, abstraction, polymorphism, and encapsulation using Java."
  }
];

export default function Home() {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [theme, setTheme] = useState("light");

  /* ================= SYSTEM THEME DEFAULT ================= */
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* ================= THEME TOGGLE ================= */}
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <motion.div
          className="about-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="about-text"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>About Me</h2>

            <p>
              I am Muskan Rawat, a motivated engineering student with
              foundational knowledge in Aerospace Engineering gained through
              coursework and practical exposure.
            </p>

            <p>
              I have hands-on experience working on aircraft design projects,
              strengthening my analytical thinking, teamwork, and leadership abilities.
            </p>

            <p>
              My internship in 3D Printing and FEA enhanced my expertise in
              ANSYS Workbench, Creo, and structural validation.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={profileImg} alt="Muskan Rawat" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section className="education-section">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Education</h2>

          <div className="education-card">
            <h3>Lovely Professional University</h3>
            <p>B.Tech in Computer Science & Engineering (2023–2027)</p>
            <span>CGPA: 6.21</span>
          </div>

          <div className="education-card">
            <h3>C.J.M Hampton Court</h3>
            <p>12th – Science</p>
            <span>78.40%</span>
          </div>

          <div className="education-card">
            <h3>C.J.M Hampton Court</h3>
            <p>10th – Science</p>
            <span>78%</span>
          </div>
        </motion.div>
      </section>

      {/* ================= CERTIFICATION SECTION ================= */}
      <section className="certification-section">
        <h2>Certifications</h2>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => setSelectedCert(cert.image)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>

              <motion.div
                className="cert-description"
                animate={{
                  opacity: hoveredCert === index ? 1 : 0,
                  y: hoveredCert === index ? 0 : -10
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{cert.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="contact-cta">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Let's Build Something Together</h2>

          <p>
            Have an opportunity or collaboration idea? I'm open to meaningful technical discussions.
          </p>

          <a href="/contact" className="btn">
            Get In Touch
          </a>
        </motion.div>
      </section>

      {/* ================= MODAL PREVIEW ================= */}
      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert} alt="Certificate Preview" />
        </div>
      )}
    </>
  );
}
