import LottieInit from "@/src/lib/Lottie";
import {
  btn,
  buttonContainer,
  greetingContainer,
  hireMeBtn,
  HomeContainer,
  homeContentContainer,
  jobInterest,
  myWorksBtn,
  primaryColor,
  chevronContainer,
} from "./styles";
import downArrow from "@/public/assets/lottie/arrowDown.json";
import ContactMe from "../ContactMe";
import useIsMobile from "@/src/lib/hooks/useIsMobile";
import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { useScrollTo } from "@/src/lib/hooks/useScrollTo";
// import { useIntersectionObserver } from "@/src/lib/hooks/useIntersectionObserver";

const PortfolioHome = () => {
  const isMobile = useIsMobile();
  const { homeRef, aboutMeRef } = useAppContextValues();
  const { scrollTo } = useScrollTo();
  // useIntersectionObserver({ element: homeRef, rootMargin: "0px" });
  return (
    <>
      <div ref={homeRef} className={HomeContainer}>
        <div data-aos="fade-right" className={homeContentContainer}>
          <p className={greetingContainer}>HELLO!</p>
          <p>
            <span>I'm</span> <span className={primaryColor}>Prathik</span>
          </p>
          <p className={primaryColor}>Pugazhenthi</p>
          <p className={jobInterest}>Fullstack Web Developer</p>
          <div className={buttonContainer}>
            <a
              href="mailto:prathik.pugazhenthi0300@gmail.com"
              className={`${btn} ${hireMeBtn}`}
            >
              HIRE ME
            </a>
            <a className={`${btn} ${myWorksBtn}`}>MY WORKS</a>
          </div>
        </div>
        {!isMobile && <ContactMe />}
      </div>
      <div className={chevronContainer}>
        <LottieInit
          isCursorPointer
          animationData={downArrow}
          height={80}
          width={80}
          onClickHandler={scrollTo(aboutMeRef)}
        />
      </div>
    </>
  );
};

export default PortfolioHome;
