import React, {useContext} from 'react';
import { modeContext } from './Home'


export const Secondgoogle = () => {
  const dataContext = useContext(modeContext);
  const { darkToggle } = dataContext;

  return (
    <div
      className={`${darkToggle ? ' bg-[#465460]' : 'bg-white'} ${
        darkToggle ? 'text-white' : 'text-black'
      } bg-white pt-[18px] pb-[25px] rounded-[15px] my-[1.5rem]`}
    >
      <div className='flex justify-between mx-[1rem]'>
        <h1 className='font-[700]'>Google</h1>
        <i class='bi bi-file-play opacity-50 text-[20px] mr-[10px]'></i>
      </div>
      <div
        className={` ${
          darkToggle ? 'text-black' : ''
        } flex  bg-gradient-to-l from-[rgb(255,245,240)] to-[rgb(255,245,240)] h-[30px] mt-[.5rem] md:my-[1.5rem] lg:mt-[.5rem]`}
      >
        <button className='bg-red-400 px-[2px] mr-[1rem]'></button>
        <div className='flex'>
          <div className='flex  text-[12px] font-[500]'>
            <i
              class='fa fa-podcast rotate-180 mb-[10px]'
              aria-hidden='true'
            ></i>
            <p className='ml-[5px] mt-[6px] text-[2.5vmin] phone:mt-[10px]'>
              Create wireframe
            </p>
          </div>
          <div className='flex ml-[4rem] mt-[3px] phone:ml-[2rem]'>
            <p className='font-[700] text-[3vmin] phone:mt-[7px]'>25m 20s</p>
            <i class='bi bi-pause-btn-fill text-[rgb(248,113,113)] text-[1.4rem] ml-[7px]'></i>
            <i class='bi bi-three-dots-vertical ml-[3px] mt-[3px]'></i>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-[1rem]  border-b-[1px] my-[1rem] md:my-[1.5rem] lg:my-[1rem]'>
        <h1 className='font-[700]'>Slack</h1>
        <i class='bi bi-file-play opacity-50 text-[20px] mr-[10px]'></i>
      </div>
      <div className='flex justify-between ml-[1rem] mr-[.7rem] border-b-[1px] opacity-60  md:mb-[1.3rem] lg:mb-0'>
        <div className='flex text-[2.1vmin] '>
          <i class='fa fa-podcast rotate-180 mb-[15px]' aria-hidden='true'></i>
          <h1 className='font-[700] mt-[5px] m-[10px]'>Slack logo design</h1>
        </div>
        <div className='flex'>
          <p className='font-[700] text-[2.1vmin] mt-[5px]'>30m 0s</p>
          <i class='bi bi-file-play opacity-50 text-[20px]'></i>
          <i class='bi bi-three-dots-vertical mt-[3px]'></i>
        </div>
      </div>
      <div className='flex justify-between ml-[1rem] mr-[.7rem] border-b-[1px] opacity-60 md:mb-[1.3rem] lg:mb-0'>
        <div className='flex text-[2.1vmin] '>
          <i class='fa fa-podcast rotate-180 mb-[15px]' aria-hidden='true'></i>
          <h1 className='font-[700] mt-[5px] m-[10px]'>Dashboard design</h1>
        </div>
        <div className='flex'>
          <p className='font-[700] text-[2.1vmin] mt-[5px]'>30m 0s</p>
          <i class='bi bi-file-play opacity-50 text-[20px]'></i>
          <i class='bi bi-three-dots-vertical mt-[3px]'></i>
        </div>
      </div>
      <div className='flex justify-between ml-[1rem] mr-[.7rem] border-b-[1px] opacity-60 md:mb-[1.3rem] lg:mb-0'>
        <div className='flex text-[2.1vmin] '>
          <i class='fa fa-podcast rotate-180 mb-[15px]' aria-hidden='true'></i>
          <h1 className='font-[700] mt-[5px] m-[10px]'>Create Wireframe</h1>
        </div>
        <div className='flex'>
          <p className='font-[700] text-[2.1vmin] mt-[5px]'>30m 0s</p>
          <i class='bi bi-file-play opacity-50 text-[20px]'></i>
          <i class='bi bi-three-dots-vertical mt-[3px]'></i>
        </div>
      </div>
    </div>
  )
}

export default Secondgoogle;
