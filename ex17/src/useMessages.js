import { useEffect, useState } from 'react';

const useMessages = (forum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let didCancel = false;
    setError(null);
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`/messages/${forum}`);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Unable to read messages for ${forum}: ${text}`);
        }
        const body = await response.json();
        if (!didCancel) {
          setData(body);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err);
        }
      } finally {
        if (!didCancel) {
          setLoading(false);
        }
      }
    })();
    return () => {
      didCancel = true;
    };
  }, [forum]);

  return { data, loading, error };
};

export default useMessages;