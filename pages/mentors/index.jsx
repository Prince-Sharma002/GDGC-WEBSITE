import React from 'react'
import ProgressBar from '../../components/ProgressBar';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import MentorCard from '@/components/MentorCard';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { ContributorData } from "@/Common/contributorData";
import { mentorData } from '@/Common/mentorData';
import Footer from '@/components/Footer';


const mentors = () => {
    return (
        <>
            <Head>
                <title>GDSC ABESIT | Mentors</title>
            </Head>
            <div className='text-black'>
                <ProgressBar />
                <Navbar />

                <div className='h-fit bg-blue-300 flex'>
                    <div className="bg-white w-full py-8 md:py-0">

                        <section className="container px-6 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                        <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                            Our {" "}
                                            <span className="text-yellow-400 tracking-wider">Mentors</span>
                                        </h1>
                                        <p className="text-base text-gray-700 md:text-lg text-center">
                                            Dedicated mentors, guiding us with wisdom and support on our path to success.
                                        </p>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
                                    >
                                        {mentorData &&
                                            mentorData.map((member) => {
                                                return (
                                                    <div key={member.id}>
                                                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-xl">
                                                            <img
                                                                className="object-cover w-full sm:h-80 "
                                                                src={member.image}
                                                                alt={member.name}
                                                            />

                                                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                                                <p className="mb-1 text-lg text-gray-100">
                                                                    {member.name}
                                                                </p>
                                                                <p className="mb-4 text-xs text-gray-100">
                                                                    {member.occuparion}
                                                                </p>
                                                                {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                                                {member.desc}
                                                            </p> */}

                                                                <div className="flex items-center justify-center space-x-3">
                                                                    <SocialIcon
                                                                        url={member.linkedin}
                                                                        target="_blank"
                                                                        style={{ height: 35, width: 35 }}
                                                                        bgColor="black"
                                                                    />

                                                                    <SocialIcon
                                                                        url={member.instagram}
                                                                        target="_blank"
                                                                        style={{ height: 35, width: 35 }}
                                                                        bgColor="black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </motion.div>
                                </div>
                                <div className="flex justify-center items-center text-black box-border lg:pb-20 md:pb-24 pb-16">

                                </div>
                            </motion.div>
                        </section>

                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default mentors