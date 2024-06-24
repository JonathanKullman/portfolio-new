"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from "./ui/flip-words";
import { RevealX } from "./ui/RevealX";
import { RevealY } from "./ui/RevealY";

type Props = {};

const words = ["Experiences", "Timeline"];

const dummyContent = [
  {
    title: "Freelancing As Webdeveloper | 2024",
    description: (
      <>
        <div className="flex flex-col">
          <p
            className="font-bold font-sans mb-2 text-lg md:text-xl"
            style={{
              backgroundImage: "linear-gradient(to right, #fff, #6251ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block", // Ensures gradient respects text size
            }}
          >
            Quicksleek Co-Founder
          </p>
          <p className="font-sans">
            Co-founded a project creating modern, responsive, SEO-friendly
            websites using Next.js, Tailwind CSS, and React.
          </p>
        </div>
      </>
    ),
    frameworks: ["Nextjs", "React", "Tailwind.CSS", "TypeScript"],
  },
  {
    title: "Full-Stack Developer Intern | 2021 - 2022",
    description: (
      <>
        <p
          className="font-sans font-bold mb-2 text-xl"
          style={{
            backgroundImage: "linear-gradient(to right, #fff, #6251ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block", // Ensures gradient respects text size
          }}
        >
          Vertiseit AB
        </p>
        <p className="font-sans">
          Engaged in frontend and backend development, collaborated closely with
          clients, and successfully managed project timelines for product
          launches.
        </p>
      </>
    ),
    frameworks: ["C#", ".NET", "JavaScript", "Angular", "SQL"],
  },
  {
    title: "Software Development Program | 2020 - 2022",
    description: (
      <>
        <p
          className="font-sans font-bold mb-2 text-xl"
          style={{
            backgroundImage: "linear-gradient(to right, #fff, #6251ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block", // Ensures gradient respects text size
          }}
        >
          Campus Varberg
        </p>
        <p className="font-sans">
          Comprehensive studies in C#, agile methodologies, OOP, database
          management, advanced .NET, and web development.
        </p>
      </>
    ),
  },
];

const Experience = (props: Props) => {
  return (
    <section id="experience" className="pt-20 relative">
    <div className="flex flex-col relative justify-center items-center font-sans font-bold text-5xl mb-16 mt-6">
    <RevealX duration={1} startPos={10} delay={0.1} once={true}>
      <FlipWords words={words} />
      </RevealX>
      <RevealX duration={1.4} startPos={0} delay={0.3} once={true}>
        <span className="font-normal text-lg mt-4 font-sans">
          Here&apos;s a Timeline of What I&apos;ve Been Upto.
        </span>
      </RevealX>
    </div>
    <TracingBeam className="px-6 relative">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 max-md:ml-4">
            <RevealX duration={0.7} startPos={0} delay={0} once={true}>
              <div
                className="text-2xl md:text-3xl font-bold mb-4 font-sans"
                style={{
                  backgroundImage: "linear-gradient(to right, #fff, #6251ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block", // Ensures gradient respects text size
                }}
              >
                {item.title}
              </div>
            </RevealX>
            <RevealX duration={1} startPos={-5} delay={0.2} once={true}>
              <div className="text-md prose font-sans prose-sm dark:prose-invert">
                {item.description}
              </div>
            </RevealX>
            {item.frameworks && (
              <div className="flex">
                {item.frameworks.map((framework, index) => (
                  <RevealX
                    key={index}
                    duration={0.7}
                    startPos={-5}
                    delay={index * 0.25} // Incremental delay for each item
                    once={true}
                  >
                    <div className="bg-[#2d2594] bg-opacity-100 mt-4 mr-2 text-white rounded-[8px] font-sans text-sm w-fit px-2 py-0">
                      {framework.split(",").map((item, subIndex) => (
                        <span key={subIndex}>{item.trim()}</span>
                      ))}
                    </div>
                  </RevealX>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  </section>
  
  );
};

export default Experience;
