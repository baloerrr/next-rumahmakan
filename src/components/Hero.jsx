import { Button } from "@nextui-org/react";
import Social from "@/components/Social";
import { useTransform, motion } from "framer-motion";


export default function Hero({scrollYProgress}) {

  const scale = useTransform(scrollYProgress, [0 , 1], [ 1, 0.5])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])


  return (
    <motion.div style={{scale, rotate}} className="sticky h-auto bg-hero-pattern  w-full bg-cover bg-center overflow-hidden top-0">
        <div className="w-full h-screen bg-black opacity-40 absolute top-0 left-0 z-10 "></div>
        <div className="w-full flex ">
          <div className="lg:mx-20 md:mx-6 sm:mx-10 h-screen z-20 flex flex-col gap-5 sm:text-left sm:items-start justify-center text-center items-center relative">
            <h1 className="font-bold lg:w-[800px] md:text-7xl sm:text-6xl text-4xl text-white mx-2 ">
              Lezatnya <span className="text-[#E4E7C4]">Hidangan</span> dan
              Indahnya <span className="text-[#E4E7C4]">Pemandangan</span>
            </h1>
            <p className="mx-2 md:text-lg  sm:w-[350px] sm:text-base text-sm text-white font-extralight">
              Lesehan Bakso Palapa merupakan sebuah usaha yang bergerak di
              bidang kuliner sejak tahun 2019.
            </p>
            <div className="flex gap-5 ">
              <Button
                radius="full"
                variant="bordered"
                className="text-[#E4E7C4] sm:font-light sm:text-base  border-[#E4E7C4]"
              >
                Tentang Kami
              </Button>
              <Button
                className="bg-[#E4E7C4] sm:text-base  sm:font-light text-black"
                radius="full"
                variant="shadow"
              >
                Kontak
              </Button>
            </div>
          </div>
          <Social />
        </div>
      </motion.div>
  )
}
