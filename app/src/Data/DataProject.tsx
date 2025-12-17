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
  linkDemo: string;
  linkGit: string;
};

export type Project = {
  project: ProjectItem[];
};

export const projects: Project[] = [
  {
    project: [
      { 
        image: Lesson, title: "Lesson", 
        icons: [IconHTML, IconCSS, IconJavaScript, IconGit, IconFigma],
        linkDemo: "https://kaitokid2001.github.io/lesson/",
        linkGit: "https://github.com/Kaitokid2001/lesson",
      },
    ],
  },
  {
    project: [
      { 
        image: ShineSmile, title: "Shine Smile", 
        icons: [IconHTML, IconTailwindCSS, IconJavaScript, IconGit, IconFigma],
        linkDemo: "https://kaitokid2001.github.io/Du_an_TT/",
        linkGit: "https://github.com/Kaitokid2001/Du_an_TT",
      },
    ],
  },
  {
    project: [
      { 
        image: Tiktok, title: "Tiktok", 
        icons: [IconHTML, IconSCSS, IconJavaScript, IconReactJS, IconNodeJS],
        linkDemo: "https://kaitokid2001.github.io/tiktok-ui/",
        linkGit: "https://github.com/Kaitokid2001/tiktok-ui",
      },
    ],
  },
];
