import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";




export default function Social() {
    return (
        <div className='hidden  md:flex md:flex-row items-center text-white absolute -translate-y-[300%] bottom-0 right-0 z-10'>
           <div className='md:flex md:flex-row items-center gap-5 rotate-90'>
            <p>Socials</p>
            <div className='w-16 h-[1px] rounded-full bg-white'>
            </div>
            <ul className='-rotate-90 flex flex-col gap-2 mx-10'>
                <li><Link href="https://www.youtube.com/watch?v=4f-tAcsSv54"><FaFacebook className='text-2xl hover:scale-125 hover:transition-all transition-all ease-in-out hover:ease-in-out hover:text-[#4F6C51]  text-[#E4E7C4]' /></Link></li>
                <li><Link href="https://www.youtube.com/watch?v=4f-tAcsSv54"><FaInstagram  className='text-2xl hover:scale-125 hover:transition-all transition-all ease-in-out hover:ease-in-out hover:text-[#4F6C51]  text-[#E4E7C4]' /></Link></li>
                <li><Link href="https://www.youtube.com/watch?v=4f-tAcsSv54"><FaWhatsapp className='text-2xl hover:scale-125 hover:transition-all transition-all ease-in-out hover:ease-in-out hover:text-[#4F6C51]  text-[#E4E7C4]' /></Link></li>
            </ul>
           </div>
        </div>
    )
}
