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

    &:hover {
      color: #66fcf1;
      font-weight: bold;
    }
  `;

  return (
    <>
      <HeaderContainer>
        <h1>Sean Malloy</h1>
      </HeaderContainer>
      <NavContainer>
        <Link href="https://www.linkedin.com/in/seanpmalloy/">LinkedIn</Link>
        <Link href="https://github.com/seanjedi">GitHub</Link>
        <Link href="mailto:s_malloy1@u.pacific.edu">Email</Link>
      </NavContainer>
    </>
  );
};

export default Header;
