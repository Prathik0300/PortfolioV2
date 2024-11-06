import AboutMe from "@/src/components/AboutMe";
import Experience from "@/src/components/Experience";
import PortfolioHome from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
import Skills from "@/src/components/Skills";
import { AOSInit } from "@/src/lib/AOS/aos";

const PortfolioContainer = () => {
  return (
    <>
      <AOSInit />
      <Navbar />
      <PortfolioHome />
      <AboutMe />
      <Experience />
      <Skills />
    </>
  );
};

export default PortfolioContainer;
