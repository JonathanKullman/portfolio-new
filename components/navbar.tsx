import React from 'react'
import { socialLinks } from "@/data/index";
import { AnimatedTooltip } from './ui/animated-tooltip';

const Navbar = () => {
  return (
    <div className=" md:max-w-6xl items-center font-mono text-sm flex z-[200] justify-end relative md:mt-20 mt-12 max-md:mr-6">
    <div className="z-10 flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      <AnimatedTooltip items={socialLinks} />
    </div>
  </div>
  )
}

export default Navbar