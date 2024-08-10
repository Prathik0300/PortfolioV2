import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { SKILL_DATA } from "./constants";
import {
  skillsContainer,
  titleContainer,
  contentContainer,
  titleContent,
} from "./styles";

const Skills = () => {
  const { skillsRef } = useAppContextValues();

  return (
    <div ref={skillsRef} className={skillsContainer}>
      <div className={titleContainer}>
        <div className={titleContent(true)}>Skills</div>
      </div>
      <div className={contentContainer}>
        {SKILL_DATA.map((skills) => {
          return <span>{skills.logo}</span>;
        })}
      </div>
    </div>
  );
};

export default Skills;
