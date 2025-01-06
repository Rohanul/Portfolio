import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pb-10 py-8">
        <div className="flex flex-shrink-0 items-center w-20">
          <a href="/" aria-label="Home">
            <img src={logo} srcset="" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/rohanul-islam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="http://www.github.com/Rohanul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_rohanul_islam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Roha9ul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
