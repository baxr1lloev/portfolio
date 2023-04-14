import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/first-project.png";
import Img2 from "../assets/second-project.png";
import Img3 from "../assets/first-project.png";

const Work = () => {
    return (
        <section className="section sect" id="work">
            <div className="container  mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10 ">


                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-24  mb-5 lg:mb-0 "

                    >

                        <div>
                            <h2 className="h2 leading-tight text-accent ">
                                Наши проекты <br />
                            </h2>
                            <p className="max-w-sm mb-16 ">
                                Здесь вы сможете ознакомиться с проектами которые мы уже успели выполнить
                            </p>

                            <button className="btn btn-sm ">Все проекты..</button>
                        </div>

                        <a href="https://ornate-stardust-6e6bb8.netlify.app/">
                            <div

                                className="group relative  overflow-hidden 
        border-2 
          border-white/50
          rounded-xl
         "
                            >
                                <div
                                    className="group-hover:bg-black/70 w-full h-full absolute
                 z-40 transition-all duration-300
               "
                                >
                                </div>

                                <img
                                    className="group-hover:scale-125  transition-all duration-500  "
                                    src={Img1}
                                    alt=""
                                ></img>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                                    <span className="text-gradient">Киносайт</span>
                                </div>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white ">Project KinoArea</span>
                                </div>

                            </div>
                        </a>


                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-3 "
                    >


                        <a href="https://ornate-stardust-6e6bb8.netlify.app/">
                            <div
                                className="group relative overflow-hidden 
            border-2 
              border-white/50
              rounded-xl
             "
                            >
                                <div
                                    className="group-hover:bg-black/70 w-full h-full absolute
                     z-40 transition-all duration-300
                   "
                                ></div>

                                <img
                                    className="group-hover:scale-125 transition-all duration-500  "
                                    src={Img2}
                                    alt=""
                                ></img>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                                    <span className="text-gradient">Киносайт</span>
                                </div>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white ">Project KinoAREA</span>
                                </div>
                            </div>
                        </a>



                        <a href="https://ornate-stardust-6e6bb8.netlify.app/">
                            <div
                                className="group relative overflow-hidden 
            border-2 
              border-white/50
              rounded-xl
             "
                            >
                                <div
                                    className="group-hover:bg-black/70 w-full h-full absolute
                     z-40 transition-all duration-300
                   "
                                ></div>

                                <img
                                    className="group-hover:scale-125 transition-all duration-500  "
                                    src={Img3}
                                    alt=""
                                ></img>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>

                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white ">Projects title</span>
                                </div>
                            </div>
                        </a>






                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
