import React from "react";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, This is Sawan Kumar Das and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> programmer who is
              simply pursuing his hidden passion.
            </p>
            <br />
            <p>
              I completed MSc in Computational Physics from Central University
              of Punjab, Bathinda. Then, I pursued researched in Computational
              Material Science, hence published the scientific paper. In the
              pursuit of my passion, I ended up in becoming Software Engineer.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-amber-400">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 😎
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-3 mt-3 shadow-lg text-gray-600 rounded font-semibold"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <Image
              src="/frontend_guy.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
