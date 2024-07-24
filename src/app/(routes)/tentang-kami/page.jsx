'use client';

import React, { useEffect, useState } from 'react';
import hero from '../../../../public/assets/Hero.svg';
import tentang from '../../../../public/assets/tentang.JPG';
import Image from 'next/image';
import Lenis from 'lenis';
import axios from 'axios'; // Add this import

export default function Page() {
  const [tentangKamiData, setTentangKamiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/tentangKami/read`);
      if (Array.isArray(response.data.data)) {
        setTentangKamiData(response.data.data);
      } else {
        setError("Unexpected data format from API");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='mt-[60px] w-full'>
      {tentangKamiData.map((item, index) => (
        <div key={index} className='md:mx-28 grid grid-cols-12 h-[95vh]'>
          <div className='col-span-12 md:col-span-5 flex justify-center items-center'>
            <Image 
              src={item.banner} 
              className='md:h-[70%] h-full animate-floating object-cover md:rounded-lg shadow-md' 
              alt={item.title} 
              width={800}
              height={800}
            />
          </div>
          <div className='col-span-12 md:col-span-7 md:ml-10 flex flex-col md:justify-center'>
            <h1 className='m-5 font-semibold text-4xl md:text-5xl text-[#4F6C51]'>{item.title}</h1>
            <div className='m-5'>
              <h1 className='text-2xl font-medium text-[#A98A55]'>Visi</h1>
              <p className='text-justify text-gray-500 font-light'>{item.visi}</p>
            </div>
            <div className='m-5'>
              <h1 className='text-2xl font-medium text-[#A98A55]'>Misi</h1>
              <p className='text-justify text-gray-500 font-light'>{item.misi}</p>
            </div>
          </div>
        </div>
      ))}
      {error && <div className='text-red-500'>{error}</div>}
    </section>
  );
}
