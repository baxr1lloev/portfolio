import React from "react";
import Logo from "../assets/webrain-light.png";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[175px] " src={Logo} alt=""></img>
          </a>
          <button className="btn btn-sm font-['RoadRadio']">Связаться с нами</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
