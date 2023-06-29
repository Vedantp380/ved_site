"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { Link as Linki } from "react-scroll/modules";

const skills = [
  "Python",
  "Azure Databricks",
  "Azure Data Factory",
  "Azure Logic Apps",
  "Azure Data Storages",
  "My SQL"
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:py-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 md:mr-4 tracking-wide">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
             Let's start a Q&A about Vedant Pandey.
            </h1>
            <p>
           Q:  Who is Vedant Pandey?{""}
            {/* {" "} */}
              {/* <span className="font-bold text-amber-500">{"passionate "}</span>, */}
              {/* <span className="font-bold text-amber-500">{" curious "}</span> */}
              
              {/* <span className="font-bold text-amber-500">{" driven"}</span>{" "} */}
              <br/>A: Vedant is a passionate and ambitious individual with a degree in Electronics and Communication Engineering from BIT Mesra. They have a strong interest in technology and specialize in data science and software engineering.
              </p>
              <br/>
              <p>
               Q: What professional experiences have Vedant Pandey have?
               <br/> A: Vedant began their professional journey as a Data Science intern at MakeMyTrip, where they gained valuable experience in analyzing and interpreting data to drive business insights. They then transitioned to the role of a Trainee Software Engineer at Mantra Labs, contributing to the development of software solutions. Currently, Vedant serves as a Data Engineer at Arcadis, specializing in designing and optimizing data pipelines and systems.
            </p>
            <br/>
            <p>
            Q: What are Vedant's personal qualities?
            <br/>A: Vedant is a lifelong learner, always eager to stay up-to-date with the latest advancements in technology. They possess a collaborative spirit, enjoying working with others in a team environment. With their diverse skill set in data science and software engineering, Vedant is determined to make a meaningful impact in the tech industry.
            </p>
            <br />
          <p>
          Q: How does Vedant approach their professional journey?
          <br/> A: Vedant approaches their professional journey with passion and ambition. They thrive on new challenges and opportunities for growth. With a strong foundation in data science and software engineering, Vedant embraces every adventure with enthusiasm, seeking to make a lasting impact in the ever-evolving world of technology.
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
              src="/giphy.gif"
              alt="cartoon_vector"
              width={400}
              height={500}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-20 "
            />
          </div>
        </div>
        <div className="w-full flex justify-center pt-16">
          <Linki
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" fill="#fbbf24" />
          </Linki>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center "></div> */}
    </section>
  );
};

export default AboutSection;
