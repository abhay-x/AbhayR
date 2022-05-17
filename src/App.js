import logo from './logo.svg';
import Navbar from "./Components/js/Navbar";
import Home from "./Components/js/Home";
import About from "./Components/js/About";
import Skills from "./Components/js/Skills";
import Work from "./Components/js/Work";
import Contact from "./Components/js/Contact";
import Footer from "./Components/js/Footer";
import "./Components/css/styles.css";

function App() {
  return (
    <div className="App">
      <Navbar className="l-main" />
      <Home className="l-main" />
      <About className="l-main" />
      <Skills className="l-main" />
      <Work className="l-main" />
      <Contact className="l-main" /> 
      <Footer />
    </div>
  );
}

export default App;
