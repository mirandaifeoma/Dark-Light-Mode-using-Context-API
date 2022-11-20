import React, { useState, useContext } from 'react'
import {ModeContext} from './Home'

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const dataContext = useContext(ModeContext);
  const { darkToggle } = dataContext

  const changeActive = () => {
    setActive(!active)
  }
  return (
    <div
      className={`${active ? 'phone:w-[25%]' : 'phone:w-fit'} ${
        darkToggle ? 'bg-[#465460] text-white' : ' bg-white text-black'
      }  relative md:fixed left-0  phone:py-[10px] phone:px-[.2rem] mobile1:w-[28%] md:h-screen md:w-[20%] phone:pl-[2%] `}
    >
      <div className='flex justify-between'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfEFfBMUhvoKc8B5FFy9N5EUmk7XugZ9ONQ&usqp=CAU'
          alt=''
          className={` ${
            active ? 'block' : 'hidden'
          } phone:w-[40%] phone:ml-[-.5rem] md:block md:m-auto`}
        />

        <button onClick={changeActive}>
          <i
            className={`${
              active ? 'phone:block' : 'md:hidden'
            } bi bi-chevron-left text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]`}
            aria-hidden='true'
          ></i>
        </button>
      </div>
      <div className='phone:leading-[6vh] phone:mt-[1rem] mobile:leading-[7vh] mobilel:leading-[8vh] md:mt-0 md:leading-[9vh]'>
        <div
          className={` ${
            darkToggle
              ? ' bg-[#465460]'
              : ' bg-gradient-to-r from-white to-[rgb(255,245,240)]'
          } flex justify-between text-orange-400`}
        >
          <div className='flex text-center'>
            <i
              className='fa fa-th-large text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px] '
              aria-hidden='true'
            ></i>

            <h6
              className={`${
                active ? 'block' : 'hidden'
              } font-[700] phone:ml-[1%] phone:text-[2.2vmin] sm:ml-2 md:block`}
            >
              DASHBOARD
            </h6>
          </div>
          <button
            className={` ${
              active ? 'block' : 'hidden'
            } bg-red-400 px-[2px] md:block`}
          ></button>
        </div>
        <div className='flex text-center opacity-50 '>
          <i
            className='fa fa-id-card-o text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={`${
              active ? 'block' : 'hidden'
            } phone:ml-[1%] phone:text-[2.2vmin] font-[700] sm:ml-2 md:block`}
          >
            PROJECTS
          </h6>
        </div>
        <div className='flex text-center opacity-50 '>
          <i
            className='fa fa-bars text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={`${
              active ? 'block' : 'hidden'
            } phone:ml-[1%] phone:text-[2.2vmin] font-[700] sm:ml-2 md:block`}
          >
            MY TASK
          </h6>
        </div>
        <div className='flex text-center opacity-50 '>
          <i
            className='fa fa-calendar-o text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={` ${
              active ? 'block' : 'hidden'
            } phone:ml-[1%] phone:text-[2.2vmin] font-[700] sm:ml-2 md:block`}
          >
            CALENDAR
          </h6>
        </div>
        <div className='flex text-center opacity-50'>
          <i
            className='fa fa-clock-o text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={` ${
              active ? 'block' : 'hidden'
            } phone:ml-[1%] phone:text-[2.1vmin] font-[700] sm:ml-2 md:block`}
          >
            TIME MANAGE
          </h6>
        </div>
        <div className='flex text-center opacity-50 '>
          <i
            className='fa fa-wpexplorer text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={` ${
              active ? 'block' : 'hidden'
            } phone:ml-[1%] phone:text-[2.2vmin] font-[700] sm:ml-2 md:block`}
          >
            REPORTS
          </h6>
        </div>
        <div className='flex text-center opacity-50'>
          <i
            className='fa fa-cog text-[4vmin] phone:mt-[10px] mobilel:mt-[12px] md:mt-[14px]'
            aria-hidden='true'
          ></i>
          <h6
            className={`${
              active ? 'block' : ' hidden'
            } phone:ml-[1%] phone:text-[2.2vmin] font-[700] sm:ml-2 md:block`}
          >
            SETTINGS
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
