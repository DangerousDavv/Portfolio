import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useState } from "react";

const ProjectsCard = ({ id, url, img, github, title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const longComment = text.length > 150;
  const displayText =
    longComment && !isExpanded ? `${text.slice(0, 150)}...` : text;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{displayText}</p>
        {longComment && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 mt-2 hover:underline"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
