
import { Button } from '@nextui-org/react'
import pettern from '../../public/assets/pettern.png'
import React from 'react'
import Image from 'next/image'
import { useTransform, motion } from 'framer-motion';

export default function Sejarah({ scrollYProgress }) {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
    return (
        <motion.div style={{ scale, rotate }} className=' relative bg-[#F3F2EE] '>
            <div className='absolute top-0 right-0 lg:w-[30%]  sm:w-[40%] w-[60%] drop-shadow-2xl '>
                <Image src={pettern} className='w-[100%]' />
            </div>
            <div className='lg:mx-20 mx-6 md:mx-6 sm:mx-10 flex-col gap-10 lg:flex-row flex py-20 md:py-36'>
                <div className='lg:hidden font-bold text-center'>
                    <h3 className='font-medium text-[#A98A55]' >Lesehan Bakso Palapa</h3>
                    <h1 className='md:text-5xl text-3xl text-[#4F6C51]'>Lebih Dari 5+ Tahun Bergerak Di Bidang Kuliner</h1>
                </div>
                <div className=' flex  items-center justify-center lg:py-0 md:py-10'>
                    <iframe className='rounded-xl shadow-xl lg:w-[560px] w-full h-[400px]' src="https://www.youtube.com/embed/nZ2LDB7Q7Rk?si=jdlI5S4HyarOI_Qt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className='flex flex-col gap-5 font-bold md:mx-0 lg:mx-10'>
                    <h3 className='font-medium hidden lg:block text-[#a89676]' >Lesehan Bakso Palapa</h3>
                    <h1 className='text-5xl hidden lg:block text-[#4F6C51]'>Lebih Dari 5+ Tahun Bergerak Di Bidang Kuliner</h1>
                    <p className='font-light md:text-xl lg:text-base  text-justify'>Lesehan Bakso Palapa merupakan sebuah usaha yang bergerak di bidang kuliner sejak tahun 2019. Lesehan ini memberikan pengalaman bersantap yang berbeda karena dikelilingi oleh keindahan Pagar Alam seperti bukit hijau, gunung Dempo, dan bangunan adat Rumah Baghi sehingga memberikan sentuhan lokal. Keistimewaan Lesehan Bakso Palapa terletak pada menu spesialnya yaitu gulai kepala kambing. Selain itu, terdapat menu pilihan yang terdiri dari aneka bakso, mie, paket nasi ayam, nasi ikan dan nasi goreng.</p>
                    <div className='w-full flex md:justify-start justify-between gap-7'>
                        <Button className='bg-[#A98A55] md:px-8 px-16 text-white' radius='full' variant="shadow"> Shadow</Button>
                        <Button className='border-[#A98A55] md:px-8 px-16 text-[#A98A55]' radius='full' variant="bordered">Galeri</Button>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}
