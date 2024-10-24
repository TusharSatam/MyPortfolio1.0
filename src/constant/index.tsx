import tepsThumbnail from "@/assets/images/tepsThumbnail.png";
import tepsThumbnail2 from "@/assets/images/teps2.png";
import tepsThumbnail3 from "@/assets/images/teps3.png";
import treatothumbnail from "@/assets/images/TreatoThumbnail.png";
import treato2 from "@/assets/images/treato2.png";
import treato3 from "@/assets/images/treato3.png";
import treato4 from "@/assets/images/treato4.png";
import voodle2 from "@/assets/images/voodle2.png";
import voodle3 from "@/assets/images/voodle3.png";
import voodle4 from "@/assets/images/voodle4.png";
import sukriya2 from "@/assets/images/sukriya2.png";
import sukriya3 from "@/assets/images/sukriya3.png";
import sukriya4 from "@/assets/images/sukriya4.png";
import FirebaseIcon from "@/assets/icons/firebaseIcon.svg";
import Razorpay from "@/assets/icons/razorpayIcon.svg";
import sukriyaThumbnail from "@/assets/images/sukriyaThumbnail.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import JavascriptIcon from "@/assets/icons/javascript-icon.svg";
import TypescriptIcon from "@/assets/icons/typescript-icon.svg";
import ReactjsIcon from "@/assets/icons/reactjs-icon.svg";
import NodejsIcon from "@/assets/icons/nodejs-icon.svg";
import MongodbIcon from "@/assets/icons/mongodb-icon.svg";
import ExpressIcon from "@/assets/icons/express-icon.svg";
import NextjsIcon from "@/assets/icons/nextjs-icon.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import RQuery from "@/assets/icons/RQuery.svg";
import GSAPICON from "@/assets/icons/gsap.svg";
import ShadcnUI from "@/assets/icons/ShadcnUI.svg";
import Framermotion from "@/assets/icons/framermotion.svg";
import AndroidStudioIcon from "@/assets/icons/androidstudio.svg";
import voodleThumbnail from "@/assets/images/VoodleThumbnail.png";
import TailwindIcon from "@/assets/icons/tailwind-icon.svg";
import HtmlIcon from "@/assets/icons/html-icon.svg";
import CssIcon from "@/assets/icons/css-icon.svg";
import CricketIcon from "@/assets/icons/cricket-icon.svg";
import FootballIcon from "@/assets/icons/ball-football-icon.svg";
import MusicIcon from "@/assets/icons/headphone-icon.svg";
import TravelIcon from "@/assets/icons/travelling-icon.svg";
import ChessIcon from "@/assets/icons/chess-pawn-icon.svg";
import CodingIcon from "@/assets/icons/CodingIcon.svg";
import ReadingIcon from "@/assets/icons/book-icon.svg";
import WritingIcon from "@/assets/icons/edit-document-icon.svg";

// ---------- HOBBIES ----------- //

export const MY_HOBBIES = [
  {
    hobby: "Coding",
    icon: <CodingIcon className="size-4" />,
    top: "5%",
    left: "10%",
  },
  {
    hobby: "Football",
    icon: <FootballIcon className="size-4" />,
    top: "5%",
    left: "5%",
  },
  {
    hobby: "Cricket",
    icon: <CricketIcon className="size-4" />,
    top: "5%",
    left: "50%",
  },
  {
    hobby: "Gaming",
    icon: <ChessIcon className="size-4" />,
    top: "35%",
    left: "10%",
  },
  {
    hobby: "Reading",
    icon: <ReadingIcon className="size-4" />,
    top: "40%",
    left: "35%",
  },
  {
    hobby: "Writing",
    icon: <WritingIcon className="size-4" />,
    top: "45%",
    left: "70%",
  },
  {
    hobby: "Travel",
    icon: <TravelIcon className="size-4" />,
    top: "65%",
    left: "5%",
  },
  {
    hobby: "Music",
    icon: <MusicIcon className="size-4" />,
    top: "45%",
    left: "70%",
  },
];

// -------  PORTFOLIO PROJECTS ------- //

export const PORTFOLIO_PROJECT = [
  {
    company: "Sukriya",
    year: "Aug,2024 - Oct,2024",
    title: "Know the details about any contry",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "ReactJS", icon: <ReactjsIcon /> },
      { tech: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
    results: [
      {
        title:
          "Developed a freelance platform connecting artists with job opportunities.",
      },
      {
        title:
          "Implemented features for job posting, artist profiles, and application submissions.",
      },
      {
        title:
          "Designed a project management section for artists and customers to oversee their projects.",
      },
      {
        title:
          "Created a responsive and user-friendly interface using Next.js and Tailwind CSS.",
      },
    ],
    link: "http://shukriya-fe-beige.vercel.app/",
    image: sukriyaThumbnail,
    slug: "projects/sukriya",
    isVideoAvailable: false,
    appType: "web",
  },
  {
    company: "Voodle",
    year: "May, 2024 - July, 2024",
    title: "Global Social Media Platform",
    techStacks: [
      { tech: "React Native", icon: <ReactjsIcon /> },
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "Android Studio", icon: <AndroidStudioIcon /> },
    ],
    results: [
      {
        title:
          "Developed a global social media platform enabling users to connect through posts, photos, and videos.",
      },
      // {
      //   title: "Implemented multimedia posting features for users to upload and share photos and videos."
      // },
      {
        title:
          "Designed user profiles showcasing posts, followers, and media galleries.",
      },
      {
        title:
          "Created an interactive feed displaying real-time updates from followed users with like, comment, and share options.",
      },
      {
        title: "Integrated real-time push notifications",
      },
    ],
    link: "http://voodle-app-url.com", // Replace with the actual URL
    image: voodleThumbnail, // Replace with your Voodle thumbnail image variable
    slug: "projects/voodle",
    isVideoAvailable: false,
    appType: "app",
  },
  {
    company: "Treato",
    year: "Sep,2023 - ONGING",
    title: "Wellness and Fitness Services",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "ReactJS", icon: <ReactjsIcon /> },
      { tech: "NodeJS", icon: <NodejsIcon /> },
      { tech: "MongoDB", icon: <MongodbIcon /> },
      { tech: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
    results: [
      {
        title:
          "Implemented search, filtering, and location-based salon browsing for enhanced user experience.",
      },
      {
        title:
          "Integrated Razorpay for secure online payments for salon bookings.",
      },
      {
        title:
          "Built tools for salon owners to manage appointments and client engagement.",
      },
      {
        title:
          "Build a responsive, user-friendly interface with React.js, Redux and Tailwind CSS.",
      },
    ],
    image: treatothumbnail,
    slug: "projects/treato",
    isVideoAvailable: true,
    videoURL: "https://youtu.be/3FYKbLmdBsw",
    appType: "web",
  },
  {
    company: "TEPS",
    year: "Aug,2023- Sep,2023",
    title: "A Collaborative Platform for Teachers",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "ReactJS", icon: <ReactjsIcon /> },
      { tech: "NodeJS", icon: <NodejsIcon /> },
      { tech: "MongoDB", icon: <MongodbIcon /> },
      { tech: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
    results: [
      {
        title:
          "Built a collaborative platform for teachers to share strategies and notes.",
      },
      {
        title:
          "Developed features to allow users to read, bookmark, and save strategies.",
      },
      {
        title:
          "Implemented a responsive and user-friendly UI using React, Context API, and Tailwind CSS.",
      },
    ],
    link: "https://teps.school",
    image: tepsThumbnail,
    slug: "projects/teps",
    isVideoAvailable: false,
    appType: "web",
  },
];

// ------------- MY SKILLSET ----------- //

export const TOOLBOX = [
  {
    tool: "JavaScript",
    icon: <JavascriptIcon className="size-4 md:size-6" />,
  },
  {
    tool: "TypeScript",
    icon: <TypescriptIcon className="size-4 md:size-6" />,
  },
  {
    tool: "ReactJS",
    icon: <ReactjsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "NodeJS",
    icon: <NodejsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "ExpressJS",
    icon: <ExpressIcon className="size-4 md:size-6" />,
  },
  {
    tool: "NextJs",
    icon: <NextjsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "MongoDB",
    icon: <MongodbIcon className="size-4 md:size-6" />,
  },
  {
    tool: "Redux",
    icon: <ReduxIcon className="size-4 md:size-6" />,
  },
  {
    tool: "React Query",
    icon: <RQuery className="size-4 md:size-6" />,
  },

  {
    tool: "GSAP",
    icon: <GSAPICON className="size-4 md:size-6" />,
  },
  {
    tool: "shadcn/ui",
    icon: <ShadcnUI className="size-4 md:size-6" />,
  },
  {
    tool: "Framer Motion",
    icon: <Framermotion className="size-4 md:size-6" />,
  },
  {
    tool: "tailwind CSS",
    icon: <TailwindIcon className="size-4 md:size-6" />,
  },
  {
    tool: "HTML5",
    icon: <HtmlIcon className="size-4 md:size-6" />,
  },
  {
    tool: "CSS3",
    icon: <CssIcon className="size-4 md:size-6" />,
  },
];

// ------------ PORTFOLIO PROJECTS DETAILS ------------- //

export const PORTFOLIO_PROJECT_DETAILS = [
  {
    projectName: "TEPS",
    slug: "teps",
    description: `TEP School is an innovative platform designed exclusively for educators, fostering a collaborative community where teachers can share strategies, notes, and best practices. The platform enables users to read, bookmark, and save valuable teaching resources, facilitating knowledge-sharing and enhancing professional development. By providing a centralized space for educators to exchange insights, TEP School empowers teachers to enhance their teaching methods and stay connected with the latest trends in education.`,
    features: [
      {
        title:
          "Collaborative space for educators to share strategies and best practices.",
      },
      {
        title:
          "Seamless filter options for users to easily find the resources they need.",
      },
      {
        title:
          "AI-powered assistance: Users can choose a topic, and the AI generates responses or provides more information on that topic using ChatGPT.",
      },
      {
        title:
          "Bookmark and save valuable teaching resources to enhance professional development.",
      },
      {
        title:
          "Personalized page for users to track their progress and resources.",
      },
    ],
    techstack: [
      { tech: "ReactJS", icon: <ReactjsIcon className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      { tech: "NodeJS", icon: <NodejsIcon className="size-4 md:size-6" /> },
      { tech: "ExpressJS", icon: <ExpressIcon className="size-4 md:size-6" /> },
      { tech: "MongoDB", icon: <MongodbIcon className="size-4 md:size-6" /> },
    ],
    images: [tepsThumbnail, tepsThumbnail2, tepsThumbnail3],
    futurePlans: [],
    link: "https://teps.school",
    isVideoAvailable: false,
  },
  {
    projectName: "Treato",
    slug: "treato",
    description: `Treato is India’s first subscription-free, web-based beauty platform that connects salon businesses with consumers; by managing appointments, consumer ratings & reviews, marketing and creating client databases.
And for the users the platform enables them to browse through beauty salons based on the location, reviews, photos & descriptions, compare the services and book appointments. `,
    features: [
      {
        title:
          "Seamless salon browsing: Users can browse salons based on location, reviews, photos, and service descriptions.",
      },
      {
        title:
          "User-friendly appointment booking system: Easily book appointments with salons, comparing services and availability.",
      },
      {
        title:
          "Dynamic search and filtering: Advanced search functionality allows users to find salons based on specific criteria.",
      },
      {
        title:
          "Salon management tools: Salons can manage appointments, consumer engagement, and create client databases.",
      },
      {
        title:
          "Consumer reviews and ratings: Users can leave reviews and ratings, providing valuable feedback to salons and other users.",
      },
    ],
    techstack: [
      { tech: "ReactJS", icon: <ReactjsIcon className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      { tech: "NodeJS", icon: <NodejsIcon className="size-4 md:size-6" /> },
      { tech: "ExpressJS", icon: <ExpressIcon className="size-4 md:size-6" /> },
      { tech: "MongoDB", icon: <MongodbIcon className="size-4 md:size-6" /> },
      { tech: "Razorpay", icon: <Razorpay className="size-4 md:size-6" /> },
    ],
    images: [treatothumbnail, treato2, treato3, treato4],
    futurePlans: [

    ],
    link: "https://www.youtube.com/watch?v=3FYKbLmdBsw",
    isVideoAvailable: true,
    appType: "web",
  },
  {
    projectName: "Sukriya",
    slug: "sukriya",
    description:
      "Sukriya is a dynamic freelance platform designed to connect artists with customers seeking creative talent. It provides a space for artists to showcase their skills and earn money by applying for job requests posted by customers. The platform streamlines the entire process, from job posting to project completion, empowering artists to find opportunities based on their creative talents. Built using the MERN stack, Sukriya features a responsive design, seamless navigation, and real-time updates for both artists and customers.",
    features: [
      {
        title:
          "Job posting system for customers to post freelance projects with specific requirements and deadlines.",
      },
      {
        title:
          "Artist profiles with portfolios, showcasing previous work and skills.",
      },
      {
        title:
          "Job applications with proposals and timelines, allowing artists to apply directly from their profiles.",
      },
      {
        title:
          "Real-time updates and notifications when jobs are posted, applied for, or completed.",
      },
      {
        title:
          "Personalized dashboards for both customers and artists to manage job posts, applications, and job history.",
      },
      {
        title:
          "Responsive design optimized for both desktop and mobile platforms.",
      },
      // { title: "Secure payment integration to handle transactions between artists and customers." },
    ],
    techstack: [
      { tech: "NextJS", icon: <NextjsIcon className="size-4 md:size-6" /> },
      { tech: "React Query", icon: <RQuery className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      { tech: "NodeJS", icon: <NodejsIcon className="size-4 md:size-6" /> },
      { tech: "ExpressJS", icon: <ExpressIcon className="size-4 md:size-6" /> },
      { tech: "MongoDB", icon: <MongodbIcon className="size-4 md:size-6" /> },
    ],
    images: [sukriyaThumbnail, sukriya2, sukriya3, , sukriya4],
    futurePlans: [],
    link: "https://shukriya-fe-beige.vercel.app/",
    isVideoAvailable: false,
    appType: "web",
  },
  {
    projectName: "Voodle",
    slug: "voodle",
    description:
      "Voodle is a global social media platform that allows users to connect by sharing photos and videos, following others, and engaging with interactive feeds. It offers a seamless experience for users to showcase their multimedia content and stay updated with their network.",
    features: [
      {
        title:
          "Responsive mobile application for Android and iOS, providing a seamless multimedia sharing experience.",
      },
      {
        title:
          "Intuitive user interface for easy navigation and interaction with photos, videos, and posts.",
      },
      {
        title:
          "User profiles displaying personalized posts, followers, and multimedia galleries.",
      },
      {
        title:
          "Interactive feeds that show real-time updates from followed users with options to like, comment, and share.",
      },
      {
        title:
          "Real-time push notifications for likes, comments, follows, and other user interactions.",
      },
      {
        title:
          "Follow system that allows users to follow others and stay updated with their content in personalized feeds.",
      },
      {
        title:
          "Multimedia upload functionality enabling users to post photos and videos on their profiles and feeds.",
      },
    ],
    techstack: [
      {
        tech: "React Native",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
      { tech: "React Query", icon: <RQuery className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Firebase",
        icon: <FirebaseIcon className="size-4 md:size-6" />,
      },
      { tech: "NodeJS", icon: <NodejsIcon className="size-4 md:size-6" /> },
      { tech: "ExpressJS", icon: <ExpressIcon className="size-4 md:size-6" /> },
      { tech: "MongoDB", icon: <MongodbIcon className="size-4 md:size-6" /> },
    ],
    images: [voodleThumbnail, voodle2, voodle3, , voodle4],
    futurePlans: [],
    link: "https://play.google.com/store/apps/details?id=com.voodle&pcampaignid=web_share",
    isVideoAvailable: false,
    appType: "app",
  },
];

// ----------------  SOCIAL LINKS -------------- //

export const SOCIAL_LINKS = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/tushar-satam-0a1478268/",
  },
  { title: "Github", href: "https://github.com/TusharSatam" },
  { title: "Gmail", href: "mailto:tsatam91@gmail.com" },
];

// ---------------- FEATUERS ----------------- //

export const WORDS = [
  "Accessable",
  "Reliable",
  "Optimized",
  "Searchable",
  "Secure",
  "User Friendly",
  "Interactive",
  "Scalable",
  "Maintainable",
  "Performant",
  "Usable",
];

// ------------- TESTIMONIALS -------------- //

export const TESTIMONIALS = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];
