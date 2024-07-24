"use client";
import Hero from "@/components/Hero";
import Kuantitatif from "@/components/Kuantitatif";
import Menu from "@/components/Menu";
import Sejarah from "@/components/Sejarah";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Footer from "@/components/Footer";
import Testi from "@/components/Testi";
import Ulasan from "@/components/Ulasan";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className=" h-[210vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <Sejarah scrollYProgress={scrollYProgress} />
      <Kuantitatif scrollYProgress={scrollYProgress} />
      <Menu scrollYProgress={scrollYProgress} />
      <Testi />
    </main>
  );
}
