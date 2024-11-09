import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
// import { Button } from "../";
import "@/styles/navbar/Navbar.css"; // Import the new CSS file

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About us", slug: "/about" },
  { id: 3, name: "Pricing", slug: "/pricing" },
  { id: 4, name: "Trainers", slug: "/trainers" },
];

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-brand">
            <span className="text-white">Xtreme</span> Fitness
          </Link>
        </div>
        <nav className="navbar-nav navbar-nav-lg-gap">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>
        <button type="button" className="navbar-button">
          Join us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
