import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Our = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh]" id="home">

      <div className="container  mx-auto">


        <div className="bg-[red] mt-[130px]  h-[300px]  ">
            <p className="text-white text-[40px] ">
                НАШИ СПЕЦИАЛИСТЫ
            </p>
        </div>


      </div>

    </section>
  );
};

export default Our;
