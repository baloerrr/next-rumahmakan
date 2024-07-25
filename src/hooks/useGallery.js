"use client"

import { useState, useEffect } from "react";
import axios from "axios";

const useGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [newGallery, setNewGallery] = useState({
    class_name: "slower-1",
    img: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/gallery/read`);
      if (Array.isArray(response.data.data)) {
        setGalleryData(response.data.data);
        console.log(response.data.data);
      } else {
        setError("Unexpected data format from API");
      }
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("class_name", newGallery.class_name);
      formData.append("img", newGallery.img);
  
      const response = await axios.post(`/api/gallery/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setGalleryData([...galleryData, response.data]);
      setNewGallery({ class_name: "slower-1", img: null });
  
      // Refresh halaman setelah data berhasil ditambahkan
      window.location.reload();
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  const handleDelete = async (galleryItem) => {
    try {
      if (!confirm("Apakah anda yakin mau menghapus data gallery ini?")) return;

      await axios.delete(`/api/gallery/delete`, {
        headers: { "Content-Type": "application/json" },
        data: { idGallery: galleryItem?.idGallery },
      });

      setGalleryData(galleryData.filter(item => item.idGallery !== galleryItem.idGallery));
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  const handleSelectChange = (e) => {
    setNewGallery({ ...newGallery, class_name: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewGallery({ ...newGallery, img: e.target.files[0] });
  };

  return {
    galleryData,
    newGallery,
    error,
    handleGetData,
    handleAdd,
    handleDelete,
    handleSelectChange,
    handleFileChange,
  };
};

export default useGallery;
