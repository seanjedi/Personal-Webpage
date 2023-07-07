import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    flex: 1 0 1;
    padding: 20px;
    margin-top: 100px;
    color: #ffffff;
    background-color: #2c8d7d;
    text-align: center;
  `;
  return (
    <Footer>
      <p>Sean Malloy Webpage, 2019</p>
    </Footer>
  );
};

export default Footer;
