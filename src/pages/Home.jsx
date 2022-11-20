import React, {createContext, useState} from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

export const ModeContext = createContext()
const initialState = false;

const Home = () => {
  const [darkToggle, setDarkToggle] = useState(initialState);

  return (
    <ModeContext.Provider value={{ darkToggle, setDarkToggle }}>
      <div
        className={`${
          darkToggle ? ' bg-slate-800' : ' bg-[rgb(247,246,244)] '
        }  flex gap-[2%] pr-[1%]`}
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
    </ModeContext.Provider>
  )
}

export default Home;
 