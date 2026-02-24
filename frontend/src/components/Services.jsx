import React from 'react'
import { FaAppStore } from "react-icons/fa"
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'


const Services = () => {

    const servicesData = [
        {
            title: "Full-Stack Web Development",
            description: "Build end-to-end applications using MongoDB, Express.js, React.js, and Node.js."
        },
        {
            title: "Front-End Development",
            description: "Create modern, responsive, and interactive user interfaces with React.js & Tailwind CSS."
        },
        {
            title: "Back-End Development",
            description: "Develop secure, scalable APIs and server-side logic with Node.js & Express.js."
        },
        {
            title: "Database Management",
            description: "Design, integrate, and manage MongoDB databases for efficient data handling."
        },
        {
            title: "API Development & Integration",
            description: "Build REST APIs and integrate third-party services like payments, authentication, etc."
        },
        {
            title: "Freelance Web Projects",
            description: "Deliver custom websites, portfolios, business websites, and e-commerce solutions tailored to client needs"
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <div id="services" className='text-white py-16'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
                <p className='mb-12 text-gray-400'>
                    Transforming Ideas into Full-Stack Web Solutions with MERN
                </p>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale:0.8 }}
                            animate={inView ? { opacity: 1, scale:1 } : {opacity: 0, scale:0.8}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                            key={index}
                            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-200'>
                            <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Services