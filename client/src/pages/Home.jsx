
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

<img src={profileImg} alt="Muskan Rawat" />

export default function Home() {
  return (
    <>
      {/* ================= ABOUT SECTION (FIRST) ================= */}
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
              I am Muskan Rawat, a motivated engineering student with foundational knowledge in Aerospace Engineering gained through recent coursework and practical exposure. I have a strong interest in design and enjoy solving technical problems through analytical and creative approaches.
I have hands-on experience working on team-based projects, including aircraft design activities, which strengthened my problem-solving abilities and collaborative skills. I am comfortable working in team environments and possess a natural leadership spirit that enables me to take initiative and contribute effectively to project success.
</p><p>With good communication skills and a passion for continuous learning, I am eager to apply my aerospace knowledge and design capabilities in a challenging and growth-oriented organization.
            </p>
            <p>
              My internship experience in 3D Printing and FEA strengthened my
              skills in ANSYS Workbench, Creo, and structural validation of
              engineering components.
            </p>

            <div className="about-buttons">
              <a href="/projects" className="btn">
                Explore My Work
              </a>
              <a href="/contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src="/profile.jpg" alt="Muskan Rawat" />
          </motion.div>
        </motion.div>
      </section>
      {/* ================= EDUCATION ================= */}
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
            <p>12th – Science (2022–2023)</p>
            <span>78.40%</span>
          </div>

          <div className="education-card">
            <h3>C.J.M Hampton Court</h3>
            <p>10th – Science (2020–2021)</p>
            <span>78%</span>
          </div>
        </motion.div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="certification-section">
        <h2>Certifications</h2>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>

              <motion.div
                className="cert-description"
                initial={{ height: 0, opacity: 0 }}
                animate={
                  hoveredCert === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4 }}
              >
                <p>{cert.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPLORE SECTION ================= */}
      <section className="explore-section">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Explore My Work</h2>
          <p>
            From software systems to embedded hardware projects, explore my
            technical journey and innovations.
          </p>
          <a href="/projects" className="btn">
            View Projects
          </a>
        </motion.div>
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
            Have an opportunity or collaboration idea? I'm always open to
            meaningful technical discussions.
          </p>
          <a href="/contact" className="btn">
            Get In Touch
          </a>
        </motion.div>
      </section>
    </>
  );
}
