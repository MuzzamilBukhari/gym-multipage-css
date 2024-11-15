import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import "../../styles/footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-content">
          <Link className="footer-logo" href={"/"}>
            <span className="footer-title">
              Xtreme
              <span className="footer-highlight"> Fitness</span>
            </span>
          </Link>
          <p className="footer-copyright">
            © 2024 Xtreme <span className="footer-highlight">Fitness</span>
          </p>
          <span className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
