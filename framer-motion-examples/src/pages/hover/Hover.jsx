import React from 'react';
import { motion } from 'framer-motion'

function Hover() {
  return (
    <section className="section-two">
        <motion.button className="button-hover"
          whileHover={{
            scale: 1.2
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          Hover
        </motion.button>
    </section>
  )
}

export default Hover
