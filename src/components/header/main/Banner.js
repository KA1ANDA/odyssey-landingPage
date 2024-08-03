import React from 'react';
import Ilustration from './ilustration/Ilustration';
import earth from './../../photos/earth.png';

function Banner() {
  return (
    <div
      className={`flex flex-col -mx-[24px] items-center rounded-none h-[381px] xl:h-[533px] lg:rounded-[40px] relative bg-cover`}
      style={{ backgroundImage: `url(${earth})` }}
    >
      <div className='text-[32px] w-[303px] lg:text-[40px] xl:w-[411px] text-white xl:text-[64px] mainTitle absolute top-[32px] left-[24px] lg:top-[60px] lg:left-[60px]'>
        Unveiling the
        Wonders of
        the Universe
      </div>
      <div className='relative top-[176px] lg:absolute lg:right-0 lg:top-0'>
        <Ilustration />
      </div>
    </div>
  );
}

export default Banner;
