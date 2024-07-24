'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ikan from '../../../../public/assets/ikan.png'; // Fallback image

export default function Page() {
    const [galleryData, setGalleryData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        try {
            const response = await axios.get(`/api/gallery/read`);
            console.log("API Response:", response.data.data);

            if (Array.isArray(response.data.data)) {
                setGalleryData(response.data.data);
            } else {
                console.error("Unexpected data format:", response.data);
                setError("Unexpected data format from API");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message);
        }
    };

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
