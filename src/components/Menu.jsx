import { Button } from '@nextui-org/react';
import Image from "next/image";
import ayam from '../../public/assets/ayam.png';
import minuman from '../../public/assets/minuman.png';
import ikan from '../../public/assets/ikan.png';

export default function Menu() {
    return (
        <div className='relative'>
                <div className='grid grid-cols-12 gap-5 md:gap-0 py-20 md:py-36 lg:mx-16 mx-6 md:mx-6 sm:mx-10'>
                <div className='col-span-12 md:order-1 order-2 md:col-span-6 flex flex-col justify-center gap-5 font-bold md:mx-0 lg:mx-10'>
                    <h3 className='font-medium hidden md:block text-[#A98A55]'>Menu</h3>
                    <h1 className='text-5xl hidden md:block text-[#4F6C51]'>Top Menu yang menjadi Incaran Wisatawan</h1>
                    <p className='font-light md:text-xl lg:text-base w-full md:w-[83%] text-justify'>
                        Lesehan Bakso Palapa merupakan sebuah usaha yang bergerak di bidang kuliner sejak tahun 2019. Lesehan ini memberikan pengalaman bersantap yang berbeda karena dikelilingi oleh keindahan Pagar Alam seperti bukit hijau, gunung Dempo.
                    </p>
                    <div className='w-full flex md:justify-start justify-between gap-7'>
                        <Button className='bg-[#A98A55] md:px-8 px-24 text-white' radius='full' variant="shadow">Lihat Lebih Banyak</Button>
                    </div>
                </div>
                <div className='md:col-span-6 col-span-12 md:order-2 order-1'>
                    <div className='w-full h-72 relative overflow-hidden rounded-md'>
                        <Image
                            className='object-cover  transition-transform transform hover:scale-110 '
                            alt="Ikan"
                            src={ikan}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className='flex justify-between mt-5 gap-5'>
                        <div className='md:w-[340px] w-[200px] h-40 relative overflow-hidden rounded-md  shadow-lg'>
                            <Image
                                className='object-cover h-40 transition-transform transform hover:scale-110'
                                alt="Ayam"
                                src={ayam}
                            />
                        </div>
                        <div className='md:w-[340px] w-[200px] h-40 relative rounded-md overflow-hidden shadow-lg'>
                            <Image
                                className='object-cover h-40  transition-transform transform hover:scale-110'
                                alt="Minuman"
                                src={minuman}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
