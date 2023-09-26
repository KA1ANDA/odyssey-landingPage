import React from 'react';
import TimeInSpace from './TimeInSpace';
import SpaceWalks from './SpaceWalks';
import Exercising from './Exercising';






function Ilustration() {
  return (
    <div className='  flex w-[294px] h-[414px] lg:h-[530px] xl:h-[767px] lg:w-[531px] xl:w-[767px] bg-[url(https://s3-alpha-sig.figma.com/img/3fb3/fa3b/b65916f7aba31f7c3b0dfd185840a24c?Expires=1696204800&Signature=p3WiZqvmJE4vB9Wx6BansxTQ7Cwn5qc5GxP5qN3~qEMWVVeaMnfl1XHH2yhCvJ-oE0mWHNylhNmdlF3zURPxRLUQcmBzBg5GtIkiTcYfOJ5qOncHZHiMft02RmnJOmef7roEFua7YqYk-2EJ~ASvN3EtgxZ-VRxV8aA29utkXiB-1IF~hIMK4FHJT02q7lcMVZgrPQrSSPoIG2Ayyui8ARKbtBnL2PWi-JWRBOV5QVNYBCjQBISap7nQreNn2HWtDz5OhdXq-33kOu-jiQVFy0enbhgOs56J6mw3CkLMUa6ErFFFy2FzNvD5ioHpWE9N3ZYj5ANrE6ZqlSuFGHIFjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] scale-x-[-1]  bg-cover bg-center justify-center '>
      <Exercising />
      <SpaceWalks />
      <TimeInSpace />
    </div>
  );
}

export default Ilustration;
