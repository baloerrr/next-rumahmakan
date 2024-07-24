import { Button } from '@nextui-org/react'
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '../../public/assets/Kuan.png';
import { useRef } from 'react'
import Image from 'next/image';

export default function Kuantitatif() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);


    return (
        <div
        ref={container} 
        className='relative bg-center w-full '
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
            <div className='w-full h-full bg-black absolute top-0 z-10 right-0 opacity-30'>
            </div>
            <div className='flex flex-row items-center h-[500px] md:h-[250px] z-20 lg:mx-20 mx-6 md:mx-6 sm:mx-10 justify-between text-[#E4E7C4]  '>
                <div className='flex flex-col md:flex-row  h-full justify-center md:justify-between sm:gap-28 gap-20 md:gap-0 w-[45%] text-center md:items-center '>
                    <div className='flex flex-col items-center justify-center z-20 font-medium gap-5'>
                        <h1 className='text-3xl'>1</h1>
                        <p className='text-xl'>Cabang Penjualan</p>
                    </div>
                    <div className='flex flex-col items-center justify-center z-20 font-medium gap-5'>
                        <h1 className='text-3xl'>60+</h1>
                        <p className='text-xl'>Menu Makanan dan Minuman</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center  w-[45%] h-full justify-center md:justify-between md:gap-0 gap-32 text-center'>
                    <div className='flex flex-col items-center justify-center z-20 font-medium gap-5'>
                        <h1 className='text-3xl'>5+</h1>
                        <p className='text-xl'>Pengalaman di Bidang Kuliner</p>
                    </div>
                    <Button className='py-7 px-7 mx-5 bg-[#E4E7C4] z-20 text-slate-950' radius='full'>
                        Selengkapnya
                    </Button>
                </div>
            </div>
        </div>
    )
}
