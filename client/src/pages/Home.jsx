import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg"; // Add your image here

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Muskan Rawat</h1>
          <p>
            Computer Science Engineer passionate about 3D Printing,
            Additive Manufacturing & Intelligent Systems.
          </p>
          <a href="/projects" className="btn">
            Explore My Work
          </a>
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION */}
      <section className="about">
        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={profileImg} alt="Muskan Rawat" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>
            I am Muskan Rawat, a motivated engineering student with foundational knowledge in Aerospace Engineering gained through recent coursework and practical exposure. I have a strong interest in design and enjoy solving technical problems through analytical and creative approaches.
I have hands-on experience working on team-based projects, including aircraft design activities, which strengthened my problem-solving abilities and collaborative skills. I am comfortable working in team environments and possess a natural leadership spirit that enables me to take initiative and contribute effectively to project success.
With good communication skills and a passion for continuous learning, I am eager to apply my aerospace knowledge and design capabilities in a challenging and growth-oriented organization.
          </p>
          <p>
            During my internship in 3D Printing and FEA, I worked on
            aircraft brackets, drone frames, and bio-implant analysis
            using ANSYS Workbench.
          </p>

          <div className="about-highlights">
            <div>
              <h4>Languages</h4>
              <p>C++, Python, Java, SQL</p>
            </div>
            <div>
              <h4>Technologies</h4>
              <p>Arduino, ANSYS, Creo, AutoCAD</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
