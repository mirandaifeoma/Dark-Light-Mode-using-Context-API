import React, {useContext} from 'react';
import { modeContext } from './Home'


const Messages = () => {
  const dataContext = useContext(modeContext);
  const {darkToggle} = dataContext;

  return (
    <div
      className={` ${darkToggle ? ' bg-[#465460]' : 'bg-white'} ${
        darkToggle ? 'text-white' : 'text-black'
      }  px-[15px] py-[18px]  rounded-[15px] my-[1.5rem]`}
    >
      <h1 className='font-[700] mb-[10px] md:mb-[2.3rem] lg:mb-[20px]'>
        Messages
      </h1>
      <div className='flex mb-[.8rem] md:mb-[1.7rem] lg:mb-[.8rem]'>
        <div className='w-[3.5rem] h-[3.5rem] object-cover border-[7px] border-double rounded-full overflow-hidden'>
          <img
            src='https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM='
            alt=''
            className='w-[100%] h-[100%] object-cover'
          />
        </div>
        <div className='mt-[.5rem] ml-[.7rem]'>
          <h1 className='font-[700]'>John Doe</h1>
          <p className='text-[2.2vmin] opacity-70'>Hi Angelina! How are you?</p>
        </div>
      </div>
      <div className='flex mb-[.8rem] md:mb-[1.7rem] lg:mb-[.8rem]'>
        <div className='w-[3.5rem] h-[3.5rem] object-cover border-[7px] border-double border-[rgb(166,215,247)] rounded-full overflow-hidden'>
          <img
            src='https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=2KuVFEhKVdPstrmBo7m3pkaxiXkJMiJVUjelRxIcsoo='
            alt=''
            className='w-[100%] h-[100%] object-cover'
          />
        </div>
        <div className='mt-[.5rem] ml-[.7rem]'>
          <h1 className='font-[700]'>Charmie</h1>
          <p className='text-[2.2vmin] opacity-70'>Do you need that design?</p>
        </div>
      </div>
      <div className='flex mb-[.8rem] md:mb-[1.7rem] lg:mb-[.8rem]'>
        <div className='w-[3.5rem] h-[3.5rem] object-cover border-[7px] border-double border-[rgb(248,188,66)] rounded-full overflow-hidden'>
          <img
            src='https://media.istockphoto.com/id/1365310330/photo/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=mbCnh1Bd715P9JSdqrllYYmshIyfDkgafYPK53_S-m0='
            alt=''
            className='w-[100%] h-[100%] object-cover'
          />
        </div>
        <div className='mt-[.5rem] ml-[.7rem]'>
          <h1 className='font-[700]'>Jason Mandela</h1>
          <p className='text-[2.2vmin] opacity-70'>
            What is the price of hourly...
          </p>
        </div>
      </div>
      <div className='flex mb-[.8rem] md:mb-[1.7rem] lg:mb-[.8rem]'>
        <div className='w-[3.5rem] h-[3.5rem] object-cover border-[7px] border-double border-[rgb(255,214,174)] rounded-full overflow-hidden'>
          <img
            src='https://media.istockphoto.com/id/1326852416/photo/young-man-standing-holding-laptop-and-looking-at-camera-with-happy-smile.jpg?s=612x612&w=0&k=20&c=81sYgLF2Oy5X6N-QLfkt1mDzUOC6L_M-o2EJdOid9k0='
            alt=''
            className='w-[100%] h-[100%] object-cover'
          />
        </div>
        <div className='mt-[.5rem] ml-[.7rem]'>
          <h1 className='font-[700]'>Charlie Chu</h1>
          <p className='text-[2.2vmin] opacity-70 '>Awesome!!</p>
        </div>
      </div>
    </div>
  )
}

export default Messages;
