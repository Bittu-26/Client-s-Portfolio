import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Muskan Rawat</h1>
        <p>Computer Science Engineer | 3D Printing & FEA Enthusiast</p>
      </motion.div>
    </motion.section>
  )
}
