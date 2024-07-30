"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const useGallery = () => {
  const [ulasans, setUlasans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchUlasans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseURL}/api/ulasan`);
        setUlasans(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUlasans();
  }, [baseURL]);

  return { ulasans, loading, error };
};

export default useGallery;
