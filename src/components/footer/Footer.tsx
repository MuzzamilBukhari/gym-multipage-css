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
              Evolve
              <span className="footer-highlight"> Fit</span>
            </span>
          </Link>
          <p className="footer-copyright">
            © 2024 Evolve <span className="footer-highlight">Fit</span>
          </p>
          <span className="footer-social-links">
            <a
              href="https://www.facebook.com/share/91NKfwYSFLSKCXBX/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="social-icon" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
