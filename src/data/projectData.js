import devtalles1 from "../assets/projects/capturas/devtalles1.png";
import devtalles2 from "../assets/projects/capturas/devtalles2.png";
import devtalles3 from "../assets/projects/capturas/devtalles3.png";
import ecos1 from "../assets/projects/capturas/ecos1.png";
import ecos2 from "../assets/projects/capturas/ecos2.png";
import ecos3 from "../assets/projects/capturas/ecos3.png";
import ecos4 from "../assets/projects/capturas/ecos4.png";
import ecos5 from "../assets/projects/capturas/ecos5.png";
import pM1 from "../assets/projects/capturas/pM1.png";
import pM2 from "../assets/projects/capturas/pM2.png";
import pM3 from "../assets/projects/capturas/pM3.png";
import rifaSorteo1 from "../assets/projects/capturas/rifaSorteo1.png";
import rifaSorteo2 from "../assets/projects/capturas/rifaSorteo2.png";
import rifaSorteo3 from "../assets/projects/capturas/rifaSorteo3.png";
import tmdb1 from "../assets/projects/capturas/tmdb1.png";
import tmdb2 from "../assets/projects/capturas/tmdb2.png";
import tmdb3 from "../assets/projects/capturas/tmdb3.png";
import turnos1 from "../assets/projects/capturas/turnos1.png";
import turnos2 from "../assets/projects/capturas/turnos2.png";
import turnos3 from "../assets/projects/capturas/turnos3.png";
import turnos4 from "../assets/projects/capturas/turnos4.png";
import turnos5 from "../assets/projects/capturas/turnos5.png";
import comoCasa1 from "../assets/projects/capturas/comoCasa1.jpg";

import comoEnCasa from "../assets/projects/logos/ComoEnCasa.jpeg";
import devTalles from "../assets/projects/logos/DevTallesApp.png";
import ecoSistema from "../assets/projects/logos/Ecosistema.png";
import perfectMentor from "../assets/projects/logos/perfectMentor.png";
import rifasOscar from "../assets/projects/logos/RifasOscar.png";
import tmdb from "../assets/projects/logos/TMDB.png";
import webTurnApp from "../assets/projects/logos/WebTurnApp.png";

import appDiabecop from "../assets/projects/diabecop.png";

export const getProjects = (t) => [
  {
    id: 1,
    category: "mobile",
    title: t('projects.project1.title'),
    desc: t('projects.project1.description'),
    img: [appDiabecop],
    logo: appDiabecop,
    links: [
      { type: "app",       path: "https://app.diabecop-dev.com.ar/sign-in" },
      { type: "website",   path: "https://diabecop-dev.com.ar" },
      { type: "playstore", path: "https://play.google.com/store/apps/details?id=com.diabecop" },
    ],
    icons: ["React Native Expo", "AI", "EAS CLI", "Jira", "Slack", "Push Notifications", "Zustand", "Nest JS", "PostgreSQL", "Jwt", "Css", "Next JS", "Typescript", "MercadoPago", "AWS S3", "Docker", "GitHub"],
  },
  {
    id: 2,
    category: "fullstack",
    title: t('projects.project2.title'),
    desc: t('projects.project2.description'),
    img: [turnos1, turnos2, turnos3, turnos4, turnos5],
    logo: webTurnApp,
    links: [
      { type: "github", path: "https://github.com/juan-ma526/App-Turnos-Redux/tree/main/turnos-app" },
      { type: "video",  path: "https://www.youtube.com/watch?v=wwARGlKkVmY" },
    ],
    icons: ["Html", "React", "Redux", "Express", "MongoDB", "Jwt", "Sass", "Javascript"],
  },
  {
    id: 3,
    category: "fullstack",
    title: t('projects.project3.title'),
    desc: t('projects.project3.description'),
    img: [tmdb1, tmdb2, tmdb3],
    logo: tmdb,
    links: [
      { type: "github", path: "https://github.com/juan-ma526/TMDB-V2" },
      { type: "video",  path: "https://www.youtube.com/watch?v=NE1TvG3aA6A" },
      { type: "demo",   path: "https://tmdb-v2-two.vercel.app/" },
    ],
    icons: ["Html", "React", "Express", "PostgreSql", "Jwt", "Css", "Javascript"],
  },
  {
    id: 4,
    category: "ecommerce",
    title: t('projects.project4.title'),
    desc: t('projects.project4.description'),
    img: [comoCasa1],
    logo: comoEnCasa,
    links: [{ type: "github", path: "https://github.com/juan-ma526/Ecommerce-Como-en-Casa" }],
    icons: ["Html", "React", "Redux", "Express", "Postgresql", "Jwt", "Css", "Javascript"],
  },
  {
    id: 5,
    category: "web",
    title: t('projects.project5.title'),
    desc: t('projects.project5.description'),
    img: [ecos1, ecos2, ecos3, ecos4, ecos5],
    logo: ecoSistema,
    links: [
      { type: "github", path: "https://github.com/juan-ma526/Ecosistema-Frontend" },
      { type: "video",  path: "https://youtu.be/fNEaJBhLPkc" },
    ],
    icons: ["Html", "Java17", "Css", "Jwt", "Cloudinary", "MariaDB", "Oauth", "React", "MaterialUI"],
  },
  {
    id: 6,
    category: "web",
    title: t('projects.project6.title'),
    desc: t('projects.project6.description'),
    img: [devtalles1, devtalles2, devtalles3],
    logo: devTalles,
    links: [
      { type: "github", path: "https://github.com/juan-ma526/devtalles-codequest-sorteos" },
      { type: "video",  path: "https://www.youtube.com/watch?v=Pqops93TiPI" },
      { type: "demo",   path: "https://devtalles-codequest-sorteos-gamma.vercel.app/" },
    ],
    icons: ["Html", "NextJs", "Express", "MongoDB", "Jwt", "TailwindCss", "Javascript"],
  },
  {
    id: 7,
    category: "web",
    title: t('projects.project7.title'),
    desc: t('projects.project7.description'),
    img: [rifaSorteo1, rifaSorteo2, rifaSorteo3],
    logo: rifasOscar,
    links: [
      { type: "github", path: "https://github.com/juan-ma526/sorteo-rifa" },
      { type: "video",  path: "https://www.youtube.com/watch?v=WDKeG76QRxU&t=2s" },
    ],
    icons: ["Html", "React", "Express", "MongoDB", "Css", "Javascript"],
  },
  {
    id: 8,
    category: "fullstack",
    title: t('projects.project8.title'),
    desc: t('projects.project8.description'),
    img: [pM1, pM2, pM3],
    logo: perfectMentor,
    links: [{ type: "github", path: "https://github.com/juan-ma526/perfectMentor" }],
    icons: ["Html", "NextJs", "Express", "MongoDB", "Jwt", "TailwindCss", "Typescript", "Javascript"],
  },
];