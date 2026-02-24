import { motion } from 'framer-motion'

const projects = [
  { title: "Admission System", desc: "Python-based screening system." },
  { title: "Temperature Controlled Fan", desc: "Arduino automated fan." },
  { title: "Radio Controlled Plane", desc: "Arduino RC aircraft." }
]

export default function Projects() {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
