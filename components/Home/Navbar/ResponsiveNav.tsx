"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => setShowNav(!showNav);
  return (
    <div>
      <Nav openNav={navHandler} />
      <MobileNav showNav={showNav} closeNav={navHandler} />
    </div>
  );
};

export default ResponsiveNav;
