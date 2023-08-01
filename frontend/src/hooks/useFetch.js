import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          setError("Failed to fetch");
          alert("Failed to fetch");
        }

        const result = await res.json();
        console.log(result);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};

export default useFetch;
