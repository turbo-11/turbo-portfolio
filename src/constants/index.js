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
  tailwind,
  nodejs,
  meta,
  workicon,
  workicon2,
  workicon3,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Design",
    icon: web,
  },
  {
    title: "UI / UX",
    icon: web,
  },
  {
    title: "Content Creator",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "techspire",
    icon: workicon,
    iconBg: "#383E56",
    date: "november 2021 - october 2023",
    points: [
      "Building and optimizing user interfaces using HTML, CSS, and JavaScript to create seamless and visually appealing web experiences.",
      "Collaborating with UI/UX designers to translate design concepts into fully functional, responsive web pages.",
      "Enhancing website performance by implementing best practices for speed optimization and efficient coding.",
      "Debugging and troubleshooting issues to ensure smooth functionality across different browsers and devices.",
    ],
  },
  {
    title: "Web Development",
    company_name: "techspire",
    icon: workicon2,
    iconBg: "#E6DEDD",
    date: "october 2023 - present",
    points: [
      "Developing fully functional and dynamic websites with modern web technologies.",
      "Implementing seamless user experiences while ensuring high performance and responsiveness.",
      "Integrating various tools, APIs, and services to enhance functionality and scalability.",
      "Managing the entire web development process from concept to deployment with a focus on quality and efficiency.",
    ],
  },
];

const testimonials = [
  /*{
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
  },*/
];

const projects = [
  {
    name: "Coffe Website",
    description:
      "A modern and responsive website designed for a coffee shop. Built with HTML, CSS, and JavaScript, it features a warm and inviting design, smooth animations, and an intuitive user experience. The website includes sections for the menu, special offers, and contact information, ensuring easy navigation for visitors.",
    tags: [
      /*{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },*/
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Easy2Learn For edu",
    description:
      "Easy2Learn is an innovative educational platform designed to simplify the process of learning English for users of all levels. The platform offers a wide range of interactive lessons, practical exercises, and educational resources aimed at improving reading, writing, listening, and speaking skills.",
    tags: [
      /*{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },*/
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website. Built with HTML, CSS, and JavaScript, it features a clean and professional design, smooth animations, and an intuitive user experience. The website includes sections for projects, skills, and contact information, ensuring easy navigation for visitors.",
    tags: [
      /*{
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },*/
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
