"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const useGallery = () => {
  const [tentangKamis, setTentangKamis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchTentangKamis = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseURL}/api/tentang-kami`);
        setTentangKamis(response.data.data);
        console.log(tentangKamis);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTentangKamis();
  }, [baseURL]);

  return { tentangKamis, loading, error };
};

export default useGallery;
