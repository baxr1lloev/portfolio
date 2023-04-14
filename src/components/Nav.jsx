import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData,  BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
import {SiBackstage} from "react-icons/si"

const Nav = () => {
  return (
    <nav className="fixed bottom-2 bg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl  rounded-full max-w-[440px] mx-auto px-6 flex justify-between text-white/50 items-center ">
         
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer justify-center w-[60px] h-[60px] flex items-center "
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer justify-center w-[60px] h-[60px] flex items-center"
          >
            <BiUser />
          </Link>

          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer justify-center  w-[60px] h-[60px] flex items-center"
          >
            <BsBriefcase />
          </Link>

          <Link
            to="stages"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer justify-center  w-[60px] h-[60px] flex items-center"
          >
            <SiBackstage/>
          </Link>


          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer justify-center w-[60px] h-[60px] flex items-center"
          >
            <BsChatSquareText />
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
