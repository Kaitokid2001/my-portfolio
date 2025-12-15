import { StaticImageData } from "next/image";

import IconHTML from "../public/icons/html.svg";
import IconJavaScript from "../public/icons/javascript.svg";
import IconTypeScript from "../public/icons/typescript.svg";
import IconReactJS from "../public/icons/react.svg";
import IconNextJS from "../public/icons/nextjs.svg";
import IconNodeJS from "../public/icons/nodejs.svg";
import IconCSS from "../public/icons/css.svg";
import IconTailwindCSS from "../public/icons/tailwindcss.svg";
import IconSCSS from "../public/icons/sass.svg";
import IconGit from "../public/icons/github.svg";
import IconFigma from "../public/icons/figma.svg";

import Lesson from "../assets/images/lesson.png";
import ShineSmile from "../assets/images/shinesmile.png";
import Tiktok from "../assets/images/tiktok.png";

export type ProjectItem = {
  image: StaticImageData;
  title: string;
  icons: StaticImageData[]; 
};

export type Project = {
  project: ProjectItem[];
};

export const projects: Project[] = [
  {
    project: [
      { image: Lesson, title: "Lesson", icons: [IconHTML, IconCSS, IconJavaScript, IconGit, IconFigma]},
    ],
  },
  {
    project: [
      { image: ShineSmile, title: "Shine Smile", icons: [IconHTML, IconTailwindCSS, IconJavaScript, IconGit, IconFigma] },
    ],
  },
  {
    project: [
      { image: Tiktok, title: "Tiktok", icons: [IconHTML, IconSCSS, IconJavaScript, IconReactJS, IconNodeJS] },
    ],
  },
];