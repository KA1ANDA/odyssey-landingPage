import React from 'react';
import TimeInSpace from './TimeInSpace';
import SpaceWalks from './SpaceWalks';
import Exercising from './Exercising';
import spaceBoy from './../../../photos/spaceBoy.png'





function Ilustration() {
  return (
    <div className='  flex w-[294px] h-[414px] lg:h-[530px] xl:h-[767px] lg:w-[531px] xl:w-[767px] scale-x-[-1]  bg-cover bg-center justify-center '
    style={{ backgroundImage: `url(${spaceBoy})` }}>
      <Exercising />
      <SpaceWalks />
      <TimeInSpace />
    </div>
  );
}

export default Ilustration;
