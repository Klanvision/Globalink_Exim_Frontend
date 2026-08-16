import { useState, useEffect, useCallback } from 'react';

export const useFetch = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const executeFetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction();
      if (result && result.success) {
        setData(result.data);
      } else {
        setError(result ? result.message : 'An unexpected error occurred');
      }
    } catch (err) {
      setError(err.message || 'Network request failed');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    executeFetch();
  }, [executeFetch]);

  return { data, loading, error, refetch: executeFetch };
};
