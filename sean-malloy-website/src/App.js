import SeanMalloyImg from "./imgs/SeanMalloy.jpg";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const Image = styled.img`
    margin-top: 20px;
    width: 200px;
    display: block;
    margin: 0 auto;
  `;

  const Container = styled.div`
    background-color: #0b0c10;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    line-height: 1.25;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    color: #c5c6c7;
    width: 100%;
    margin: "auto";
    overflow: "hidden";
  `;

  return (
    <Container>
      <Header />
      <Image alt="Sean Malloy Face" src={SeanMalloyImg} />
      <Body />
      <Footer />
    </Container>
  );
};

export default App;
