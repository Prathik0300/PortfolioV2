import { useState, useRef } from "react";
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
  popupRefStyle,
} from "./styles";
import dynamic from "next/dynamic";
import downArrow from "@/public/assets/lottie/arrowDown.json";
import Socials from "../../components/Socials";
import useIsMobile from "@/src/lib/hooks/useIsMobile";
import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { useScrollTo } from "@/src/lib/hooks/useScrollTo";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Image from "next/image";

const Popup = dynamic(() => import("@/src/components/Popup"), { ssr: false });
const PortfolioHome = () => {
  const isMobile = useIsMobile();
  const [hireMePopupOpen, setHireMePopupOpen] = useState(false);
  const popupRef = useRef<null | HTMLDivElement>(null);
  const { homeRef, aboutMeRef, projectRef, hireMeRef } = useAppContextValues();
  const { scrollTo } = useScrollTo();

  const toggleHireMePopup = () => {
    setHireMePopupOpen((prevState) => !prevState);
  };

  const closePopup = (e: MouseEvent | TouchEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node))
      setHireMePopupOpen(false);
  };

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
              ref={hireMeRef}
              onClick={toggleHireMePopup}
              aria-describedby="hireMePopup"
              // href="mailto:prathik.pugazhenthi0300@gmail.com"
              className={`${btn} ${hireMeBtn}`}
            >
              HIRE ME
            </a>
            {hireMePopupOpen && (
              <ClickAwayListener onClickAway={closePopup}>
                <div className={popupRefStyle} ref={popupRef}>
                  <Popup anchor={hireMeRef?.current} id="hireMePopup" />
                </div>
              </ClickAwayListener>
            )}
            <a
              className={`${btn} ${myWorksBtn}`}
              onClick={scrollTo(projectRef)}
            >
              MY WORKS
            </a>
          </div>
        </div>
        {!isMobile && <Socials />}
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
