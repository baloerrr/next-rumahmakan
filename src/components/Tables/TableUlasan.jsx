'use client'
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TableUlasan() {
  const [ulasanData, setUlasanData] = useState([]);
  const [newUlasan, setNewUlasan] = useState({ name: "", desk: "", email: "", createdAt: "" });
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

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/ulasan/read/all`);
      console.log(response.data);

      // Ensure response.data.data is an array
      if (Array.isArray(response.data.data)) {
        setUlasanData(response.data.data);
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

  const handleDelete = async (packageItem) => {
    try {
      if (!confirm("Apakah anda yakin mau menghapus data ulasan ini?")) return;

      const response = await axios.delete(`/api/ulasan/delete`, {
        headers: { "Content-Type": "application/json" },
        data: {
          idUlasan: packageItem?.idUlasan,
        },
      });
      
      setUlasanData(ulasanData.filter((ulasan) => ulasan.id !== id));
      console.log("Data successfully deleted");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to delete");
      }
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUlasan({ ...newUlasan, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Deskripsi</th>
            <th className="py-2">Email</th>
            <th className="py-2">Created At</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="name"
                value={newUlasan.name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Class Name"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="desk"
                value={newUlasan.desk}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Deskripsi"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="email"
                name="email"
                value={newUlasan.email}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="test@gmail.com"
              />
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={handleAdd}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </td>
          </tr>
          {Array.isArray(ulasanData) && ulasanData.map((ulasanItem, key) => (
            <tr key={key}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  {ulasanItem.name}
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{ulasanItem.desk}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{ulasanItem.email}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{new Date(ulasanItem.createdAt).toLocaleDateString()}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button
                  onClick={() => handleDelete(ulasanItem.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
