'use client';
import CardMenu from "@/components/CardMenu";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [error, setError] = useState(null);
  const [menuData, setMenuData] = useState([]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/menu/read`);

      if (Array.isArray(response.data.data)) {
        setMenuData(response.data.data);
        console.log(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Unexpected data format from API");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message); // Set error state
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div ref={container} className="mt-[90px]">
      {menuData.length > 0 ? (
        menuData.map((data, i) => {
          const targetScale = 1 - ((menuData.length - i) * 0.05);
          return (
            <CardMenu
              key={i}
              i={i}
              nama={data.title}
              menu={data.product}
              gambar={data.img}
              progres={scrollYProgress}
              range={[i * 0.10, 0.9]}
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
