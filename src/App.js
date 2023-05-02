import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Cursor from "./elements/Cursor";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Cursor />
      <Footer />
    </div>
  );
}

export default App;
