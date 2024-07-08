import React, { useState, useEffect } from 'react';
import api from '@/app/api'
import BouncingDotsLoader from './BouncingDotsLoader';
import { useRouter } from 'next/navigation';

const Navheader = () => {
  const [bottleNumber, setBottleNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Make an Axios request to fetch the bottle number
    async function fetchData() {
      api.get('/get_count')
        .then(response => {
          // Assuming your API response contains the bottle number
          setBottleNumber(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  const handleClick = () => {
    // Replace '/your-target-route' with the route you want to navigate to
    router.push('/dashboard');
  };
  const handleClickhome = () => {
    // Replace '/your-target-route' with the route you want to navigate to
    router.push('/home');
  };


  return (
    <div className='flex items-center '>
      <img className="w-8 h-8 m-8" onClick={handleClickhome} src="/home-button-for-interface.png"/>

      <img className="w-48 h-48 mx-auto text-center overflow-hidden relative" src="/bottleye_logo.svg"/>
      
      <div className=" top-[50px] left-[1400px]">
        <div className="m-4 w-[124px] h-[68px] px-[18px] py-1 rounded-[45px] border-4 border-slate-700 justify-end items-center gap-2 inline-flex" onClick={handleClick}>
          <img className="w-7 h-[40px]" src="/icon_bottle.svg" />
          {isLoading ? (
            <BouncingDotsLoader />
          ) : (
            <div className="w-[52px] text-sky-100 text-[40px] font-medium font-Poppins">
              {bottleNumber}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navheader;
