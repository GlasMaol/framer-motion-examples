import React from 'react'
import { motion } from 'framer-motion'

function SlideInFromSide() {
    return (
        <section className="section-three">
            <motion.article className="article-slide-in"
            initial={{
                x: -400,
            }}
            animate={{
                x: 0,
                scale: 1,
                opacity: 1,
                boxShadow: '0 0 5px black'
            }}
            transition={{
                duration:1,
                delay: 1,
                ease: "linear"
            }}
            >
                slide in from left
            </motion.article>
        </section>
    )
}

export default SlideInFromSide
