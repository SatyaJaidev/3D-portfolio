import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    capgemini,
    signzy,
    port,
    sushi,
    devsecops,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "CAPGEMINI",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Developed a real-time E-commerce platform using the MERN stack, RESTful APIs, and SQL databases, serving 1,000+ unique visitors and boosting user retention by 20%.",
        "Optimized performance using Google Page Analytics, Dynatrace, and AWS CloudWatch, reducing page load time by 15%, increasing user engagement by 25%, and lowering bounce rates by 10%.",
        "Collaborated with the backend team to implement web services and containerized deployments using Core Java, Spring Boot, MySQL, and Docker, reducing manual processing time by 30%.",
      ],
    },
    {
      title: "Full Stack Intern",
      company_name: "SIGNZY",
      icon: signzy,
      iconBg: "#383E56",
      date: "May 2022 - Nov 2022",
      points: [
        "Developed Fintech Features using Node.js and MongoDB, including user authentication and transaction management, increasing system reliability by 25%.",
        "Built and tested RESTful APIs with Express.js, improving data exchange efficiency and reducing response times by 20%.",
        "Designed responsive and user friendly front-end components with React.js, enhancing user engagement by 15%, and managed MongoDB databases to handle 10,000+ daily financial transactions with zero inconsistencies.",
      ],
    },
  ]; 
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ]; 
  
  const projects = [
    {
      name: "2D Portfolio using React",
      description:
        "This project is a 2D portfolio website developed using React, designed to showcase skills, projects, and achievements in a visually engaging manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://satyajaidev-portfolio.netlify.app/",
    },
    {
      name: "SushiMan",
      description:
        "The SushiMan website is a responsive project with CSS variables, modular CSS, and animations, featuring sections like Navigation, Hero, and About Us.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: sushi,
      source_code_link: "https://github.com/SatyaJaidev/Html-and-css-Website",
    },
    {
      name: "DevSecOps",
      description:
        "This project delivers a DevSecOps automation pipeline using Waterfall for initial setup and Scrum for iterative feature enhancement and role integration.",
      tags: [
        {
          name: "llm",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
        {
          name: "AWS GuardDuty",
          color: "red-text-gradient",
        },
      ],
      image: devsecops,
      source_code_link: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };