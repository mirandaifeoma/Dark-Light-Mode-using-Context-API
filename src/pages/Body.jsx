import React from 'react'
import Navbar from './Navbar'
import Google from './Google'
import Slack from './Slack'
import Task from './Task'
import Secondgoogle from './Secondgoogle'
import Calender from './Calender'
import Messages from './Messages'

const Body = ({button}) => {
  return (
    <div className=' phone:w-full phone:mt-[1.5rem] md:ml-[22%]  md:w-[77%] md:mt-[4rem] h-screen md:h-fit  overflow-scroll md:overflow-visible xl:w-[1300px]'>
      <Navbar  button={button}/>
      
      <div className='mt-[1.5rem] phone:mt-[3rem] phone:columns-1 md:columns-2 lg:columns-3 lg:gap-[2.2%]  '>
        <Google />
        <Slack />
        <Task />
        <Secondgoogle />
        <Calender />
        <Messages />
      </div>
    </div>
  )
}

export default Body
