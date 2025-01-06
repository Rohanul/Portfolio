import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <>
      <div className=" overflow-x-hidden text-stone-500 antialiased">
        <div className="bg-gradient-to-r from-black via-black to-gray-900 ">
          <div className="fixed inset-0 -z-10"></div>
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <Technologies />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
