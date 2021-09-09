import './Page.css';
import { useRef, useState } from 'react';
import { useApiFetch } from './PageComponents/ApisFetch';
import PageVisual from './PageComponents/PageVisual/PageVisual';
import LoadingVisual from './PageComponents/PageVisual/LoadingVisual';
import CitySeznam from './CitySeznam';

const Page = () => {
  const [city, setCity] = useState('Praha');
  const timeout = useRef(null);
  const { weather, loaded } = useApiFetch(city);

  const onChangeHandler = (text) => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setCity(text);
    }, 500);
  };

  return (
    <div>
      <input
        id="input"
        type="text"
        className="Weather-by-city-input"
        maxLength="20"
        placeholder="Praha"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <CitySeznam input_City={city} onClick={onChangeHandler} />
      {loaded ? (
        <PageVisual
          city={weather.name}
          temp={weather.main.temp}
          feelsLike={weather.main.feels_like}
          weather={weather.weather}
        />
      ) : (
        <LoadingVisual />
      )}
    </div>
  );
};
export default Page;
