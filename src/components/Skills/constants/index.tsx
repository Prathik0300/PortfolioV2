import Python from "@/public/assets/icons/python.svg";
import Azure from "@/public/assets/icons/azure-icon.svg";
import Css from "@/public/assets/icons/css.svg";
import Docker from "@/public/assets/icons/docker.svg";
import Github from "@/public/assets/icons/github.svg";
import Html from "@/public/assets/icons/html.svg";
import Javascript from "@/public/assets/icons/javascript.svg";
import Jest from "@/public/assets/icons/jest.svg";
import MongoDb from "@/public/assets/icons/mongodb.svg";
import Next from "@/public/assets/icons/next-js.svg";
import Node from "@/public/assets/icons/nodejs.svg";
import React from "@/public/assets/icons/react.svg";
import Redux from "@/public/assets/icons/redux.svg";
import MySql from "@/public/assets/icons/mysql.svg";
import Tailwind from "@/public/assets/icons/tailwind-css.svg";
import Typescript from "@/public/assets/icons/typescript.svg";

export const SKILL_SECTIONS = [
  {
    section_name: "Programming Languages",
    skills: [
      {
        id: 0,
        name: "Python",
        logo: <Python />,
        sectionEnd: false,
      },
      {
        id: 1,
        name: "HTML",
        logo: <Html />,
        sectionEnd: false,
      },
      {
        id: 2,
        name: "Javascript",
        logo: <Javascript />,
        sectionEnd: false,
      },
      {
        id: 3,
        name: "Typescript",
        logo: <Typescript />,
        sectionEnd: false,
      }
    ],
  },
  {
    section_name: "Libraries and Frameworks",
    skills: [
      {
        id: 0,
        name: "React",
        logo: <React />,
        sectionEnd: false,
      },
      {
        id: 1,
        name: "Node.js",
        logo: <Node />,
        sectionEnd: false,
      },
      {
        id: 2,
        name: "Next.js",
        logo: <Next />,
        sectionEnd: false,
      },
      {
        id: 4,
        name: "Redux",
        logo: <Redux />,
        sectionEnd: true,
      },
    ],
  },
  {
    section_name: "Styling Libraries",
    skills: [
      {
        id: 0,
        name: "Tailwind CSS",
        logo: <Tailwind />,
        sectionEnd: false,
      },
      {
        id: 1,
        name: "CSS",
        logo: <Css />,
        sectionEnd: true,
      }
    ]
  },
  {
    section_name: "Databases",
    skills: [
      {
        id: 0,
        name: "MongoDB",
        logo: <MongoDb />,
        sectionEnd: false,
      },
      {
        id: 1,
        name: "MySQL",
        logo: <MySql />,
        sectionEnd: true,
      },
    ],
  },
    {
    section_name: "Container and Cloud Services",
    skills: [
      {
        id: 0,
        name: "Azure",
        logo: <Azure />,
        sectionEnd: false,
      },
      {
        id: 1,
        name: "Docker",
        logo: <Docker />,
        sectionEnd: true,
      }
    ],
  },
  {
    section_name: "Version Control",
    skills: [
      {
        id: 0,
        name: "Git",
        logo: <Github />,
        sectionEnd: true,
      },
    ],
  }
];
