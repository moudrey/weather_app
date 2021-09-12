import './Page.css';
import { useRef, useState } from 'react';
import { useApiFetch } from './PageComponents/WeatherApiFetch';
import PageVisual from './PageComponents/PageVisual/PageVisual';
import LoadingVisual from './PageComponents/PageVisual/LoadingVisual';
import CitySeznam from './CitySeznam';

const Page = () => {
  const [city, setCity] = useState('');
  const timeout = useRef(null);
  const { weather, loaded } = useApiFetch(city);

  const onChangeHandler = (text) => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setCity(text);
    }, 500);
  };
  console.log(process.env);
  return (
    <div>
      <div className="error" id="error">
        <p> I don't know this city. Check your spelling </p>
      </div>
      <input
        id="input"
        type="text"
        className="Weather-by-city-input"
        maxLength="20"
        placeholder="Prague"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <CitySeznam input_City={city} onClick={onChangeHandler} />
      {loaded ? (
        <PageVisual
          city={weather.name}
          temp={weather.main.temp}
          feelsLike={weather.main.feels_like}
          weather={weather.weather}
          icon={weather.cod}
        />
      ) : (
        <LoadingVisual />
      )}
    </div>
  );
};
export default Page;
