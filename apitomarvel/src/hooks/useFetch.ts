import { useEffect, useState } from "react";

interface UseFetchParams {
  fetchUrl: string;
}

export const useFetch = <T>({ fetchUrl }: UseFetchParams) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(fetchUrl);
        const { data } = (await result.json()) as { data: T };
        setData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl]);

  return {
    data,
    loading,
    error,
  };
};