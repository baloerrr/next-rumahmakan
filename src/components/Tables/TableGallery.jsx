"use client";

import useGallery from "../../hooks/useGallery";
import Image from "next/image";

const TableGallery = () => {
  const { galeries, loading, error } = useGallery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menus: {error.message}</p>;

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
