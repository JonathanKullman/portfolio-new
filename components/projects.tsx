'use client';
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { RevealX } from "./ui/RevealX";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { RevealY } from "./ui/RevealY";

const Projects = () => {
  const [revealDelay, setRevealDelay] = useState(0.2); // Initial delay for the first item

  return (
    <section id="projects" className="py-20 relative">
      <RevealY duration={1} startPos={20} delay={0} once={true}>
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-blue-400">recent projects</span>
        </h1>
      </RevealY>
      <RevealY duration={1} startPos={0} delay={0.2} once={true}>
      <span className="font-normal text-lg mt-4 font-sans flex text-center justify-center">
      Explore my Recent Work Highlights, showcasing Key Projects and Accomplishments.
        </span>  
        </RevealY>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 w-full">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[23rem] w-[80vw]"
            key={item.id}
          >
            <RevealX
              duration={1}
              startPos={-5}
              delay={revealDelay + index * 0.2} // Increment delay for each item
              once={true}
            >
              <PinContainer title={item.link} href={item.link}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative flex items-center justify-center sm:w-[23rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[23vh] max-md:mb-5 rounded-lg">
                    <img
                      src={item.img}
                      alt="cover"
                      className="absolute top-0 h-48 rounded-lg"
                    />
                  </div>

                  <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-base lg:font-sans font-light text-sm line-clamp-4"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt={`icon${index}`} className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      {item.id === 1 ? (
                        <p className="flex lg:text-lg md:text-xs text-sm text-red-400">
                          In Progress
                        </p>
                      ) : (
                        <p className="flex lg:text-lg md:text-xs text-sm text-blue-500">
                          Check Live Site
                        </p>
                      )}
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </a>
              </PinContainer>
            </RevealX>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
