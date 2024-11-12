"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import "../../styles/navbar/MobNavbar.css";
import { CgGym } from "react-icons/cg";

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About us", slug: "/about" },
  { id: 3, name: "Pricing", slug: "/pricing" },
  { id: 4, name: "Trainers", slug: "/trainers" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mobile-navbar">
      <div className="navbar-container">
        <div>
          <Link href="/" className="logo">
            <CgGym size={40} />
            <span className="logo-text-white">Extreme </span>
            <span className="logo-text-primary">Fitness</span>
          </Link>
        </div>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink slug={item.slug} key={item.id} name={item.name} />
        ))}
      </nav>
    </header>
  );
};

export default MobNavbar;
