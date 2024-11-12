import AboutMe from "@/src/module/AboutMe";
import Experience from "@/src/module/Experience";
import PortfolioHome from "@/src/module/Home";
import Navbar from "@/src/module/Navbar";
import Projects from "@/src/module/Projects";
import Skills from "@/src/module/Skills";
import { AOSInit } from "@/src/lib/AOS/aos";
import Footer from "@/src/module/Footer";

const PortfolioContainer = () => {
  return (
    <>
      <AOSInit />
      <Navbar />
      <PortfolioHome />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default PortfolioContainer;
