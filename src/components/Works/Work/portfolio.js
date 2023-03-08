import cafe from "../portfolioImg/cafe.png";
import cny from "../portfolioImg/cny.png";
import dv from "../portfolioImg/dv.png";
import portfolioPic from "../portfolioImg/portfolio.png";
import library from "../portfolioImg/library.png";

const portfolio = [
  {
    id: "portfolio",
    projectName: "Portfolio developed with React",
    tags: ["React", "Figma", "Sass", "Responsive", "Animation"],
    description:
      "The page you're seeing right now. Designed with Figma and developed with React.",
    repoLink: "https://github.com/TingtingWeiIWD/portfolio",
    liveLink: "https://tingtingwei.net",
    image: portfolioPic,
    themeColor: "#F8820A",
  },
  {
    id: "cny",
    projectName: "Lunar New Year Home Party APP with React",
    tags: ["React", "Mobile Only"],
    description:
      "A little Application for my home party, to give my friends instructions about all they need to know on that day. Developed at the very beginning of my React course and for mobile screens only. Just for fun!",
    repoLink: "https://github.com/TingtingWeiIWD/partyApp",
    liveLink: "https://party-app-woad.vercel.app/",
    image: cny,
    themeColor: "#F8820A",
  },

  {
    id: "dv",
    projectName: "Customer Satisfaction Report Dashboard for CanJet with D3.js",
    tags: ["D3.js"],
    description:
      "Group project. Data visualization with interactions. Responsible for client brief processing, chart making and page layout.",
    repoLink: "https://github.com/TingtingWeiIWD/CustomerDashboard",
    liveLink: "https://customer-dashboard-five.vercel.app/",
    image: dv,
    themeColor: "#F8820A",
  },
  {
    id: "library",
    projectName: "UI Pattern Library for CanJet",
    tags: ["UI Design"],
    description:
      "Group project. Designed UI pattern library for CanJet Airline. I made the prototype with XD for group members to code",
    repoLink: "https://github.com/TingtingWeiIWD/ui-Library",
    liveLink: "https://ui-library-kohl.vercel.app/",
    image: library,
    themeColor: "#F8820A",
  },
  {
    id: "cafe",
    projectName: "Online Cafe Store with Vanilla JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "Powerpoint"],
    description:
      "First semester school project. Designed the page layout with powerpoint. Responsive and some hover effects.That's when I discovered my passion for front-end development.",
    repoLink: "https://github.com/TingtingWeiIWD/cafeproject",
    liveLink: "https://iwd-cafe.vercel.app/",
    image: cafe,
    themeColor: "#F8820A",
  },
  // {
  //   id: "wp",
  //   projectName: "Portfolio developed with WordPress",
  //   tags: ["Design + Development"],
  //   description:
  //     "School project for portfolio. Built the page with elementor. Please ignore the content because I've learn more about myself now.",
  //   repoLink: "",
  //   liveLink: "",
  //   image: cafe,
  //   themeColor: "#F8820A",
  // },
];

export default portfolio;
