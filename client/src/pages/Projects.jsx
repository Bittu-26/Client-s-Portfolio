import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Admission System",
    image: "/projects/admission.jpg",
    description:
      "A Python-based admission screening system using conditional logic, modular functions, and exception handling to process applicant eligibility accurately and efficiently."
  },
  {
    title: "Temperature Controlled Fan",
    image: "/projects/fan.jpg",
    description:
      "An Arduino-based embedded system that adjusts fan speed dynamically using real-time temperature readings from LM35/DHT11 sensors for improved energy efficiency."
  },
  {
    title: "Radio Controlled Plane",
    image: "/projects/rcplane.jpg",
    description:
      "A wireless Arduino-powered RC aircraft integrating motor controllers and sensors to achieve stable and responsive flight control."
  }
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <motion.div
              className="project-description"
              initial={{ height: 0, opacity: 0 }}
              animate={
                hovered === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
            >
              <p>{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
