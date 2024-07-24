'use cleint'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import Ulasan from "./Ulasan";


export default function Testi() {
    const [ulasanData, setUlasanData] = useState([]);
    const [error, setError] = useState("");

    const handleGetData = async () => {
        try {
            const response = await axios.get(`/api/ulasan/read/all`);
            console.log(response.data);

            if (Array.isArray(response.data.data)) {
                const shuffledData = shuffleArray(response.data.data);
                const randomThree = shuffledData.slice(0, 3);
                setUlasanData(randomThree);
            } else {
                console.error("Unexpected data format:", response.data);
                setError("Unexpected data format from API");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message);
            console.log("Data failed to fetch");
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div className='relative '>
            <div className='grid grid-cols-12 gap-5 md:gap-0 py-20 md:py-36 lg:mx-16 mx-6 md:mx-6 sm:mx-10'>
                <div className='col-span-12 text-center gap-2'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#A98A55]'>Ulasan Pelanggan</h1>
                    <p className='mt-4 mb-10 text-[#4F6C51]'>Bagaimana pendapatan mereka?</p>
                </div>
                <div className='col-span-12 flex gap-5 flex-col md:flex-row mb-10'>
                    {Array.isArray(ulasanData) && ulasanData.map((ulasanItem, key) => (
                        <Card key={key} className="py-4 w-full">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <FaCircleUser className="text-7xl text-gray-500" />
                            </CardHeader>
                            <CardBody className="overflow-visible flex items-center py-2">
                                <h4 className="font-bold text-large">{ulasanItem.name}</h4>
                                <p className="text-sm text-gray-400 text-center font-light">{ulasanItem.desk}</p>
                            </CardBody>
                                <small className="text-default-500 absolute left-5">{new Date(ulasanItem.createdAt).toLocaleDateString()}</small>
                        </Card>
                    ))}
                </div>
                <Ulasan/>
            </div>   
        </div>
    );
}
