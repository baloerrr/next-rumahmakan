'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function CardMenu({ i, nama, menu, gambar, progres, range, targetScale }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progres, range, [1, targetScale]);

    const getBackgroundColor = (index) => {
        return index % 2 === 0 ? '#E4E7C4' : '#4F6C51';
    };

    const getBorderColor = (index) => {
        return index % 2 === 0 ? '#4F6C51' : '#E4E7C4';
    };

    return (
        <div className='h-[100vh] flex items-center justify-center sticky pb-20 top-0' ref={container}>
            <motion.div 
                style={{ scale, top: `calc(-10% + ${i * 25}px)`, backgroundColor: getBackgroundColor(i), borderColor: getBorderColor(i) }} 
                className='w-[1300px] mx-4 shadow-xl p-6 rounded-lg h-[500px] flex flex-col md:flex-row -top-[10%] relative'>
                <div className='relative md:w-[50%] h-[100%] w-full'>
                    <motion.div style={{ opacity: scrollYProgress }} className="w-full h-full">
                        <Image
                            fill
                            src={gambar}
                            className="object-cover shadow-inner rounded-md transition-transform transform w-full h-full hover:scale-110"
                        />
                    </motion.div>
                </div>

                <div className="my-5 md:mr-5 md:ml-10 mx-2 md:w-full">
                    <h1 className="md:text-4xl text-xl font-semibold" style={{ color: getBackgroundColor(i) === '#E4E7C4' ? '#4F6C51' : '#E4E7C4' }}>{nama}</h1>
                    <h1 className="md:text-lg text-base font-normal mt-2 text-gray-400">{Array.isArray(menu) ? menu.length : 0} Product{Array.isArray(menu) && menu.length > 1 ? 's' : ''}</h1>
                    <div className="w-full md:h-[300px] h-[150px] md:my-2 my-4 overflow-y-auto custom-scrollbar">
                        {Array.isArray(menu) ? (
                            menu.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row md:my-6 my-2 py-2 justify-between border-b-1" style={{ borderColor: getBorderColor(i) }}>
                                    <h1 className="md:text-xl text-lg font-medium" style={{ color: getBackgroundColor(i) === '#E4E7C4' ? '#4F6C51' : '#E4E7C4' }}>{item}</h1>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-400">No menu available</div>
                        )}
                    </div>
                    <div className="text-sm font-normal text-[#A98A55]">
                        <span className="font-semibold">Daftar Menu</span> Lesehan Bakso Palapa
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
