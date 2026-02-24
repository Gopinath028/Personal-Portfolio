import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";

import {  
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiGraphql,
} from "react-icons/si";

const topTech = [
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
];

const bottomTech = [
  { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiGraphql className="text-pink-500" />, name: "GraphQL" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
];

const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-drop-shadow-[0_0_30px_#9333ea]">

      {/* TOP LINE */}
      <div className="h-[2px] bg-white/20 w-full"></div>

      {/* TOP ROW */}
      <div className="marquee py-8">
        <div className="marquee-track">
          {[...topTech, ...topTech].map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="text-3xl">{tech.icon}</div>
              <span className="text-2xl font-semibold tracking-wide text-gray-300">
                {tech.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE LINE */}
      <div className="h-[2px] bg-white/20 w-full"></div>

      {/* BOTTOM ROW */}
      <div className="marquee reverse py-8">
        <div className="marquee-track">
          {[...bottomTech, ...bottomTech].map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="text-3xl">{tech.icon}</div>
              <span className="text-2xl font-semibold tracking-wide text-gray-300">
                {tech.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="h-[2px] bg-white/20 w-full"></div>

    </div>
  );
};

export default TechMarquee;
