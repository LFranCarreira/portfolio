import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hypereventImg from "@/public/hyperevent.png";
import admindashboardsImg from "@/public/admindashboard.png";
import pokeversehubImg from "@/public/pokeversehub.png";
import calculatorImg from "@/public/calculator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of natural sciences",
    location: "Buenos Aires, ARG",
    description:
      "I finished my studies and became interested in programming.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec - 2022",
  },
  {
    title: "Javascript and Python developer",
    location: "Remote, FreeCodeCamp",
    description:
      "I studied two of my favorite programming languages.",
    icon: React.createElement(FaReact),
    date: "May - 2023",
  },
  {
    title: "Individual Project",
    location: "Remote, Soy Henry",
    description:
      "I made my first project, PokeVerseHub, with everything I learned during Soy Henry",
    icon: React.createElement(FaReact),
    date: "Oct - 2023",
  },
  {
    title: "Final Project",
    location: "Remote, Soy Henry",
    description:
      "I worked for almost a month as a full stack developer with 6 colleagues, learning new technologies and how to work in a software development team",
    icon: React.createElement(CgWorkAlt),
    date: "Sep - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "HyperEvent",
    description:
      "I worked as a full-stack developer with 6 more students on Henry's bootcamp. In this website you will be able to buy and create tickets for your favourite events.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Sequelize", "JWT"],
    imageUrl: hypereventImg,
    url: 'https://hyperevent-fe.vercel.app'
  },
  {
    title: "Admin Dashboard",
    description:
    "This is the admin dashboard for the hyperEvent page, the admin is able to look all the sales and manage users, events, and comments.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: admindashboardsImg,
    url: 'https://hyper-admin-sigma.vercel.app'
  },
  {     
    title: "Calculator",
    description:
    "This is a Calculator with various functions such as sin, cos, tan, etc.",
      tags: ["HTML", "CSS", 'JavaScript'],
    imageUrl: calculatorImg,
    url: "https://lfrancarreira-calculator.vercel.app/"
  },  
  {
    title: "PokeVerseHub",
    description:
    "This is my first project, where you can search all the existing pokemons, learn their stats, and create new pokemons.",
      tags: ["React", "SQL", 'Sequelize', "CSS Modules", "Redux"],
    imageUrl: pokeversehubImg,
    url: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Prisma",
  "Sequelize",
] as const;
