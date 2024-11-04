import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { useIntersectionObserver } from "@/src/lib/hooks/useIntersectionObserver";

import {
  container,
  titleContainer,
  contentContainer,
  titleContent,
} from "@/styles/layout.style";

const AboutMe = () => {
  const { aboutMeRef } = useAppContextValues();
  return (
    <div ref={aboutMeRef} className={container} id="aboutMe">
      <div className={titleContainer}>
        <div className={`animate ${titleContent}`}>ABOUT ME</div>
      </div>
      <div className={`animate ${contentContainer}`}>
        <p>
          I’m Prathik Pugazhenthi, passionate about software development and
          emerging technologies. My expertise includes Python, TypeScript,
          JavaScript, Solidity, and cloud platforms like Azure and AWS, which
          I’ve utilized to enhance performance and user experience at Bajaj
          Finserv Health.
        </p>
        <p>
          I have spearheaded significant projects, such as improving B2C
          modules, developing innovative in-house tools, and optimizing SEO and
          page load speeds. My accomplishments in hackathons and competitions
          further highlight my ability to thrive in high-energy settings.
        </p>
        <p>
          With certifications in advanced analytics, AI, and software
          development, I am enthusiastic about applying my skills to
          cutting-edge projects in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
