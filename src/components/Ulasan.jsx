'use client'
'use client'

import { Button, Card, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios';

export default function Ulasan() {
    const [newUlasan, setNewUlasan] = useState({ name: "", desk: "", email: "", createdAt: "" });
    const [ulasanData, setUlasanData] = useState([]);
    const [error, setError] = useState("");

    const handleAdd = async () => {
        try {
            const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
            const ulasanWithDate = { ...newUlasan, createdAt: currentDate };

            const response = await axios.post(`/api/ulasan/create`, ulasanWithDate, {
                headers: { "Content-Type": "application/json" },
            });

            const addedUlasan = response.data;
            setUlasanData([...ulasanData, addedUlasan]);
            setNewUlasan({ name: "", desk: "", email: "", createdAt: "" });
            console.log("Data successfully added");
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message);
            console.log("Data failed to add");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUlasan({ ...newUlasan, [name]: value });
    };

    return (
      
         
                <Card className='p-10 col-span-12 flex flex-col gap-10'>
                    <div className='flex md:flex-row flex-col gap-10  justify-between'>
                        <Input
                            isRequired
                            variant='underlined'
                            type="email"
                            label="Email"
                            name="email"
                            placeholder='Email'
                            className="max-w-xl"
                            value={newUlasan.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            isRequired
                            variant='underlined'
                            type="text"
                            label="Nama"
                            name="name"
                            placeholder='Nama'
                            className="max-w-xl"
                            value={newUlasan.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Textarea
                        isRequired
                        variant='underlined'
                        label="Berikan Ulasan Anda"
                        name="desk"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                        value={newUlasan.desk}
                        onChange={handleInputChange}
                    />
                    <Button className='bg-[#A98A55] max-w-xs text-white' radius='full' variant="shadow" onClick={handleAdd}>Kirim</Button>
                </Card>
         
            
    )
}
