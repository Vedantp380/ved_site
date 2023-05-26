"use client";

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
  const handleRedirect = () => {
    window.open(
      "https://pubs.rsc.org/en/content/articlehtml/2021/ra/d0ra10829d",
      "_blank"
    );
  };
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 md:mr-4 tracking-wide">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Discover My Story!
            </h1>
            <p>
              Hi, this is Sawan Kumar Das and I am a{" "}
              <span className="font-bold text-amber-500">{"passionate "}</span>
              and
              <span className="font-bold text-amber-500">{" driven"}</span>{" "}
              Software Engineer. With a background in Computational Physics, my
              journey into software engineering has been transformative.
            </p>
            <br />
            <p>
              After completing my master&apos;s degree in Computational Physics
              from the Central University of Punjab, Bathinda, I delved into
              research on low-dimensional materials at CSIR-NCL, resulting in my
              <span
                className="underline hover:text-amber-500 cursor-pointer"
                onClick={handleRedirect}
              >
                &nbsp;first published paper
              </span>
              .
            </p>
            <br />
            <p>
              However, life took an unexpected turn when my plans to pursue a
              PhD in France were derailed due to the global pandemic. It was
              during this time that I discovered my hidden passion for
              programming and decided to embrace it fully by transitioning into
              the field of software engineering.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-amber-500">
                never stop failing
              </span>{" "}
              and <span className="font-bold text-amber-500">growing </span>
              which I strive to do. Outside of work, I explore new places,
              indulge in cooking traditional{" "}
              <span className="text-amber-500 font-extrabold">ଓଡ଼ିଆ </span>
              (Odia) cuisine, and engage in dynamic training activities. Join me
              on this adventure! 😎
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
              alt="cartoon_vector"
              width={400}
              height={500}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
