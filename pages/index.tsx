import AboutMe from "@/src/components/AboutMe";
import Experience from "@/src/components/Experience";
import PortfolioHome from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
// import Skills from "@/src/components/Skills";

const PortfolioContainer = () => {
  return (
    <>
      <Navbar />
      <PortfolioHome />
      <AboutMe />
      <Experience />
      {/* <Skills /> */}
    </>
  );
};

export default PortfolioContainer;
