"use client"
import { motion } from 'motion/react';

const AboutSection = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'JavaScript/TypeScript'] },
        { category: 'Backend', items: ['PHP/Laravel', 'Golang/Echo', 'Node.js', 'RESTful APIs', 'GraphQL'] },
        { category: 'Mobile', items: ['React Native', 'Flutter', 'Kotlin'] },
        { category: 'DevOps', items: ['AWS Lambda', 'S3', 'SQS', 'SNS', 'Git', 'Docker'] },
    ];

    return (
        <section id="about" className="section  relative">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-gradient inline-block mb-4">About Me</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Fullstack developer with 4 years of experience crafting web and mobile applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                I&apos;m a fullstack developer with a passion for building exceptional digital experiences.
                                My journey in development started 4 years ago, with the first two years focused on Laravel
                                and its frontend options.
                            </p>
                            <p>
                                For the past two years, I&apos;ve been freelancing and developing as an indie hacker,
                                which has allowed me to work with a diverse range of technologies and projects.
                                This experience has honed my ability to adapt quickly to new technologies and deliver
                                high-quality solutions.
                            </p>
                            <p>
                                I specialize in building full-stack applications using PHP, TypeScript/JavaScript,
                                and Golang, with experience in mobile development using Kotlin and Dart for Flutter.
                                My experience with cloud services like AWS Lambda, S3, SQS, and SNS allows me to create
                                scalable and efficient solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="glass-card p-4">
                                    <h4 className="font-medium mb-3">{skillGroup.category}</h4>
                                    <ul className="space-y-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <li key={i} className="flex items-center text-gray-300">
                                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
