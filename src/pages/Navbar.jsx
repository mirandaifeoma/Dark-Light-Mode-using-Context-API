import React, {useContext} from 'react'
import { ModeContext } from './Home'


const Navbar = ({button}) => {
  const dataContext = useContext(ModeContext)
  const { darkToggle } = dataContext
  return (
    <div
      className={`${
        darkToggle
          ? ' md:bg-[#465460] bg-transparent text-white'
          : 'phone:transparent md:bg-white '
      }  flex justify-between  fixed top-0 z-[90] phone:w-[75%] phone:rounded-[5px] phone:px-[10px] phone:py-[5px]  mobilel:py-[7px] md:rounded-[15px] md:w-[76%]   md:py-[10px] md:px-[15px] lg:px-[25px]  lg:py-[15px]`}
    >
      <div
        className={`${
          darkToggle ? 'text-black' : ''
        } flex opacity-50 bg-slate-200 pl-[10px] pr-[50px] pt-[5px] rounded-xl mobilel:py-[3px] md:pr-[5rem] md:py-[5px] lg:py-[7px] lg:rounded-2xl `}
      >
        <i
          className='fa fa-search phone:text-[2.5vmin] phone:mt-[1px]'
          aria-hidden='true'
        ></i>
        <p className='  font-[600] phone:ml-[20%] phone:text-[2.3vmin] '>
          Search
        </p>
      </div>
      <div className='flex'>
        <div className='phone:px-[10px] mr-[1rem]  border-red-400 border-[2px] rounded-full md:px-[20px] '>
          {button}
        </div>
        
        <i
          className='fa fa-bell-o phone:text-[2.5vmin] phone:mt-[5px] mr-3 md:text-[3vmin]'
          aria-hidden='true'
        ></i>
        <img
          src='https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt=''
          className='w-[30px] h-[30px] rounded-full object-cover phone:w-[20px] phone:h-[20px] md:w-[30px] md:h-[30px]'
        />
      </div>
    </div>
  )
}

export default Navbar
