import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { SKILL_SECTIONS } from "./constants";
import { logoContainer, skillRow, skillRowContainer } from "./styles";

import {
  container,
  titleContainer,
  contentContainer,
  titleContent,
} from "@/styles/layout.style";
import classNames from "classnames";

const SkillRow = ({ skills }) => {
  return (
    <div className={skillRow}>
      {skills.map(({ id, name, logo }) => {
        return (
          <div className={logoContainer} key={`${name}-${id}`}>
            <div>{logo}</div>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const { skillsRef } = useAppContextValues();
  return (
    <div ref={skillsRef} className={container}>
      <div className={titleContainer}>
        <div className={classNames("animate", titleContent)}>Skills</div>
      </div>
      <div className={classNames("animate", contentContainer)}>
        {SKILL_SECTIONS.map(({ section_name, skills }, idx) => {
          return (
            <div className={skillRowContainer} key={`${section_name}-${idx}`}>
              <div>{section_name}</div>
              <SkillRow skills={skills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
