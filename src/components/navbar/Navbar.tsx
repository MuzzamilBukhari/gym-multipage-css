import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "../";
import { MdFitnessCenter } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import "@/styles/navbar/Navbar.css";

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About us", slug: "/about" },
  { id: 3, name: "Pricing", slug: "/pricing" },
  { id: 4, name: "Trainers", slug: "/trainers" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <CgGym size={40} />
          <Link
            href="/"
            className="logo-link"
            aria-label="Extreme Fitness Home"
          >
            <span className="logo-text">Extreme</span>Fitness
          </Link>
        </div>
        <nav className="nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>
        <div className="join-btn">
          <Button type="button" className="button">
            Join us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
