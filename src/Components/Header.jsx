/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import devDotToIcon from "../images/SylvanLogo.png";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "1.75rem",
        background: "rgba(255,255,255,0.85)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}>
      <a href="#home">
        <img src={devDotToIcon} alt="SylvanSoftworks.com" className="siteLogo" />
      </a>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
