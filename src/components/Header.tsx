import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <Logo />
      <div className="flex justify-center items-center pt-20">
        <Navigation /> 
        
      </div>
    </div>
  );
};

export default Header;
