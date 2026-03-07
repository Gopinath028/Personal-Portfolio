import React from "react";
import { motion } from "motion/react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { submitContact } from "../api";


// 🔥 SAME animation used everywhere
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

const Contact = () => {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const data = await submitContact({
                fullName,
                email,
                phone,
                subject,
                message,
            });

            setStatus(`✅ ${data.message || "Message sent successfully!"}`);
            setFullName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        } catch (err) {
            setStatus("❌ Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-[#0e0c1e] text-white py-24">

            {/* ===== Title ===== */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto text-center px-6"
            >
                <h2 className="text-4xl font-bold">
                    Let's Discuss Your <span className="text-purple-500">Project</span>
                </h2>

                <p className="text-slate-400 mt-4">
                    As a MERN stack developer, I love solving problems through code.
                    Let’s connect and build something amazing.
                </p>
            </motion.div>

            {/* ===== Main Grid ===== */}
            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-8"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-4">
                        <div className="bg-purple-500 p-4 rounded-full">
                            <FaPhone />
                        </div>
                        <div>
                            <p className="text-purple-500 font-medium">Call Me</p>
                            <p>+91 9600923670</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex items-center gap-4">
                        <div className="bg-purple-500 p-4 rounded-full">
                            <FaEnvelope />
                        </div>
                        <div>
                            <p className="text-purple-500 font-medium">Email</p>
                            <p>gopinathk028@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex items-center gap-4">
                        <div className="bg-purple-500 p-4 rounded-full">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <p className="text-purple-500 font-medium">Address</p>
                            <p>Salem, Tamilnadu, India</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex gap-6 text-2xl pt-6">
                        <a href="https://www.linkedin.com/in/gopinath-k-087779273/" className="hover:text-purple-500"><FaLinkedin /></a>
                        <a href="https://github.com/Gopinath028" className="hover:text-purple-500"><FaGithub /></a>
                        <a href="https://www.instagram.com/" className="hover:text-purple-500"><FaInstagram /></a>
                        <a href="https://x.com/" className="hover:text-purple-500"><FaXTwitter /></a>
                        <a href="https://facebook.com/" className="hover:text-purple-500"><FaFacebook /></a>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE FORM */}
                <motion.form
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                        />
                        <input type="email" placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type="tel" placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                        />
                        <input type="text" placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                        />
                    </div>

                    <textarea placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                    />

                    {loading && <p className="text-yellow-400">⏳ Sending...</p>}
                    {status && (
                        <p className={status.startsWith("✅") ? "text-green-400" : "text-red-400"}>
                            {status}
                        </p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        type="submit"
                        className="bg-purple-500 px-6 py-3 rounded-md hover:bg-purple-600"
                    >
                        Submit Message
                    </motion.button>
                </motion.form>
            </div>

            {/* FOOTER */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-32 border-t border-purple-500 pt-6 text-center text-gray-400"
            >
                © 2026 Gopinath. All rights reserved.
                <div className='flex justify-center space-x-4 text-white mt-4'> <a className='hover:text-purple-500'><FaFacebook className='w-6 h-6' /></a> <a className='hover:text-purple-500'><FaXTwitter className='w-6 h-6' /></a> <a className='hover:text-purple-500'><FaLinkedin className='w-6 h-6' /></a> <a className='hover:text-purple-500'><FaInstagram className='w-6 h-6' /></a> </div>
            </motion.div>

        </section>
    );
};

export default Contact;
