import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "../";
import { MdFitnessCenter } from "react-icons/md";
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
          <MdFitnessCenter size={35} />
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
          <a
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" className="button">
              Join us
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
