import React from 'react';
import ResourceCard from './ResourceCard';

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
    <div className=" -mx-[24px] h-[393px] lg:h-[360px] xl:h-[533px] relative bg-[url(https://s3-alpha-sig.figma.com/img/67a1/bb44/e2c703d9af5e1a1fe7e31889d5940702?Expires=1696204800&Signature=Y1LM-aCMgc1p1gAvHFKzcaxOHy~KstUc8eJL-aKtGlybAMKAYVyLmkUoniGd5H7psu2xIrdE~0E9uBaTDzOh14IkYc1UTJ-PSE18KsYm-LQYjXBqrh1fuFOgQIQmMgSuNMM9Mt4xgUmu-yr8qCYWGVaIpTryUBsq9HXl2oz5ossgOMKAmLoqLT68Cb1eLvKCKPeqZmrBu0mqWGYO-ccGnU-MqR4z8CQN0kChQJlNifspP9UhPxK5t8qSTtXRa2qj9TOy7eHa52mN0xJLL6sMoH0qwdrr56aPo-ltXrofydI6g-t9OUF0evAmFjExgST5b1nun~5qRQg6mmYntpP6fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] bg-cover bg-left lg:bg-right  lg:rounded-[40px] flex items-center flex-col ">
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
