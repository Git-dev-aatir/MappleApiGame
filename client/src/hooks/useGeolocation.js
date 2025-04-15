// useGeolocation.js starter content
import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState(null); // { latitude, longitude }
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError('Unable to retrieve your location.');
        setLoading(false);
      }
    );
  }, []);

  return { position, error, loading };
};

export default useGeolocation;
