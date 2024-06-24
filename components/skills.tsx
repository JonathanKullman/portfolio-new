"use client";

import React from "react";

import { companies } from "@/data";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { RevealY } from "./ui/RevealY";
import { RevealX } from "./ui/RevealX";

const Skills = () => {
  return (
    <section id="technologies" className=" max-md:py-16 py-28 flex flex-col relative">
      <RevealX duration={1.4} startPos={-20} delay={0} once={true}>
      <h1 className="heading text-sm">
        Technologies
      </h1>
      </RevealX>
      <RevealY duration={1.4} startPos={0} delay={0.3} once={true}>
      <HeroHighlight  className="text-center pt-2">
      
        Technologies and Languages I am Most&nbsp; 
        <Highlight className="">
        Experienced with.
        </Highlight>
    </HeroHighlight>
    </RevealY>

    <div className="flex flex-col items-center max-sm:mt-6 max-lg:mt-10 max-md:max-w-80 max-lg:max-w-2xl mx-auto">
  <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 max-lg:mt-10 mt-20">
    {companies.map((company, index) => (
      <RevealY
        key={company.id}
        duration={0.7}
        startPos={-10}
        delay={index * 0.2} // Incremental delay for each image
        once={true}
      >
        <div className="flex md:max-w-40 max-w-40 gap-2">
          <img
            src={company.img}
            alt={company.name}
            className="md:w-24 w-24"
          />
        </div>
      </RevealY>
    ))}
  </div>
</div>

    </section>
  );
};

export default Skills;