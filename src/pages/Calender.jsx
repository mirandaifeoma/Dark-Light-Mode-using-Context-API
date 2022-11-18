import React, {useContext} from 'react';
import { modeContext } from './Home'


const Calender = () => {
  const dataContext = useContext(modeContext);
  const { darkToggle } = dataContext;
  return (
    <div
      className={`${darkToggle ? ' bg-[#465460]' : 'bg-white'} ${
        darkToggle ? ' text-white' : 'text-black'
      }  px-[15px] pt-[15px] pb-[20px] rounded-[10px] mb-[1.5rem]`}
    >
      <div className='flex justify-between mb-[1.5rem]'>
        <h1 className='font-[700] text-[3vmin]'>FEB 2020 </h1>
        <div>
          <i class='bi bi-chevron-left  p-[4px] rounded-full bg-[rgb(253,123,56)] text-white mr-[10px]'></i>
          <i class='bi bi-chevron-right  p-[4px] rounded-full bg-[rgb(253,123,56)] text-white'></i>
        </div>
      </div>
      <div className=' columns-7'>
        <div className='p-[4px] border border-[transparent] rounded-full text-center'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80 '>SUN</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>26</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>02</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>09</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>16</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>23</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>MON</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>27</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>03</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>10</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>17</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>24</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>TUE</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>28</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>04</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>11</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>18</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>25</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>WED</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>29</h1>
        </div>
        <div className='p-[4px] my-[17px]border rounded-full text-center border-[transparent] bg-[rgb(253,123,56)] phone:p-[8px] phone:pr-[7px] md:pr-[25px] '>
          <h1 className='text-[2.1vmin] font-[700] opacity-60 '>05</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>12</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>19</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>26</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>THU</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>30</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>06</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>13</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>20</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>27</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>FRI</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-30'>31</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>07</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>14</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>21</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>28</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-80'>SAT</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>01</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>08</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>15</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>22</h1>
        </div>
        <div className='p-[4px] border rounded-full text-center border-[transparent] my-[17px]'>
          <h1 className='text-[2.1vmin] font-[700] opacity-60'>29</h1>
        </div>
      </div>
    </div>
  )
}

export default Calender;
