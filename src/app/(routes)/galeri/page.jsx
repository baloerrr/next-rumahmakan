'use client'

import Image from 'next/image';
import ikan from '../../../../public/assets/ikan.png'; // Fallback image
import useGallery from "../../../hooks/useGallery";


export default function Page() {
    const {
        galleryData,
        error,
      } = useGallery();


    return (
        <div className='h-[100vh] overflow-hidden'>
            <div className='horizontal-scroll-wrapper'>
                {error && <div>Error: {error}</div>}
                {galleryData.length > 0 ? (
                    galleryData.map((image, index) => (
                        <div key={index} className={`img-wrapper ${image.class_name}`}>
                            <a href={image.url} target='_blank' rel='noopener noreferrer'>
                                <Image className='img' src={image.img || ikan} alt='Gallery Image' width={500} height={200} />
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
