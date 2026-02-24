import React from "react";
import aboutImg from "../assets/no.png";
import { motion } from "motion/react";


// 🔥 Common Fade Up Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// 🔥 Stagger Container (for education items)
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="bg-[#0e0c1e] text-white">

      {/* ===== Title ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-16"
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold underline mb-12">
          About Me
        </h2>
      </motion.div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block lg:hidden container mx-auto px-6 pb-16">

        {/* Image */}
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          src={aboutImg}
          alt="Gopinath"
          className="mx-auto w-[300px] mb-10 drop-shadow-[0_0_25px_#9333ea]"
        />

        {/* About Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-400 text-base leading-7 text-justify mb-14"
        >
          Hi, I’m <span className="text-white font-semibold">Gopinath K</span>,
          a Computer Science student and aspiring{" "}
          <span className="text-purple-500 font-semibold">
            MERN Stack Developer
          </span>
          . I build responsive, scalable, and modern web applications with
          clean code and performance-focused architecture.
        </motion.p>

        {/* ===== Education ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Education
          </h2>

          <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-5">
            <p className="text-gray-400 text-sm">2022 – 2026</p>
            <h3 className="text-lg font-semibold">
              B.E. Computer Science Engineering
            </h3>
            <p className="text-gray-400">
              Dhirajlal Gandhi College of Technology
            </p>
            <p className="mt-2 text-purple-400 font-semibold">
              CGPA: 7.6 / 10
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-5">
            <p className="text-gray-400 text-sm">2021 – 2022</p>
            <h3 className="text-lg font-semibold">
              Higher Secondary (HSC)
            </h3>
            <p className="text-gray-400">
              Sri Gayathri Higher Secondary School
            </p>
            <p className="mt-2 text-purple-400 font-semibold">
              Percentage: 73%
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-5">
            <p className="text-gray-400 text-sm">2019 – 2020</p>
            <h3 className="text-lg font-semibold">
              Secondary School (SSLC)
            </h3>
            <p className="text-gray-400">
              Sri Gayathri Matriculation School
            </p>
            <p className="mt-2 text-purple-400 font-semibold">
              Percentage: 69%
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:flex">

        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-1/2 h-screen sticky top-0 flex items-center justify-center"
        >
          <div className="text-center">
            <img
              src={aboutImg}
              alt="Gopinath"
              className="w-[450px] transition-all duration-500 
              drop-shadow-[0_0_30px_#9333ea] 
              hover:scale-105 
              hover:drop-shadow-[0_0_50px_#a855f7]"
            />

            <h2 className="text-4xl font-bold mt-8">
              FULL STACK{" "}
              <span className="text-purple-500">MERN DEV</span>
            </h2>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 px-12 py-24 space-y-20">

          {/* About Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 text-lg leading-8 space-y-6 text-justify"
          >
            <p>
              I am passionate about building scalable full-stack web
              applications using MongoDB, Express.js, React.js, and Node.js.
            </p>

            <p>
              I focus on creating responsive UI, optimized backend systems,
              and seamless user experiences.
            </p>

            <p>
              My goal is to grow into a skilled software engineer and
              contribute to impactful projects.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold mb-6">
              Education
            </h2>

            <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-6">
              <p className="text-gray-400">2022 – 2026</p>
              <h3 className="text-xl font-semibold">
                B.E. Computer Science Engineering
              </h3>
              <p className="text-gray-400">
                Dhirajlal Gandhi College of Technology
              </p>
              <p className="mt-3 text-purple-400 font-semibold text-lg">
                CGPA: 7.6 / 10
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-6">
              <p className="text-gray-400">2021 – 2022</p>
              <h3 className="text-xl font-semibold">
                Higher Secondary (HSC)
              </h3>
              <p className="text-gray-400">
                Sri Gayathri Higher Secondary School
              </p>
              <p className="mt-3 text-purple-400 font-semibold text-lg">
                Percentage: 73%
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="border-l-2 border-purple-500 pl-6">
              <p className="text-gray-400">2019 – 2020</p>
              <h3 className="text-xl font-semibold">
                Secondary School (SSLC)
              </h3>
              <p className="text-gray-400">
                Sri Gayathri Matriculation School
              </p>
              <p className="mt-3 text-purple-400 font-semibold text-lg">
                Percentage: 69%
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default About;