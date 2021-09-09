import '../../Page.css';

export const PageVisual = (data) => {
  console.log('Data is viewed');
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
          {data.weather.map((weather) => {
            return (
              <p key={weather.id}>
                {weather.main} <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageVisual;
