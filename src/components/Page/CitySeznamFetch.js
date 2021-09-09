import axios from 'axios';
import { useState, useEffect } from 'react';

const useAllCity = () => {
  const [allCityData, setAllCityData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const apiFetch = async () => {
      const citySeznamFetch = await axios.get(
        'https://restcountries.eu/rest/v2/all'
      );
      setAllCityData(citySeznamFetch.data);
      setIsLoaded(true);
    };

    setIsLoaded(false);
    apiFetch();
  }, []);
  return { allCityData, isLoaded };
};

export default useAllCity;
