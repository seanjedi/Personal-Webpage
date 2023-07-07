import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderContainer = styled.div`
    background: #1f2833;
    font-weight: bolder;
    color: #66fcf1;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  `;

  const NavContainer = styled.nav`
    font-size: 16px;
    font-weight: bold;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    flex-grow: 1;
    flex: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background: #1d1f25;
  `;

  const Link = styled.a`
    padding-left: 5px;
    padding-right: 5px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: normal;

    ${({ isActive }) =>
      isActive &&
      `
			font-weight: bold;
			color: #66fcf1;
	`}

    &:hover {
      color: #66fcf1;
      font-weight: bold;
    }
  `;

  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const getLinkStyle = (link) => {
    const isActive = hoveredLink === link;
    return isActive;
  };

  return (
    <>
      <HeaderContainer>
        <h1>Sean Malloy</h1>
      </HeaderContainer>
      <NavContainer>
        <Link
          href="https://www.linkedin.com/in/seanpmalloy/"
          isActive={getLinkStyle("LinkedIn")}
          onMouseEnter={() => handleMouseEnter("LinkedIn")}
          onMouseLeave={handleMouseLeave}
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/seanjedi"
          isActive={getLinkStyle("GitHub")}
          onMouseEnter={() => handleMouseEnter("GitHub")}
          onMouseLeave={handleMouseLeave}
        >
          GitHub
        </Link>
        <Link
          href="mailto:s_malloy1@u.pacific.edu"
          isActive={getLinkStyle("Email")}
          onMouseEnter={() => handleMouseEnter("Email")}
          onMouseLeave={handleMouseLeave}
        >
          Email
        </Link>
      </NavContainer>
    </>
  );
};

export default Header;
