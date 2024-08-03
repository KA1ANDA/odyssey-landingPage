import React from 'react';
import ResourceCard from './ResourceCard';
import middle from '../photos/middle.png'
const resources = [
  {
    number:'01.',
    title:'Online free courses and tutorials',
    text:'Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.'
  },
  {
    number:'02.',
    title:'Resources for teachers and educators',
    text:'Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.'
  },
  {
    number:'03.',
    title:'Book recommendations and reviews',
    text:'Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.'
  },
]

function EducResources() {
  return (
    <div className=" -mx-[24px] h-[393px] lg:h-[360px] xl:h-[533px] relative  bg-cover bg-left lg:bg-right  lg:rounded-[40px] flex items-center flex-col "
    style={{ backgroundImage: `url(${middle})` }}>
      <div className='w-[327px]  m-[24px] text-[32px] text-start lg:w-[764px] xl:w-[1220px] mainTitle lg:text-[40px] xl:text-[64px]  text-white lg:text-center lg:mt-[40px] xl:mt-[60px]'>
        We are committed to making space science accessible to all. Explore our educational resources, including
      </div>
      <div className='flex flex-col gap-[24px] lg:flex-row lg:gap-[32px] xl:gap-[52px] absolute top-[340px]  lg:top-[242px] xl:top-[387px]'>
        {resources.map(el => <ResourceCard number={el.number} title={el.title} text={el.text} />)}
      </div>
    </div>
  );
}

export default EducResources;
