import cafe from "../portfolioImg/cafe.png";
import cny from "../portfolioImg/cny.png";
import dv from "../portfolioImg/dv.png";
import portfolioPic from "../portfolioImg/portfolio.png";

const portfolio = [
  {
    id: "cafe",
    projectName: "Cafe Store with Vanilla JavaScript",
    tags: ["Design + Development", "Basic HTML/CSS/JavaScript"],
    description:
      "First semester school project. Designed the page layout with powerpoint. Responsive and some hover effects. That's when I found my passion for front-end.",
    repoLink: "https://github.com/TingtingWeiIWD/cafeproject",
    liveLink: "https://iwd-cafe.vercel.app/",
    image: cafe,
    themeColor: "#F8820A",
  },
  {
    id: "dv",
    projectName: "Customer Satisfaction Report Dashboard for CanJet with D3.js",
    tags: ["Data Visualization"],
    description:
      "Group project. Data visualization with interactions. Responsible for client brief processing, UI pattern library, chart making and page layout.",
    repoLink: "https://github.com/TingtingWeiIWD/CuscomerDashboard",
    liveLink: "https://cuscomer-dashboard.vercel.app/",
    image: dv,
    themeColor: "#F8820A",
  },
  {
    id: "cny",
    projectName: "Lunar New Year Home Party APP with React",
    tags: ["Design + Development"],
    description:
      "A little Application for my home party, to give my friends instructions about all they need to know on that day. Developed at the very beginning of my React course and for mobile screens only. Just for fun!",
    repoLink: "https://github.com/TingtingWeiIWD/partyApp",
    liveLink: "https://party-app-woad.vercel.app/",
    image: cny,
    themeColor: "#F8820A",
  },
  {
    id: "portfolio",
    projectName: "Portfolio developed with React",
    tags: ["Design + Development"],
    description:
      "The page you're seeing right now. Designed with Figma and developed with React",
    repoLink: "https://github.com/TingtingWeiIWD/portfolio",
    liveLink: "https:/tingtingwei.net",
    image: portfolioPic,
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
