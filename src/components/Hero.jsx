import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-sky-200 py-24">
      <div
        className="align-element grid
       md:grid-cols-2 items-center gap-8"
      >
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Oliver Liu</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            web developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Nothing is as permanent as a temporary solution that works
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/DangerousDavv">
              <FaGithubSquare
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              ></FaGithubSquare>
            </a>
            <a href="https://www.linkedin.com/in/oliverliu19960316/">
              <FaLinkedin
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              ></FaLinkedin>
            </a>
            <a href="#">
              <FaTwitterSquare
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              ></FaTwitterSquare>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
