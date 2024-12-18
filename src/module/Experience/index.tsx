import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import {
  container,
  titleContainer,
  contentContainer,
  titleContent,
  divider,
} from "@/styles/layout.style";
import {
  experienceContainer,
  experienceTitle,
  stepContent,
  stepLabel,
  stepper,
  duration,
  customContentContainerForExperience,
} from "./styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import CircleIcon from "@mui/icons-material/Circle";
import { EXPERIENCES } from "./constants";
import classNames from "classnames";
import { offsetDiv } from "@/src/lib/common.styles";

const Experience = () => {
  const { experienceRef } = useAppContextValues();
  return (
    <>
      <div className={offsetDiv} ref={experienceRef} />
      <div className={container}>
        <div className={classNames("animate", titleContainer)}>
          <div className={titleContent}>EXPERIENCE</div>
        </div>
        <div
          className={classNames(
            customContentContainerForExperience,
            contentContainer
          )}
        >
          {EXPERIENCES.map((experience, idx) => {
            const showJourneyDuration = experience.journey.length > 1;
            const isLastElement = idx === EXPERIENCES.length - 1;
            return (
              <>
                <div
                  className={classNames(experienceContainer, "animate")}
                  key={experience.company}
                >
                  <div className={experienceTitle}>
                    <div>{experience.company}</div>
                    <div className={duration}>
                      {experience.startDate} - {experience.endDate}
                    </div>
                  </div>
                  <Stepper className={stepper} orientation="vertical">
                    {experience.journey.map((journey) => {
                      return (
                        <Step
                          key={journey.position}
                          className="animate"
                          active
                          expanded
                        >
                          <StepLabel
                            className={stepLabel}
                            icon={<CircleIcon />}
                          >
                            <div>{journey.position}</div>
                            {showJourneyDuration && (
                              <div className={duration}>
                                {journey.startDate} - {journey.endDate}
                              </div>
                            )}
                          </StepLabel>
                          <StepContent className={stepContent}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: journey.description,
                              }}
                            />
                          </StepContent>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
                {!isLastElement && (
                  <hr className={classNames("animate", divider)} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
