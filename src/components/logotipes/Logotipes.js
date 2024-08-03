import React from 'react';
import logo1 from '../photos/logo1.png'
import logo2 from '../photos/logo2.png'
import logo3 from '../photos/logo3.png'
import logo4 from '../photos/logo4.png'




function Logotipes() {
  return (
    <div className="grid grid-cols-2  gap-x-[20px]  justify-between  lg:flex  items-center">
      <img className=' h-fit lg:w-[197px] xl:w-[305px] lg:h-[204px] opacity-[0.35]' src={logo1}></img>
      <img className=' m-auto lg:m-0 lg:w-[117px] xl:w-[114px] h-[31px] opacity-[0.35]' src={logo2}></img>
      <img className='  lg:w-[206px] xl:w-[265px] h-[149px] opacity-[0.35]' src={logo3}></img>
      <img className='lg:w-[117px] lg:h-[32px] xl:w-[320px] xl:h-[102px] opacity-[0.35]' src={logo4}></img>

    </div>
  );
}

export default Logotipes;
