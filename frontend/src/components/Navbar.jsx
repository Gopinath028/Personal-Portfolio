import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from 'react-scroll';
import { X } from "lucide-react";


const Navbar = () => {


    const variants = {
        open: { clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring",
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: {
                type: "spring",
                duration: 1,
            }
        }
    }



    const [menu, setMenu] = useState(false)

    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 3, text: "Services", to: "services" },
        { id: 4, text: "Skills", to: "skills" },
        { id: 5, text: "Projects", to: "projects" },
        { id: 6, text: "Contact", to: "contact" },
    ]

    const [openCV, setOpenCV] = useState(false);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='container mx-auto hidden md:flex justify-between items-center py-6'>
                <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                    <span className='text-white'>GOPINATH</span>
                    <span className='text-purple-500'> K</span>
                </div>
                <div>
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg text-white'>
                        {items.map(({ id, text, to }) => (
                            <li key={id} className="relative group">
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="px-4 py-2 rounded-full transition-all duration-300 
               hover:bg-purple-600/20 
               hover:shadow-[0_0_20px_#9333ea]"
                                >
                                    {text}
                                </Link>

                                
                            </li>
                        ))}
                    </ul>

                </div>

                <a
                    onClick={() => setOpenCV(true)}
                    className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-6 py-2 rounded-full cursor-pointer"
                >
                    Download CV
                </a>
                {openCV && (
                    <motion.div
                        className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 relative overflow-hidden border border-white/30"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setOpenCV(false)}
                                className="absolute top-3 left-3 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition shadow-lg"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* CV Preview */}
                            <iframe
                                src="/K Gopinath res.pdf"
                                title="CV Preview"
                                className="w-full h-[500px] rounded-b-lg"
                            ></iframe>

                            {/* Download Button inside Modal */}
                            <div className="p-4 flex justify-center">
                                <a
                                    href="/K Gopinath res.pdf"
                                    download
                                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
                                >
                                    ⬇️ Download CV
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

            </motion.div>




            <div className='flex md:hidden justify-between'>
                <motion.div
                    animate={menu ? "open" : "closed"}>
                    <motion.div
                        variants={variants}
                        onClick={() => setMenu((prev) => !prev)}
                        className='bg-white w-2/3 h-screen text-black fixed z-10'>
                        <div className='px-7 py-6'>
                            {menu ? (<IoCloseSharp size={30} />) : <AiOutlineMenu size={30} />}
                        </div>
                        {menu && (
                            <div className='flex flex-col justify-center items-center'>
                                <ul className='space-y-6 text-black text-lg'>
                                    {items.map(({ id, text, to }) => (
                                        <li key={id}
                                            className='hover:text-purple-500 duration-200 cursor-pointer'>
                                            <Link
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                            >
                                                {text}
                                            </Link></li>
                                    ))}
                                </ul>
                                <a
                                    onClick={() => setOpenCV(true)}
                                    className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-6 py-2 mt-6 rounded-full'>Download CV</a>

                                {openCV && (
                                    <motion.div
                                        className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.div
                                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 relative overflow-hidden border border-white/30"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Close Button */}
                                            <button
                                                onClick={() => setOpenCV(false)}
                                                className="absolute top-3 left-3 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition shadow-lg"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>

                                            {/* CV Preview */}
                                            <iframe
                                                src="/K Gopinath res.pdf"
                                                title="CV Preview"
                                                className="w-full h-[500px] rounded-b-lg"
                                            ></iframe>

                                            {/* Download Button inside Modal */}
                                            <div className="p-4 flex justify-center">
                                                <a
                                                    href="/K Gopinath res.pdf"
                                                    download
                                                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
                                                >
                                                    ⬇️ Download CV
                                                </a>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}


                            </div>
                        )}
                    </motion.div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
                    <span className='text-white'>Gopinath</span>
                    <span className='text-purple-500'> K</span>
                </motion.div>
            </div>
        </div>


    )
}

export default Navbar