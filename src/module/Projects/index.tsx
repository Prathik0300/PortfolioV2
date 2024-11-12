import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { offsetDiv, alignCenter } from "@/src/lib/common.styles";
import {
  container,
  contentContainer,
  titleContainer,
  titleContent,
} from "@/styles/layout.style";
import classNames from "classnames";
import { PROJECT_SECTION } from "./constants";
import {
  project_tile,
  projectTitleContainer,
  projectDescriptionContainer,
  projectDescriptionText,
  projectImageContainer,
  knowMoreBtn,
  knowMoreBtnAction,
} from "./styles";
import Image from "next/image";
import Button from "@mui/material/Button";
import LottieInit from "@/src/lib/Lottie";
import rightArrow from "@/public/assets/lottie/arrowRight.json";

const ProjectTile = ({
  project: {
    project_title,
    project_description,
    project_image,
    custom_properties: { styling = {} } = {},
  },
}) => {
  return (
    <div className={classNames("animate", project_tile)}>
      <div className={projectTitleContainer}>{project_title}</div>
      <div className={projectDescriptionContainer}>
        {project_image && (
          <div className={projectImageContainer} style={styling}>
            <Image
              src={project_image}
              fill={true}
              objectFit="contain"
              alt={`${project_title}_image`}
            />
          </div>
        )}
        <div className={projectDescriptionText}>{project_description}</div>
      </div>
      <div className={knowMoreBtnAction}>
        <Button disableRipple className={classNames(knowMoreBtn)} variant="text">
          Know more
          <LottieInit
            isCursorPointer
            animationData={rightArrow}
            height={25}
            width={25}
          />
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projectRef } = useAppContextValues();
  return (
    <>
      <div ref={projectRef} className={offsetDiv} />
      <div className={container}>
        <div className={classNames("animate", titleContainer)}>
          <div className={titleContent}>PROJECTS</div>
        </div>
        <div className={classNames(alignCenter, contentContainer)}>
          {PROJECT_SECTION.map((project, idx) => (
            <ProjectTile project={project} key={`project_section_${idx}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
