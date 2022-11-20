import React, { useState, useContext } from 'react'
import { ModeContext } from './Home'

const Task = () => {
  const dataContext = useContext(ModeContext)
  const { darkToggle } = dataContext; 

  const [todos, setTodos] = useState([
    { id: 1, todo: 'create wireframe', isChecked: false },
    { id: 2, todo: 'Slack Logo Design', isChecked: false },
    { id: 3, todo: 'Dashboard Design', isChecked: false },
    { id: 4, todo: 'Create wireframe', isChecked: false },
    { id: 5, todo: 'Google Logo Design', isChecked: false },
    { id: 6, todo: 'Slack Logo Design', isChecked: false },
    { id: 7, todo: 'Dashboard Design', isChecked: false },
  ])

  const handleCheck = (e) => {
    const clickedItem = todos.find((todo) => e.target.id == todo.id)
    setTodos(
      todos.map((todo) =>
        e.target.id == todo.id
          ? { ...todo, isChecked: !clickedItem.isChecked }
          : todo
      )
    )

  }
  return (
    <div
      className={`${
        darkToggle ? ' bg-[#465460] text-white' : 'bg-white text-black'
      } px-[15px] pt-[18px] pb-[25px] rounded-[15px] mt-[1.5rem] `}
    >
      <h1 className='font-[700] mb-[2rem]'>
        My Tasks <span className='text-[12px] opacity-70'>(05)</span>
      </h1>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            id={item.id}
            className='flex text-[12px] justify-between font-[500] mt-[.9rem] border-b-[1px] pb-[16px]'
          >
            <div className='flex'>
              <p id={item.id}>{item.id}</p>
              <p
                id={item.id}
                className={`${
                  item.isChecked ? 'line-through' : 'no-underline'
                } ml-[14px]`}
              >
                {item.todo}
              </p>
            </div>
            <input
              type='checkbox'
              name=''
              id={item.id}
              onClick={handleCheck}
              className='rounded-full accent-pink-500'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Task
