import axios from 'axios';
import { useState, useEffect } from 'react';

export const useApiFetch = (city) => {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  //From env file process.env.REACT_APP_WEATHER_API_KEY
  console.log(process.env);
  useEffect(() => {
    const locationAndWeather = async () => {
      try {
        const weatherData = await axios.get(url);
        if (weatherData.data) setWeather(weatherData.data);
        if (window.outerWidth > 650 && window.outerWidth < 1200) {
          document.getElementById('error').style.top = '-15%';
        } else if (window.outerWidth <= 650 || window.outerWidth >= 1200) {
          document.getElementById('error').style.opacity = '0';
        }

        setLoaded(true);
      } catch (error) {
        if (window.outerWidth > 650 && window.outerWidth < 1200) {
          document.getElementById('error').style.top = '0%';
        } else if (window.outerWidth <= 650 || window.outerWidth >= 1200) {
          document.getElementById('error').style.opacity = '1';
        }
      } finally {
      }
    };

    setLoaded(false);
    locationAndWeather();
  }, [city]);

  return { weather, loaded };
};
