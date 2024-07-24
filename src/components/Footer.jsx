import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





export default function Footer() {
    return (
        <div
            className='relative bg-[#E4E7C4] h-[300px mb-10] md:h-[800px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className='fixed bottom-56 lg:mx-20  mx-0 md:mx-6 sm:mx-10 h-[300px] w-full   '>

                <div className='flex md:flex-row flex-col md:items-start items-center text-center md:text-left  justify-between w-[100%] md:w-[90%] h-full md:my-60 my-56 '>
                    <div className='hidden md:flex flex-col text-[#4F6C51]'>
                        <h1 className='text-3xl font-bold'>Link Cepat</h1>
                        <ul className='text-lg flex flex-col gap-2 mt-5'> 
                            <li><Link href="/">Beranda</Link></li>
                            <li><Link href="/">Menu</Link></li>
                            <li><Link href="/">Tentang Kami</Link></li>
                            <li><Link href="/">Galeri</Link></li>
                            <li><Link href="/">Pedoman Merk</Link></li>

                        </ul>
                    </div>
                    <div className='flex flex-col text-[#4F6C51]'>
                        <h1 className='text-3xl font-bold'>Kontak</h1>
                        <ul className='text-lg flex flex-col gap-2 mt-5 '>
                            <li className="flex gap-2 items-center text-center "><FaWhatsapp />+628 9512 2323 </li>
                            <li className="flex gap-2 items-center text-center"><SiGmail />Lesehan@gmail.com</li>
                            <li className="flex gap-2 items-center text-center"><FaFacebook />Bakso_Lesahan</li>
                            <li className="flex gap-2 items-center text-center"><FaInstagram /> PalepaBakso.Lesehan</li>
                        </ul>
                    </div>

                    <div className="w-72 h-72 mb-60 md:w-[600px] md:h-[250px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31875.75477384674!2d104.71710674999999!3d-2.9671864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b76757a5b7ae3%3A0xd038ad907c71fb81!2sPempek%20Candy!5e0!3m2!1sen!2sid!4v1718595247934!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-md shadow-xl w-full h-full '></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}
