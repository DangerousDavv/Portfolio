import { links } from "../data";

function Footer() {
  return (
    <nav className="bg-sky-200">
      <div
        className="py-4 flex flex-col 
          sm:flex-row sm:gap-x-16 sm:items-center sm:justify-center sm:py-8"
      >
        <div className="flex gap-x-8 font-bold text-center">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-blue-400 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default Footer;
