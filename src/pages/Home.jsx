import React, {createContext, useState} from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

export const modeContext = createContext()
const initialState = false;

const Home = () => {
  const [darkToggle, setDarkToggle] = useState(initialState);

  return (
    <modeContext.Provider value={{ darkToggle, setDarkToggle }}>
      <div
        className={`${
          darkToggle ? ' bg-[black]' : ' bg-[rgb(247,246,244)] '
        } bg-[rgb(247,246,244)] flex gap-[2%] pr-[1%]`}
      >
        <Sidebar />
        <Body
          button={
            <button
              className={` ${darkToggle ? 'text-[red]' : 'text-black'} `}
              onClick={() => setDarkToggle(!darkToggle)}
            >
              Dark/Light
            </button>
          }
        />
      </div>
    </modeContext.Provider>
  )
}

export default Home;
 