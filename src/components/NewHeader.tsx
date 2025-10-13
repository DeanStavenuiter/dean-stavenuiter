import React from "react";
import Logo from "./animations/AnimatedLogo";
import Navigation from "./Navigation";
import AnimatedContact from "./animations/AnimatedContact";
import AnimatedMobileMenu, { MobileMenuProvider, MobileMenuPopup } from "./animations/AnimatedMobileMenu";

const Header = () => {
  return (
    <MobileMenuProvider>
      <header className="max-w-screen mix-blend-difference z-[60] fixed w-full flex items-start justify-between pt-4 pr-4">
        <Logo />
        <Navigation />
        <div>
          <AnimatedContact />
          <AnimatedMobileMenu />
        </div>
      </header>
      <MobileMenuPopup />
    </MobileMenuProvider>
  );
};

export default Header;
