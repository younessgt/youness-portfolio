import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `⁤Hey! ⁤⁤I’m a junior backend dev and software engineer,  building robust scalable solutions with a focus on efficiency and clean code. With a strong foundation in modern web tech like Python, Node.js, Flask, Express.js, Mysql and MongoDB.   ⁤⁤I enjoy breaking down complex problems into technical solutions and optimizing systems.  I thrive in team environments and always try to learn and adapt to new challenges. ⁤⁤My portfolio shows projects where I designed and implemented backend architectures, integrated APIs and ensured smooth user experience.  Let’s build something awesome together!`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `- Creating and customizing e-commerce websites for clients using WordPress and WooCommerce.\n
    - Integrating payment gateways.\n
    - Designing responsive and SEO-friendly websites to optimize user experience and search engine visibility.\n
    - Providing ongoing maintenance, updates, and troubleshooting for client websites.`,
    technologies: ["WordPress", "WooCommerce", "CSS", "Elementor"],
  },
  {
    year: "2023 - 2024",
    role: "Backend Developer Student",
    company: "Alx Program",
    description: `- Developing projects from inception to production, following agile practices.\n
    - Defining user stories, then translated them into actionable features for development.\n
    - Creating flowcharts and designing data model diagrams (SQLBDM) to visualize the project workflow and manage data.\n
    - Working within architectural frameworks to ensure project alignment.\n
    - Following the MVP (Minimum Viable Product) approach to focus on delivering the core functionalities.\n
    - Developing mockups to visualize key features and gather early feedback.\n
    - Writing unit tests for JavaScript using Jest and for Python using Unittest to ensure code quality and reliability.\n
    - Using Git as version control for collaboration, and managing pull requests for code review.\n
    - Designing secure and monitored web infrastructure diagrams to visualize data flow (Eraser).\n
    - Configuring web and application servers, implementing firewalls, and integrating load balancers for optimized system performance.\n
    - Monitoring servers using Datadog and documenting incidents through postmortem reports to improve resilience.\n
    `,
    technologies: [
      "HTML",
      "CSS",
      "MongoDb",
      "MySQL",
      "Python",
      "JavaScript",
      "Redis",
      "Flask",
      "Docker",
      "Git",
      "Unittest",
      "Datadog",
    ],
  },
];

export const PROJECTS = [
  {
    title: "DigiBank",
    image: project1,
    description:
      "DigiBank is an online banking web application designed to emulate the core functionalities of a bank's online service. Our application offers users the ability to manage their finances conveniently through the web. DigiBank provides a secure, intuitive platform for a variety of banking activities, all accessible from the comfort of your home or office.",
    technologies: [
      "HTML",
      "CSS",
      "Js",
      "Python",
      "MongoDB",
      "Flask",
      "Redis",
      "Swagger",
    ],
    githubLink: "https://github.com/younessgt/DigiBank",
    youtubeLink:
      "https://www.youtube.com/watch?v=91odUzZi818&ab_channel=YounessMerzak",
  },
  {
    title: "CarRental",
    image: project2,
    description:
      "CarRental App is a web application designed to streamline the car rental process. This platform offers a user-friendly interface for customers to browse, reserve, and rent vehicles with ease.",
    technologies: ["HTML", "CSS", "Js", "Python", "Mysql", "Flask"],
    githubLink: "https://github.com/younessgt/CarRental",
    mediumLink:
      "https://medium.com/@youness.merzak123/welcome-to-carrental-web-application-badfa48a31c6",
  },
  {
    title: "TourNest",
    image: project3,
    description:
      "TourNest is a travel booking website where users can explore various tours, view detailed information about destinations, durations, and pricing, and book tours easily. The website includes interactive maps to enhance user experience, and it provides robust features for managing user profiles and tracking bookings.",
    technologies: [
      "HTML",
      "CSS",
      "Pug",
      "NodeJs",
      "MongoDb",
      "ExpressJs",
      "Stripe",
      "JWT",
      "leaflet",
      "EsBulid",
      "Postman",
    ],
    githubLink: "https://github.com/younessgt/TourNest",
  },
  // {
  //   title: "Social Media",
  //   image: project4,
  //   description:
  //     "Social media platform with features such as user profiles, posts, comments, and likes.",
  //   technologies: ["HTML", "CSS", "Js", "Python", "Mongodb", "Flask"],
  //   githubLink: "#",
  // },
];

export const CONTACT = {
  address: "Rabat Morocco ",
  phoneNo: "+212 668 34 48 06",
  email: "cv.merzak@gmail.com",
};
