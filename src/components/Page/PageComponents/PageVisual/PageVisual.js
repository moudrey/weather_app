import '../../Page.css';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

export const PageVisual = (data) => {
  return (
    <div className="Page-Conteiner">
    
      <div className="Weather-Conteiner">
        <h1>{Object.values(data.city)} </h1>
        <div className="temp">
          <h4>{data.temp}°C</h4>
        </div>
        <div className="feels_like">
          <h5>feels like {data.feelsLike}</h5>
        </div>
        <div>
          {data.weather.map((mapWeather) => {
            return (
              <p key={mapWeather.id}>
                {mapWeather.main} <br />
                <WeatherIcon iconId={mapWeather.id} name="owm" />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageVisual;
