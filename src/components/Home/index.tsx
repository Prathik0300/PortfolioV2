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
import downArrow from "@/src/lottie/arrowDown.json";
import ContactMe from "../ContactMe";
import useIsMobile from "@/src/lib/hooks/useIsMobile";

const PortfolioHome = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={HomeContainer}>
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
        <a>
          <LottieInit
            isCursorPointer
            animationData={downArrow}
            height={80}
            width={80}
          />
        </a>
      </div>
    </>
  );
};

export default PortfolioHome;
