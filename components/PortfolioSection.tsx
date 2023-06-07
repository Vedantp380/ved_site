import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const portfolios = [
  {
    name: "Enhanced photocatalytic properties of a chemically modified blue phosphorene",
    description:
      "This research explores sulphur-doped blue-phosphorene sheets for efficient water splitting, revealing promising catalysts with superior hydrogen evolution potential.",
    github: "",
    image: "/phosphorene.JPG",
    link: "https://pubs.rsc.org/en/content/articlehtml/2021/ra/d0ra10829d",
  },
  {
    name: "Small Social Media",
    description: "It is repo of small social media app built on top of redux.",
    image: "/small_social_media.JPG",
    github: "https://github.com/ProPhycient5/redux_essential_official",
    link: "https://redux-essential-official-sawan.vercel.app/",
  },
  {
    name: "Hacker-News-Clone",
    description:
      "It is a clone of hacker news website integrated with open API.",
    image: "/my_gif.gif",
    github: "https://github.com/ProPhycient5/Hacker-News-Clone",
    link: "https://hacker-news-clone-sawan.vercel.app/",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="pb-12 md:py-16">
        <h1 className="text-center font-bold text-4xl">
          Portfolio
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28 pt-8">
          {portfolios.map((portfolio, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mb-5 md:mb-0">
                    <Link href={portfolio.link}>
                      {portfolio?.image === "Hacker-News-Clone" ? (
                        <img
                          src={portfolio?.image}
                          alt={portfolio?.name}
                          width={450}
                          height={500}
                        />
                      ) : (
                        <Image
                          src={portfolio?.image}
                          alt={portfolio?.name}
                          width={450}
                          height={400}
                          // style={{ width: '100%', height: '100%' }}
                          className="rounded-xl shadow-lg hover:opacity-70 "
                        />
                      )}
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-xl font-bold mb-4">{portfolio.name}</h1>
                    <p className=" text-sm leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {portfolio.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {portfolio?.github && (
                        <Link href={portfolio.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      <Link href={portfolio.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
