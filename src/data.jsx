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
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-400" />,
    text: "Skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "TailwindCss",
    icon: <RiTailwindCssFill className="h-16 w-16 text-sky-400" />,
    text: "Skilled in Tailwind CSS, adeptly creating visually appealing and responsive designs using utility-first classes for streamlined, efficient styling.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in TypeScript and JavaScript, specializing in developing dynamic, interactive web applications with a focus on smooth user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: <TbBrandNextjs className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in Next.js, developing efficient and interactive server-rendered applications with a strong emphasis on performance, routing, and component-based architecture..",
  },
  {
    id: nanoid(),
    title: "Mongodb",
    icon: <DiMongodb className="h-16 w-16 text-sky-400" />,
    text: "Experienced in MongoDB, efficiently managing and querying NoSQL databases with a focus on flexible data modeling, scalability, and seamless integration into modern applications.",
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16 text-sky-400" />,
    text: "Experienced in Prisma, building efficient and scalable database solutions with a focus on data management, querying, and integration within modern applications.",
  },
  {
    id: nanoid(),
    title: "Supabase",
    icon: <RiSupabaseLine className="h-16 w-16 text-sky-400" />,
    text: "Experienced in Supabase, designing efficient and scalable backend solutions with a focus on real-time data management, querying, and integration into modern applications.",
  },
  {
    id: nanoid(),
    title: "Clerk",
    icon: <SiClerk className="h-16 w-16 text-sky-400" />,
    text: "Experienced in Clerk authentication, implementing secure and user authentication and management solutions with a focus on security, and efficient user experience.",
  },
  {
    id: nanoid(),
    title: "Unreal Engine 5",
    icon: <SiUnrealengine className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in Unreal Engine 5, creating immersive and high-performance 3D environments with a focus on real-time rendering, advanced physics, and interactive gameplay elements.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: pic1,
    url: "https://visionary-genie-bc62ba.netlify.app/",
    github: "https://github.com/DangerousDavv/backroads",
    title: "Backroads",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: pic2,
    url: "https://melodic-starship-fc907c.netlify.app/",
    github: "https://github.com/DangerousDavv/online-store",
    title: "online-store",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: pic3,
    url: "https://store-nextjs-murex.vercel.app",
    github: "https://github.com/DangerousDavv/store-nextjs",
    title: "online-store_nextjs",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
