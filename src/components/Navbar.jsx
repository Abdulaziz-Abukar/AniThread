import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { HamburgerButton } from "./HamburgerButton";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300); // match fade-slide-out duration
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setIsClosing(false);
        document.body.style.overflow = "auto";
      }
    };

    // Lock scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header className="flex justify-between md:justify-around items-center p-4 ml-6 md:ml-0 heading-font">
      <h1 className="text-2xl z-100">AniThread</h1>
      <nav className="flex justify-around items-center gap-6 text-lg">
        <ul className="hidden md:flex justify-around items-center md:w-sm lg:w-xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Watchlist</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <a
              href="https://github.com/Abdulaziz-Abukar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-600"
            >
              <IoLogoGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abdul-abukar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-600"
            >
              <IoLogoLinkedin className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <div className="md:hidden fixed top-4 right-4 z-[999] mr-6">
          <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
        </div>

        {menuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-[#121419] z-50 flex flex-col justify-center items-center gap-12 text-xl heading-font ${
              isClosing ? "animate-fade-slide-out" : "animate-fade-slide-in"
            }`}
          >
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/search" onClick={toggleMenu}>
              Search
            </NavLink>
            <NavLink to="/watchlist" onClick={toggleMenu}>
              Watchlist
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>

            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/Abdulaziz-Abukar"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub className="w-8 h-8 hover:text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-abukar/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin className="w-8 h-8 hover:text-blue-600" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
