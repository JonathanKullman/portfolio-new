import { FaLocationArrow } from "react-icons/fa6";

import { socialLinks } from "@/data";
import MagicButton from "./ui/magic-button";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Interested in <span className="animated-text">work opportunities</span>? I'd <span className="animated-text">love</span> to hear from you!
        </h1>
        <HeroHighlight  className="text-center my-5">
      
        Reach out to me today and let&apos;s connect on how I can add&nbsp;
        <Highlight className="font-semibold">
        value for you.
        </Highlight>
    </HeroHighlight>

        <a className="max-md:pt-5" href="mailto:jontekull@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            
          />
        </a>
      </div>
      <div className="flex mt-20 md:mt-40 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Jonathan Kullman. All Rights Reserved.
        </p>

        <div className=" max-md:pt-6 md:max-w-6xl items-center font-mono text-sm flex z-[200] justify-end relative max-md:mr-6">
    <div className="z-10 flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      <AnimatedTooltip items={socialLinks} />
    </div>
  </div>
      </div>
    </footer>
  );
};

export default Footer;