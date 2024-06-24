'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../bento-grid'
import { gridItems } from '@/data'
import { RevealY } from './RevealY'

const Grid = () => {
  return (
    <section id='about' className='md:py-20 md:pt-28 relative'>
    <RevealY duration={0.5} startPos={10} delay={1} once={true}>

        <BentoGrid className='w-full '>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
           <BentoGridItem
           id={id}
           key={id}
           title={title} 
           description={description}
           className={className}
           img={img}
           imgClassName={imgClassName}
           titleClassName={titleClassName}
           spareImg={spareImg}
           /> 
        ))}
        </BentoGrid>
        </RevealY>
    </section>
  )
}

export default Grid

