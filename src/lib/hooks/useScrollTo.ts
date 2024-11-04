import { RefObject } from "react";

export const useScrollTo = () => {
  const scrollTo = (targetRef: RefObject<HTMLElement>) => {
    return () => {
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
  };

  return { scrollTo };
};
