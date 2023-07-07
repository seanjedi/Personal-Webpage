import SeanMalloyImg from "./imgs/SeanMalloy.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const imageStyle = {
    margin_top: 20,
    width: 200,
    display: "block",
    margin_left: "auto",
    margin_right: "auto",
  };

  const bodyStyle = {
    backgroundColor: "#0b0c10",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
    lineHeight: 1.5,
    padding: "20px",
    margin: 0,
    minHeight: "100vh",
    color: "#c5c6c7",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  };

  return (
    <div style={bodyStyle}>
      <Header />
      <img style={imageStyle} alt="Sean Malloy Face" src={SeanMalloyImg} />
      <Footer />
    </div>
  );
};

export default App;
