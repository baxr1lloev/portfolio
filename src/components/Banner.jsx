import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh]" id="home">
            <div className="container  mx-auto">
                <div className="flex flex-col  gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[1.2] lg:text-[100px] "
                        >
                            WEBrain <span></span>{" "}
                        </motion.h1>

                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] "
                        >
                            <span className=" text-white mr-4  ">МЫ</span>

                            <TypeAnimation
                                sequence={[
                                    "ПРОГРАММИСТЫ",
                                    2000,
                                    "ДИЗАЙНЕРЫ",
                                    2000,
                                    "МАРКЕТОЛОГИ",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p
                            variants={fadeIn("right", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0 "
                        >
                            Мы предоставляем услуги для различных отраслей бизнеса, включая финансы, здравоохранение, производство и технологии
                        </motion.p>

                        <motion.div
                            variants={fadeIn("left", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
                        >
                            <button className="btn btn-lg">
                                <Link to="/crew">Наши специалисты</Link>
                            </button>
                            <a href="#" className="text-gradient btn-link font-['RoadRadio']">
                                Наше портфолио
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        viewport={{ once: true, amount: 0.7 }}
                        whileInView={"show"}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
                    >
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FF0066"
                                d="M40.2,-63.3C52,-55,61.5,-43.7,67.4,-30.8C73.3,-17.8,75.6,-3.3,74.6,11.4C73.6,26.2,69.2,41.2,60.3,53C51.3,64.9,37.7,73.6,23.4,76.3C9,79,-6.1,75.7,-19.8,70.4C-33.5,65,-45.7,57.6,-58.4,47.9C-71.1,38.1,-84.3,26.1,-89.4,11C-94.6,-4.2,-91.6,-22.3,-83.3,-36.9C-74.9,-51.5,-61.1,-62.5,-46.3,-69.5C-31.5,-76.6,-15.8,-79.6,-0.8,-78.4C14.2,-77.2,28.4,-71.7,40.2,-63.3Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
