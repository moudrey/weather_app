import axios from 'axios';
import { useState, useEffect } from 'react';

const currentLocationApiUrl = `http://api.ipstack.com/83.240.62.52?access_key=${process.env.REACT_APP_WEATHER_API_KEY}=1`;

const useAllCity = () => {
  const [allCityData, setAllCityData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [yourCity, setYourCity] = useState({});
  useEffect(() => {
    const apiFetch = async () => {
      try {
        const citySeznamFetch = await axios.get(
          `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setAllCityData(citySeznamFetch.data);
        const yourCityFetch = await axios.get(currentLocationApiUrl);
        setYourCity(yourCityFetch.data);

        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(false);
      } finally {
      }
    };

    setIsLoaded(false);
    apiFetch();
  }, []);
  return { allCityData, isLoaded, yourCity };
};

export default useAllCity;
