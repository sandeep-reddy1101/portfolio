import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export const projects = [
  {
    name: "chat-app",
    summary:
      "A bi directional chatting web application, which contains signin, login, contact management, send/receive messages etc.",
    image: "/boruto.png",
    description: [
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    ],
    technologies: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Express JS",
      "MongoDB",
      "Redux toolkit",
      "Socket.IO",
    ],
    github: "https://github.com/sandeep-reddy1101/chat-app-react",
    live: "",
  },
  {
    name: "e-Commerce",
    summary:
      "An e commerce web application, which contains signin, login, products display/search, cart management, stripe payment etc.",
    image: "/kakashi.jpg",
    description: [
      "Developed a robust e-commerce website using React, implementing essential features like user signup, login, product display, search, cart management, and secure checkout with Stripe payment (test) integration. Built the backend API with Express JS to handle user and cart information",
    ],
    technologies: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Express JS",
      "MongoDB",
      "Redux toolkit",
      "Socket.IO",
    ],
    github: "https://github.com/sandeep-reddy1101/e-commerce",
    live: "https://e-commerce-365.netlify.app/",
  },
];

export const socialMedia = [
  { icon: <LinkedInIcon />, name: "LinkedIn", link: "/" },
  { icon: <TwitterIcon />, name: "X", link: "/" },
  { icon: <GitHubIcon />, name: "Github", link: "/" },
];

export const heroInfo = {
  header: "Hey, I'm Sandeep Reddy",
  subHeader:
    "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product",
  buttonName: "Projects",
  link: "#projects",
};

export const logoInfo = {
  name: "Sandeep.",
  link: "/",
  image: "/sandeep.jpg",
};

export const navList = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
];
