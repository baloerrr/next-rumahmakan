"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const useGallery = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseURL}/api/menu`);
        setMenus(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, [baseURL]);

  return { menus, loading, error };
};

export default useGallery;
