import axios from 'axios';
import { useState, useEffect } from 'react';

const apiId = 'f6fd2f5394f61ab4027227779802fe23';

export const useApiFetch = (city) => {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;

  useEffect(() => {
    const locationAndWeather = async () => {
      try {
        const weatherData = await axios.get(url);
        if (weatherData.data) setWeather(weatherData.data);
        document.getElementById('error').style.top = '100%';

        setLoaded(true);
      } catch (error) {
        document.getElementById('error').style.top = '75%';
      } finally {
      }
    };

    setLoaded(false);
    locationAndWeather();
  }, [city]);

  return { weather, loaded };
};
