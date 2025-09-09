import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AnimatedContact from "./animations/AnimatedContact";
import AnimatedMobileMenu from "./animations/AnimatedMobileMenu";

const Header = () => {
  return (
    <div className="max-w-screen flex items-center justify-between">
      <Logo />
      <Navigation />
      <div className="flex justify-center items-center lg:pr-12">
        <AnimatedContact />
        <AnimatedMobileMenu />
      </div>
    </div>
  );
};

export default Header;
