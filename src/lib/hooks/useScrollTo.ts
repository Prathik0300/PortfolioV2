import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { RefObject } from "react";

export const useScrollTo = () => {
  const { homeRef, aboutMeRef, skillsRef, experienceRef } =
    useAppContextValues();

  const idRefMapper: Record<string, RefObject<HTMLElement>> = {
    home: homeRef,
    aboutMe: aboutMeRef,
    skills: skillsRef,
    experience: experienceRef,
  };

  const scrollTo = (targetRef: RefObject<HTMLElement>) => {
    return () => {
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  };

  const scrollToId = (id: string) => {
    if (idRefMapper[id]) {
      scrollTo(idRefMapper[id])();
    }
  };
  return { scrollTo, scrollToId };
};
