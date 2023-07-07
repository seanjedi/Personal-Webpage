import React, { useState } from "react";

const Header = () => {
  const headerStyle = {
    background: "#1f2833",
    color: "#80869e",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  };

  const navStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    paddingLeft: "50px",
    paddingRight: "50px",
    flexGrow: 1,
    flex: "0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff",
    background: "#1d1f25",
  };

  const linkStyle = {
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s",
    fontWeight: "normal",
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const getLinkStyle = (link) => {
    const isActive = hoveredLink === link;
    return {
      ...linkStyle,
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#66fcf1" : "#ffffff",
    };
  };

  return (
    <>
      <header style={headerStyle}>Sean Malloy</header>
      <nav style={navStyle}>
        <a
          href="https://www.linkedin.com/in/seanpmalloy/"
          style={getLinkStyle("LinkedIn")}
          onMouseEnter={() => handleMouseEnter("LinkedIn")}
          onMouseLeave={handleMouseLeave}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/seanjedi"
          style={getLinkStyle("GitHub")}
          onMouseEnter={() => handleMouseEnter("GitHub")}
          onMouseLeave={handleMouseLeave}
        >
          GitHub
        </a>
        <a
          href="mailto:s_malloy1@u.pacific.edu"
          style={getLinkStyle("Email")}
          onMouseEnter={() => handleMouseEnter("Email")}
          onMouseLeave={handleMouseLeave}
        >
          Email
        </a>
      </nav>
    </>
  );
};

export default Header;
