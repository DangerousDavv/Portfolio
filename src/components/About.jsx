import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div
        className="align-element grid md:grid-cols-2
       items-center gap-16"
      >
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="learn and learn" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            illo, consectetur labore rerum obcaecati tempora tempore, quibusdam
            ratione officiis quis atque? Dignissimos aliquid minus repudiandae
            velit quia voluptas, esse eaque!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
