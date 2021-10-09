import { useRef, useState } from 'react';
import { useApiFetch } from './PageComponents/WeatherApiFetch';
import PageVisual from './PageComponents/PageVisual/PageVisual';
import LoadingVisual from './PageComponents/PageVisual/LoadingVisual';
import CitySeznam from './CitySeznam';
import { WeatherIcon } from 'weather-react-icons';

const Page = () => {
  const [city, setCity] = useState('Prague');
  const [cityForSeznam, setCityForSeznam] = useState('');
  const timeout = useRef(null);
  const { weather, loaded } = useApiFetch(city);

  const onChangeHandler = (text) => {
    setCityForSeznam(text);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setCity(text);
    }, 500);
  };
  return (
    <div className="Main-page">
      <div className="Parts-main-page">
        <WeatherIcon iconId={800} name="owm" className="sun-page" />
        {/* Here I will add map where city is and maybe more features */}
        <div className="error" id="error">
          <p> I don't know this city. Check your spelling </p>
        </div>
        <input
          id="input"
          type="text"
          className="city-text-input"
          maxLength="15"
          placeholder="Prague"
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      <CitySeznam input_City={cityForSeznam} onClick={onChangeHandler} />
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
