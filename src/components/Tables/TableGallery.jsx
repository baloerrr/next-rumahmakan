"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const TableGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [newGallery, setNewGallery] = useState({
    class_name: "slower-1",
    img: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleSelectChange = (e) => {
    setNewGallery({ ...newGallery, class_name: e.target.value });
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/gallery/read`);

      if (Array.isArray(response.data.data)) {
        setGalleryData(response.data.data);
        console.log(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Unexpected data format from API");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        setError(error.message); 
        console.log("Data failed to fetch");
      }
    }
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("class_name", newGallery.class_name);
      formData.append("img", newGallery.img); // Append the file object

      const response = await axios.post(`/api/gallery/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const addedGallery = response.data;
      setGalleryData([...galleryData, addedGallery]);
      setNewGallery({ class_name: "", img: null });
      console.log("Data successfully added");

      handleGetData();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to add");
      }
    }
  };

  const handleFileChange = (e) => {
    setNewGallery({ ...newGallery, img: e.target.files[0] });
  };

  const handleDelete = async (packageItem) => {
    try {
      if (!confirm("Apakah anda yakin mau menghapus data gallery ini?")) return;

      const response = await axios.delete(`/api/gallery/delete`, {
        headers: { "Content-Type": "application/json" },
        data: {
          idGallery: packageItem?.idGallery,
        },
      });

      setGalleryData(
        galleryData.filter((item) => item.idGallery !== packageItem.idGallery)
      );

      console.log("Data success deleted");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error?.message);
        console.log("Data failed delete");
      }
    }
  };

//   async function getTentangKamiImageDownloadURL(imageFileName) {
//     const imgRef = ref(storage, `tentangkami/${imageFileName}`);
//     try {
//       const downloadURL = await getDownloadURL(imgRef);
//       console.log(downloadURL);
//       return downloadURL;
//     } catch (error) {
//       console.error("Error getting download URL:", error);
//       throw error;
//     }
//   }

//   getTentangKamiImageDownloadURL("tentang.JPG")



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      {error && <p>Error: {error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Class Name</th>
            <th className="py-2">Image</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <select
                name="class_name"
                value={newGallery.class_name}
                onChange={handleSelectChange}
                className="border rounded px-2 py-1"
              >
                {[
                  "slower-1",
                  "slower-2",
                  "slower-3",
                  "slower-4",
                  "slower-5",
                  "slower-6",
                  "slower-7",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
            <td className="border px-4 py-2">
              <input
                type="file"
                name="img"
                onChange={handleFileChange}
                className="border rounded px-2 py-1"
                placeholder="Image URL"
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
          {Array.isArray(galleryData) &&
            galleryData.map((galleryItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {galleryItem.class_name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <Image
                    src={galleryItem.img}
                    alt={galleryItem.class_name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button
                    onClick={() => handleDelete(galleryItem)}
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

export default TableGallery;
