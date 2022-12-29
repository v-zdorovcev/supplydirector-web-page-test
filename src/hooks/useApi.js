import { useEffect, useState } from "react";

const useApi = (fetcher) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  if (typeof fetcher !== "function") {
    throw new Error('"fetcher" argument must be a function');
  }

  const fetchApi = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetcher();

      setData(data);
      setLoading(false);

      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);

      setData(null);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { isLoading: loading, isError: error, data };
};

export default useApi;
