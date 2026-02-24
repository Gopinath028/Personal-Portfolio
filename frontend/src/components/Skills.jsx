import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";


// 🔥 SAME animation used in About
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillsData = [
  {
    id: 1,
    number: "01",
    title: "Frontend",
    subtitle: "Engineering",
    skills: [
      { name: "React.js", icon: <FaReact className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Backend",
    subtitle: "Architecture",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "REST APIs", icon: "⚡" },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "DevOps",
    subtitle: "& Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Docker", icon: "🐳" },
      { name: "render.com", icon: "🎬" },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="bg-[#0e0c1e] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Animation */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Technical <span className="text-purple-500">Skills</span>
        </motion.h2>

        {/* Cards Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row gap-8"
        >
          {skillsData.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setActive(card.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative flex-1 rounded-3xl p-10 cursor-pointer transition-all duration-500
              ${
                active === card.id
                  ? "bg-gradient-to-br from-[#1d1836] to-[#0f0c25] border border-purple-500 shadow-2xl shadow-purple-500/20"
                  : active !== null
                  ? "opacity-40 bg-[#15132a]"
                  : "bg-[#15132a]"
              }`}
            >

              <h3 className="text-6xl font-bold text-purple-500/70">
                {card.number}
              </h3>

              <h4 className="text-2xl font-semibold mt-4">
                {card.title}
              </h4>

              <p className="text-gray-400 italic mb-8">
                {card.subtitle}
              </p>

              {/* Skills Tags */}
              <ul className="flex flex-wrap gap-4">
                {card.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1f1b3a] border border-gray-700 hover:border-purple-500 hover:bg-purple-600/10 text-gray-300 hover:text-white transition duration-300"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;