import React, {useContext} from 'react';
import { ModeContext } from './Home';

const Google = () => {
  const dataContext = useContext(ModeContext);
  const { darkToggle } = dataContext;
  return (
    <div
      className={` ${
        darkToggle ? ' bg-[#465460]' : 'bg-white'
      }  px-[15px] py-[18px] rounded-[15px]`}
    >
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='p-[5px] mb-[20px] rounded-xl bg-orange-200 mr-2 phone:w-[40px] '>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8Lm8yzqpO9kjKWO6W6scm3QUKaeDA7Z41z1thsh7vdjnHTJYYNQ9Y_JIm6sbH66oyJM&usqp=CAU'
              alt=''
              className='phone:w-[100%]'
            />
          </div>
          <div>
            <h1 className='font-[700]'>Google</h1>
            <p className='text-[12px] opacity-70'>Google inc.</p>
          </div>
        </div>
        <div className='flex'>
          <div className='mb-[20px] mt-[5px] px-[8px] rounded-full border  inline-block p-[5px]'>
            <i class='bi bi-star-fill text-orange-500 text-center]'></i>
          </div>
          <i class='bi bi-three-dots-vertical text-[30px]'></i>
        </div>
      </div>
      <div className='flex justify-between mt-[30px] font-[700] phone:text-[2.5vmin]  mobile:text-[10px]'>
        <button className='bg-[rgb(241,242,244)] rounded-[5px] border-none phone:px-[7px] mobile:py-[5px] mobile:px-[10px]'>
          SELECT PROGRESS
        </button>
        <button className='text-[rgb(255,196,193)] border-[2px] border-solid border-[rgb(255,166,161)] py-[5px] px-[10px] rounded-[5px]'>
          HIGH PRIORITY
        </button>
      </div>

      <div className='mt-[20px]'>
        <div>
          <h2 className='mb-[15px]'>
            <span className='opacity-70'>Task Done:</span> 25{' '}
            <span className='opacity-70'> /50</span>
          </h2>
          <div>
            <div className='overflow-hidden rounded-full bg-gray-200'>
              <div className='h-2 w-1/2 rounded-full bg-blue-500'></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class='flex items-center space-x-2 text-base mt-[20px] mb-[]'>
            <h1 className='py-[3px] px-[15px] bg-[rgb(240,248,239)] text-[rgb(110,183,102)] text-[12px] font-[700] rounded-[5px]'>
              IOS APP
            </h1>
            <h1 className='bg-[rgb(228,241,255)] py-[3px] px-[15px] text-[rgb(85,167,255)]  text-[12px] font-[700] rounded-[5px]'>
              UI/UX
            </h1>
          </div>
          <div class='mt-3 flex -space-x-2 overflow-hidden'>
            <img
              class='inline-block rounded-full ring-2 ring-white phone:h-[30px] phone:w-[30px] md:h-12 md:w-12'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <img
              class='inline-block h-12 w-12 rounded-full ring-2 ring-white phone:h-[30px] phone:w-[30px] md:h-12 md:w-12 '
              src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <img
              class='inline-block h-12 w-12 rounded-full ring-2 ring-white phone:h-[30px] phone:w-[30px] md:h-12 md:w-12'
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
              alt=''
            />
            <img
              class='inline-block h-12 w-12 rounded-full ring-2 ring-white phone:h-[30px] phone:w-[30px] md:h-12 md:w-12'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <img
              class='inline-block h-12 w-12 rounded-full ring-2 ring-white phone:h-[30px] phone:w-[30px] md:h-12 md:w-12'
              src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <p class='inline-block h-12 w-12 rounded-full ring-2 ring-[#dcdada] text-center pt-[10px] font-[700] opacity-60 phone:h-[30px] phone:w-[30px] md:h-12 md:w-12'>
              +5
            </p>
          </div>
          <div class='mt-[15px] font-medium'>
            <h1 className='bg-[rgb(255,242,236)] py-[3px] px-[15px] text-[rgb(254,174,133)]  text-[12px] font-[700] inline rounded-[5px]'>
              DUE DATE: 20 JUNE
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Google;
