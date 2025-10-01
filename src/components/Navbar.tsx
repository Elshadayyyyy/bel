"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const solutionsPaths = ["/solutions", "/ERPDetail", "/CharityPlatform", "/RetailAuto"];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveLink = (linkPath: string) => {
    if (linkPath === "/solutions") {
      return solutionsPaths.includes(pathname);
    }
    return pathname === linkPath;
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      {/* Reduced horizontal padding from px-4 lg:px-8 → px-2 lg:px-6 */}
      <div className="w-full px-1 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Reduced logo left margin/padding */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="BelTech Logo"
              className="h-17 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? "text-[#27A2D8] border-b-2 border-[#27A2D8]"
                    : "text-gray-700 hover:text-[#27A2D8]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Reduced Get Demo button left margin from ml-4 → ml-2 */}
            <Button
              className="ml-2 text-white px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 bg-[#27A2D8]"
              onClick={() => (window.location.href = "/services")}
            >
              Get Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#27A2D8] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium px-2 py-1 transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? "text-[#27A2D8] border-b border-[#27A2D8]"
                    : "text-gray-700 hover:text-[#27A2D8]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full mt-2 text-white bg-[#27A2D8] hover:bg-[#4FB3C1]"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = "/services";
              }}
            >
              Get Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
