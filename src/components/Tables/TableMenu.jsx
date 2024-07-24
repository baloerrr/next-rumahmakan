"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const TableMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [newMenu, setNewMenu] = useState({
    img: null,
    title: "",
    product: [],
  });
  const [error, setError] = useState(null);
  const [editingMenu, setEditingMenu] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const handleFileChange = (e) => {
    setNewMenu({ ...newMenu, img: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu({ ...newMenu, [name]: value });
  };

  const handleProductChange = (index, value) => {
    const newProductArray = [...newMenu.product];
    newProductArray[index] = value;
    setNewMenu({ ...newMenu, product: newProductArray });
  };

  const addProductField = () => {
    setNewMenu({ ...newMenu, product: [...newMenu.product, ""] });
  };

  const removeProductField = (index) => {
    const newProductArray = newMenu.product.filter((_, i) => i !== index);
    setNewMenu({ ...newMenu, product: newProductArray });
  };

  const handleEdit = (menuItem) => {
    setEditingMenu(menuItem);
    setNewMenu({
      img: null,
      title: menuItem.title,
      product: menuItem.product,
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const validateForm = () => {
    if (!newMenu.title || newMenu.product.some((product) => !product)) {
      setValidationError("All fields are required.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/menu/read`);

      if (Array.isArray(response.data.data)) {
        // Ensure product is an array and parse JSON string
        const formattedData = response.data.data.map((menuItem) => ({
          ...menuItem,
          product: Array.isArray(menuItem.product)
            ? menuItem.product
            : JSON.parse(menuItem.product),
        }));

        setMenuData(formattedData);
        console.log(formattedData);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Unexpected data format from API");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        setError(error.message); // Set error state
        console.log("Data failed to fetch");
      }
    }
  };

  const handleAdd = async () => {
    try {
      if (!validateForm()) return;

      const formData = new FormData();
      formData.append("img", newMenu.img);
      formData.append("title", newMenu.title);
      formData.append("product", JSON.stringify(newMenu.product));

      const response = await axios.post(`/api/menu/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const addedMenu = response.data.data;
      setMenuData([...menuData, addedMenu]);
      setNewMenu({ img: null, title: "", product: [""] });
      console.log("Data successfully added");

      handleGetData();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to add");
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("idMenu", editingMenu.idMenu);
      if (newMenu.img && newMenu.img instanceof File) {
        formData.append("img", newMenu.img);
      }
      formData.append("title", newMenu.title);
      formData.append("product", JSON.stringify(newMenu.product));

      const response = await axios.post(`/api/menu/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data successfully updated");

      handleGetData();
      setEditingMenu(null);
      setNewMenu({ img: null, title: "", product: [""] });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to update");
      }
    }
  };

  const handleDelete = async (menuItem) => {
    try {
      if (!confirm("Apakah anda yakin mau menghapus data menu ini?")) return;

      const response = await axios.delete(`/api/menu/delete`, {
        headers: { "Content-Type": "application/json" },
        data: { idMenu: menuItem.idMenu },
      });

      if (response.status === 200) {
        setMenuData(menuData.filter((item) => item.idMenu !== menuItem.idMenu));
        console.log("Data success deleted");
      } else {
        console.error("Failed to delete data:", response.data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed delete");
      }
    }
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
            <th className="py-2">Image</th>
            <th className="py-2">Product</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="title"
                value={newMenu.title}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Title"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="file"
                name="img"
                onChange={handleFileChange}
                className="border rounded px-2 py-1"
                placeholder="Image"
              />
            </td>
            <td className="border px-4 py-2">
              {Array.isArray(newMenu.product) &&
                newMenu.product.map((product, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={product}
                      onChange={(e) =>
                        handleProductChange(index, e.target.value)
                      }
                      className="border rounded px-2 py-1 mr-2"
                      placeholder="Product"
                    />
                    <button
                      type="button"
                      onClick={() => removeProductField(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      -
                    </button>
                  </div>
                ))}
              <button
                type="button"
                onClick={addProductField}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Add Product
              </button>
            </td>
            <td className="border px-4 py-2">
              {editingMenu ? (
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              )}
            </td>
          </tr>
          {Array.isArray(menuData) &&
            menuData.map((menuItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {menuItem.title}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <Image
                    src={menuItem.img}
                    alt={menuItem.title}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <ul>
                    {Array.isArray(menuItem.product) &&
                      menuItem.product.map((product, index) => (
                        <li key={index}>{product}</li>
                      ))}
                  </ul>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button
                    onClick={() => handleEdit(menuItem)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(menuItem)}
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

export default TableMenu;
