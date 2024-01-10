import { useEffect, useState } from "react";

interface UseFetchParams<T> {
  request: () => Promise<T>;
}

export const useFetch = <T>({ request }: UseFetchParams<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await request();

      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};
