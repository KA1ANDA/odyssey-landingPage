import React from 'react';
import Ilustration from './ilustration/Ilustration';




function Banner() {
  return (
    <div className=" flex flex-col -mx-[24px]  items-center  rounded-none h-[381px] xl:h-[533px] lg:rounded-[40px] bg-[url('https://s3-alpha-sig.figma.com/img/8b99/8f26/42091bef618c8e50f365fc5f5bca433e?Expires=1696204800&Signature=JKPq7TWVYO4aLGILj1lxdWW9rcgPuFQSXLMBf9wlx~eZzLnKRrT1hKJgVZci287JUMJ0OquqGtE3WHqKAumAyMHRuTxQegUz1HUjg0PIIQKmK8r6v1ftHhBYY2oY8kfupeggesMLnwxRcsiuB1fooVgtIGTVdfrOBf5w23cRhqTeya16yDtgtHNG4vsCgrETTYAcsl1we9fYLvlOtKhGl5VwnHeEBv-5n4kVRQ6AnEAPM6Lnh9j4jwm1avAkK7u-WmwpjtrF2l2m-sld7G~aR6EW7dqzVt0gC1UY3iOEQ3q~y~bFDYRbQk7NY30MpqdaFpfESlULmlSanD5x3tpUBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] relative  bg-cover  ">
      <div className=' text-[32px] w-[303px] lg:text-[40px] xl:w-[411px] text-white xl:text-[64px] mainTitle  absolute top-[32px] left-[24px] lg:top-[60px] lg:left-[60px] '>
        Unveiling the  
        Wonders of 
        the Universe 
      </div>
      <div className=' relative top-[176px] lg:absolute lg:right-0 lg:top-0'>
        <Ilustration />
      </div>
  
    </div>
  );
}

export default Banner;
