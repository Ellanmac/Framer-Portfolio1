import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About.jsx"
import { ChakraProvider } from '@chakra-ui/react'
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return (
    <ChakraProvider>
    <div>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>

      <section id="About Me">
        <Parallax type="about" />
      </section>

      <section><About/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      
      <section id="Contact"><Contact></Contact></section>
    </div>
    </ChakraProvider>
  );
};

export default App;
