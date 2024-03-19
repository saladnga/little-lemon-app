import "./App.css";
import Header from "./comp/Header";
import Nav from "./comp/Nav";
import Main from "./comp/Main";
import Footer from "./comp/Footer";
import image from "./assets/littlelemonicon.png";

function App() {
  return (
    <>
      <img src={image} alt="icon"></img>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
