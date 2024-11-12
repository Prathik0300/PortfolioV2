import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { SKILL_SECTIONS } from "./constants";
import {
  logoContainer,
  logoWrapper,
  skillRow,
  skillRowContainer,
} from "./styles";
import Tooltip from "@mui/material/Tooltip";
import {
  container,
  titleContainer,
  contentContainer,
  titleContent,
} from "@/styles/layout.style";
import classNames from "classnames";
import { offsetDiv } from "@/src/lib/common.styles";

const SkillRow = ({ skills }) => {
  return (
    <div className={skillRow}>
      {skills.map(({ id, name, logo }) => {
        return (
          <div className={logoContainer} key={`${name}-${id}`}>
            <Tooltip title={name}>
              <div className={logoWrapper}>{logo}</div>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const { skillsRef } = useAppContextValues();
  return (
    <>
      <div ref={skillsRef} className={offsetDiv} />
      <div className={container}>
        <div className={titleContainer}>
          <div className={classNames("animate", titleContent)}>SKILLS</div>
        </div>
        <div className={classNames(contentContainer)}>
          {SKILL_SECTIONS.map(({ section_name, skills }, idx) => {
            return (
              <div
                className={classNames("animate", skillRowContainer)}
                key={`${section_name}-${idx}`}
              >
                <div>{section_name}</div>
                <SkillRow skills={skills} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
