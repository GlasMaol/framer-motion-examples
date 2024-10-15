import React from 'react'
import { motion } from 'framer-motion';

function FadeIn() {
    return (
        <section className="section-one">
            <motion.figure className="fig-one"
                initial={{
                    opacity: 0, scale: 0.5,
                    boxShadow: '0 0 0px white'
                }}
                animate={{
                    x:150,
                    scale: 1,
                    opacity: 1,
                    boxShadow: '0 0 15px black'
                }}
                transition={{
                    duration:1,
                    delay: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5,
                }}
                >
            </motion.figure>
        </section>
    )
}

export default FadeIn
