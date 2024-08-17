import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiVite } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-400" />,
    text: "Experienced in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-sky-400" />,
    text: "Experienced n TypeScript and JavaScript, specializing in developing dynamic, interactive web applications with a focus on smooth user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: "Experienced in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: <TbBrandNextjs className="h-16 w-16 text-sky-400" />,
    text: "Experienced  in Next.js, developing efficient and interactive server-rendered applications with a strong emphasis on performance, routing, and component-based architecture..",
  },
  {
    id: nanoid(),
    title: "Vite",
    icon: <SiVite className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Vite, leveraging its fast build times and optimized development server to create efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Redux, effectively managing application state and data flow to create efficient and interactive front-end applications with a strong emphasis on component-based architecture and predictable state management.",
  },
  {
    id: nanoid(),
    title: "React Query",
    icon: <SiReactquery className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in React Query, utilizing its features to manage server-state efficiently, enhance application performance, and streamline data fetching and caching in React applications.",
  },
  {
    id: nanoid(),
    title: "Mongodb",
    icon: <DiMongodb className="h-16 w-16 text-sky-400" />,
    text: "Intermediate  in MongoDB, efficiently managing and querying NoSQL databases with a focus on flexible data modeling, scalability, and seamless integration into modern applications.",
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Prisma, building efficient and scalable database solutions with a focus on data management, querying, and integration within modern applications.",
  },
  {
    id: nanoid(),
    title: "Supabase",
    icon: <RiSupabaseLine className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Supabase, designing efficient and scalable backend solutions with a focus on real-time data management, querying, and integration into modern applications.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-400" />,
    text: "Intermediate  skills in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "TailwindCss",
    icon: <RiTailwindCssFill className="h-16 w-16 text-sky-400" />,
    text: "Intermediate skillsin Tailwind CSS, adeptly creating visually appealing and responsive designs using utility-first classes for streamlined, efficient styling.",
  },
  {
    id: nanoid(),
    title: "Shadcn Ui",
    icon: <SiShadcnui className="h-16 w-16 text-sky-400" />,
    text: "Intermediate skillsin Shadcn UI for crafting visually appealing and responsive websites that deliver optimal user experiences with a focus on modern design principles and streamlined UI components.",
  },
  {
    id: nanoid(),
    title: "Axios Http",
    icon: <SiAxios className="h-16 w-16 text-sky-400" />,
    text: "Intermediate skills in Axios for managing HTTP requests, ensuring efficient data fetching and integration that supports visually appealing and responsive websites.",
  },
  {
    id: nanoid(),
    title: "Clerk",
    icon: <SiClerk className="h-16 w-16 text-sky-400" />,
    text: "Intermediate  in Clerk authentication, implementing secure and user authentication and management solutions with a focus on security, and efficient user experience.",
  },
  {
    id: nanoid(),
    title: "Stripe",
    icon: <SiRedux className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Stripe, expertly handling payment processing and financial transactions to create seamless and secure e-commerce experiences, with a focus on integration, customization, and optimizing user interactions within applications.",
  },
  {
    id: nanoid(),
    title: "Unreal Engine 5",
    icon: <SiUnrealengine className="h-16 w-16 text-sky-400" />,
    text: "Intermediate in Unreal Engine 5, creating immersive and high-performance 3D environments with a focus on real-time rendering, advanced physics, and interactive gameplay elements.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: pic1,
    url: "https://visionary-genie-bc62ba.netlify.app/",
    github: "https://github.com/DangerousDavv/backroads",
    title: "Backroads",
    text: "A landing page with a visually appealing navbar featuring links to Home, Experiences, About, Services and Tours. Highlight key areas with engaging visuals and interactive elements: showcase popular tours, unique activities, and curated travel packages. Use a vibrant color scheme, high-quality images, and a responsive design to ensure an inviting, user-friendly experience across devices.",
  },
  {
    id: nanoid(),
    img: pic2,
    url: "https://melodic-starship-fc907c.netlify.app/",
    github: "https://github.com/DangerousDavv/online-store",
    title: "online-store",
    text: "An e-commerce web application leverages React, and JavaScript to deliver a dynamic user experience. It incorporates Tailwind CSS for responsive design and Daisy UI for polished components. Vite ensures fast development builds, and Axios handles HTTP requests. Redux Toolkit and React Query manage state and data fetching, providing a solution for an interactive shopping cart and secure checkout process. The application supports dynamic product pages, search, and filters, all optimized for performance and accessibility.",
  },
  {
    id: nanoid(),
    img: pic3,
    url: "https://store-nextjs-murex.vercel.app",
    github: "https://github.com/DangerousDavv/store-nextjs",
    title: "online-store_nextjs",
    text: "An e-commerce web application uses React, TypeScript, Node.js, Tailwind CSS, Shadcn UI, Clerk, Supabase, Prisma, and Stripe. It offers secure user registration, an interactive shopping cart, and Stripe-powered checkout. Tailwind CSS ensures responsive design, while Shadcn UI adds polished components. Supabase and Prisma manage the database, supporting dynamic product pages, search, and filters, all optimized for performance and accessibility.",
  },
];
