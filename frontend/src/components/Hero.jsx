import React from 'react'
import avatar from "../assets/hero2.png"
import { motion } from "motion/react";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='text-white py-10'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8 md:mb-0 md:mr-8 flex justify-center relative z-0"
            >
                <div className="relative w-fit group z-0">

                    <img
                        src={avatar}
                        alt="Avatar"
                        className="mx-auto w-[280px] md:w-[380px] lg:w-[450px] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_#9333ea]"
                    />

                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5
                }}
                className='container mx-auto text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1,
                        duration: 0.5
                    }}
                    className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>"Hi, I'm Gopinath K"
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.1,
                            duration: 0.5
                        }}
                        className='text-purple-500 text-3xl'>A Passionate MERN Stack Developer & Web Enthusiast</motion.span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className='text-gray-400 text-lg mb-8'>I am a passionate Web Developer skilled in MERN stack (MongoDB, Express, React, Node.js). <br /> I enjoy solving problems, creating scalable web applications, and continuously learning new technologies</motion.p>

                <div className='flex justify-center space-x-4 mb-10'>
                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className='bg-purple-500 text-white px-6 py-3 rounded-full'>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >Hire ME
                        </Link>
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className='text-white border border-white px-6 py-3 rounded-full'>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >My Story
                        </Link>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero