import { useState, useEffect } from "react";

export const useIntersectionObserver = ({ element, rootMargin }: any) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

    useEffect(() => {
        if (isVisible) {
            const inViewportEvent = new Event('inViewport');
            dispatchEvent(inViewportEvent);
        }
    }, [isVisible])
  return isVisible;
};