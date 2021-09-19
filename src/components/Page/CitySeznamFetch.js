import axios from 'axios';
import { useState, useEffect } from 'react';

const currentLocationApiUrl = `http://api.ipstack.com/83.240.62.52?access_key=ffd1c2dee9619f203e446eafa42c0252&format=1`;

const useAllCity = () => {
  const [allCityData, setAllCityData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [yourCity, setYourCity] = useState({});
  useEffect(() => {
    const apiFetch = async () => {
      const citySeznamFetch = await axios.get(
        'https://restcountries.eu/rest/v2/all'
      );
      setAllCityData(citySeznamFetch.data);
      const yourCityFetch = await axios.get(currentLocationApiUrl);
      setYourCity(yourCityFetch.data);

      setIsLoaded(true);
    };

    setIsLoaded(false);
    apiFetch();
  }, []);
  return { allCityData, isLoaded, yourCity };
};

export default useAllCity;
