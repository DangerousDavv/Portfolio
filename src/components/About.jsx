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
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            As a recent Computer Science graduate with a passion for web
            development, I bring a strong foundation in programming and hands-on
            experience with modern technologies. Proficient in React,
            TypeScript, and Tailwind CSS, I excel at creating dynamic,
            responsive user interfaces. My expertise extends to using Vite for
            fast development builds, Axios for efficient data fetching, and
            Redux Toolkit and React Query for robust state management.
            Additionally, I have experience with Node.js, Shadcn UI, Clerk,
            Supabase, Prisma, and Stripe.
          </p>
          
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a passionate learner who loves taking on new challenges. I focus
            on optimizing performance and ensuring accessibility, using my
            skills to create impactful solutions while growing professionally
            and personally.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
