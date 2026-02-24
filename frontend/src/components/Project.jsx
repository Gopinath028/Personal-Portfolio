import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/dashboard.png";
import project6 from "../assets/project6.png";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Weather App",
            shortDescription:
                "A MERN stack weather app showing live weather data.",
            fullDescription:
                "This Weather App is built using the MERN stack and integrates the OpenWeather API to fetch real-time weather data. Users can search for any city worldwide and view temperature, humidity, wind speed, and weather conditions. The application includes responsive design, API integration, and smooth UI animations.",
            image: project1,
            video: "/videos/Weather.mp4",
            tech: ["MongoDB", "Express", "React", "Node.js", "OpenWeather API"],
        },
        {
            id: 2,
            title: "Movie Review App",
            shortDescription:
                "Users can browse movies and post reviews.",
            fullDescription:
                "The Movie Review App allows users to explore trending and popular movies using the TMDB API. Authenticated users can post reviews, rate movies, and manage their profiles. It includes secure JWT authentication, REST API backend, and dynamic UI updates.",
            image: project2,
            video: "/videos/Movie.mp4",
            tech: ["MongoDB", "Express", "React", "Node.js", "TMDB API", "JWT"],
        },
        {
            id: 3,
            title: "Expense Tracker",
            shortDescription:
                "Track income and expenses with authentication.",
            fullDescription:
                "This full-stack Expense Tracker helps users manage finances by adding, editing, and deleting transactions. It includes JWT authentication, protected routes, dashboard analytics, and responsive charts. Data is securely stored in MongoDB.",
            image: project5,
            video: "/videos/Expense.mp4",
            tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
        },
        {
            id: 4,
            title: "E-Commerce Website",
            shortDescription:
                "A MERN e-commerce app with cart and checkout.",
            fullDescription:
                "This E-Commerce platform is built using the MERN stack with complete product management, category filters, price sorting, cart functionality, and secure checkout using Stripe integration. It includes user authentication, admin dashboard for product control, order tracking, and responsive UI optimized for all devices.",
            image: project3,
            video: "/videos/Ecommerce.mp4",
            tech: ["MongoDB", "Express", "React", "Node.js", "Stripe API", "JWT"],
        },
        {
            id: 5,
            title: "Notes Manager App",
            shortDescription:
                "Secure notes app with full CRUD functionality.",
            fullDescription:
                "The Notes Manager App allows users to create, edit, and delete notes securely with JWT authentication and protected routes. Built using the MERN stack, it includes user-based data isolation, RESTful APIs, and a clean responsive UI for efficient note management.",
            image: project4,
            video: "/videos/Notes.mp4",
            tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
        },
         {
            id: 6,
            title: "Personal Portfolio",
            shortDescription:
                "A responsive portfolio website showcasing projects and skills.",
            fullDescription:
                "This personal portfolio website showcases my projects, skills, and experience. Built with React and Tailwind CSS, it features a responsive design, smooth animations, and a clean UI that highlights my work effectively.",
            image: project6,
            video: "/videos/Portfolio.mp4",
            tech: ["React", "Tailwind CSS", "Framer Motion", "node", "Express", "MongoDB"],
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="projects" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-4xl text-white underline font-bold text-center mb-12"
                >
                    My Work
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: project.id * 0.2 }}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4">
                                    {project.shortDescription}
                                </p>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                                >
                                    View
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ================= MODAL ================= */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="relative bg-gray-900 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-xl p-6 z-10 animate-fadeIn shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button*/}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-2 right-2 z-50 
                       w-14 h-14 
                       flex items-center justify-center
                       rounded-full 
                       bg-red-600 hover:bg-red-700
                       text-white text-3xl
                       shadow-2xl 
                       hover:scale-110 
                       transition-all duration-300"
                        >
                            ✕
                        </button>

                        {/* Video */}
                        <video
                            src={selectedProject.video}
                            controls
                            autoPlay
                            className="w-full rounded-lg mb-4"
                        />

                        {/* Title */}
                        <h3 className="text-2xl text-white font-bold mb-3">
                            {selectedProject.title}
                        </h3>

                        {/* Full Description */}
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {selectedProject.fullDescription}
                        </p>

                        {/* Tech Stack */}
                        <h4 className="text-lg text-purple-400 font-semibold mb-2">
                            Tech Stack:
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
