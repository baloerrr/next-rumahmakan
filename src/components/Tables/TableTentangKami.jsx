"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

const TentangKami = () => {
  const [tentangKamiData, setTentangKamiData] = useState([]);
  const [error, setError] = useState(null);
  const [newTentangKami, setNewTentangKami] = useState({
    title: "",
    visi: "",
    misi: "",
    banner: null,
  });
  const [editingTentangKami, setEditingTentangKami] = useState(null);
  const [validationError, setValidationError] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const validateForm = () => {
    if (!newTentangKami.title || !newTentangKami.visi || !newTentangKami.misi) {
      setValidationError("All fields are required.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/tentangKami/read`);
      if (Array.isArray(response.data.data)) {
        setTentangKamiData(response.data.data);
      } else {
        setError("Unexpected data format from API");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateData = async () => {
    try {
      const formData = new FormData();
      formData.append("idTentangKami", editingTentangKami.idTentangKami);
      if (newTentangKami.banner && newTentangKami.banner instanceof File) {
        formData.append("banner", newTentangKami.banner);
      }
      formData.append("title", newTentangKami.title);
      formData.append("visi", newTentangKami.visi);
      formData.append("misi", newTentangKami.misi);

      const response = await axios.post(`/api/tentangKami/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data successfully updated");

      handleGetData();
      setEditingTentangKami(null);
      setNewTentangKami({ title: "", visi: "", misi: "", banner: null });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to update");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTentangKami({ ...newTentangKami, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewTentangKami({ ...newTentangKami, banner: e.target.files[0] });
  };

  const handleEdit = (tentangKamiItem) => {
    setEditingTentangKami(tentangKamiItem);
    setNewTentangKami({
      title: tentangKamiItem.title,
      visi: tentangKamiItem.visi,
      misi: tentangKamiItem.misi,
      banner: null,
    });
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      {error && <p>Error: {error}</p>}
      {validationError && <p className="text-red-500">{validationError}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Visi</th>
            <th className="py-2">Misi</th>
            <th className="py-2">Banner</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="title"
                value={newTentangKami.title}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Title"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="visi"
                value={newTentangKami.visi}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Visi"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="misi"
                value={newTentangKami.misi}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Misi"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="file"
                name="banner"
                onChange={handleFileChange}
                className="border rounded px-2 py-1"
                placeholder="Misi"
              />
            </td>
            <td className="border px-4 py-2">
              {editingTentangKami ? (
                <button
                  onClick={handleUpdateData}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
          {Array.isArray(tentangKamiData) &&
            tentangKamiData.map((tentangKamiItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {tentangKamiItem.title}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {tentangKamiItem.visi}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {tentangKamiItem.misi}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <Image
                    src={tentangKamiItem.banner}
                    alt={tentangKamiItem.title}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button
                    onClick={() => handleEdit(tentangKamiItem)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tentangKamiItem)}
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
};

export default TentangKami;
