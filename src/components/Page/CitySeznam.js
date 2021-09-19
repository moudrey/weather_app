import './Page.css';
import useAllCity from './CitySeznamFetch';
import SeznamVisual from './SeznamParts/SeznamVisual';
import SeznamLoading from './SeznamParts/SeznamLoading';

const CitySeznam = (city) => {
  const { allCityData, isLoaded, yourCity } = useAllCity();
  return (
    <>
      {isLoaded ? (
        <SeznamVisual
          allCities={allCityData}
          currentCity={city.input_City}
          onClick={city.onClick}
          yourCity={yourCity.city}
        />
      ) : (
        <SeznamLoading />
      )}
    </>
  );
};

export default CitySeznam;
