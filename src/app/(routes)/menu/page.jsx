"use client";
import CardMenu from "@/components/CardMenu";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMenu from "../../../hooks/useMenu";


export default function Menu() {
  const { menus, loading, error } = useMenu();

const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menus: {error.message}</p>;
  return (
    <div ref={container} className="mt-[90px]">
      {menus.length > 0 ? (
        menus.map((data, i) => {
          const targetScale = 1 - (menus.length - i) * 0.05;
          const productArray = JSON.parse(data.product);
          return (
            <CardMenu
              key={i}
              i={i}
              nama={data.title}
              menu={productArray.map((product, index) => (
                <span key={index}>{product}</span>
              ))}    
              gambar={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${data.image}`}
              progres={scrollYProgress}
              range={[i * 0.1, 0.9]}
              targetScale={targetScale}
            />
          );
        })
      ) : (
        <p>{error ? `Error: ${error}` : "Loading..."}</p>
      )}
    </div>
  );
}
