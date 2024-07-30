"use client";

import Image from "next/image";
import ikan from "../../../../public/assets/ikan.png"; // Fallback image
import useGallery from "../../../hooks/useGallery";

export default function Page() {
  const { galeries, loading, error } = useGallery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menus: {error.message}</p>;

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="horizontal-scroll-wrapper">
        {error && <div>Error: {error}</div>}
        {galeries.length > 0 ? (
          galeries.map((galery, index) => (
            <div key={index} className={`img-wrapper ${galery.classname}`}>
              <a href={galery.image} target="_blank" rel="noopener noreferrer">
                <Image
                  className="img"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${galery.image}` || ikan}
                  alt="Gallery Image"
                  width={500}
                  height={200}
                />
              </a>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
