import {
  FiChevronDown as ArrowDown,
  FiChevronUp as ArrowUp,
} from 'react-icons/fi';
import { useState } from 'react';

const SeznamVisual = (cities) => {
  const filteredCities = cities.allCities.filter((city) =>
    city.capital
      .toLowerCase()
      .includes(cities.currentCity.toLowerCase().toString())
  );
  const [arrowUpSee, setArrowUpSee] = useState('block');
  const [arrrowDownSee, setArrrowDownSee] = useState('none');
  return (
    <div className="seznam">
      <input
        type="button"
        className="your-city"
        id="input-button"
        value="Your city"
        onClick={() => {
          cities.onClick(cities.yourCity);
          document.getElementById('input').value = cities.yourCity;
        }}
      />
      <input
        className="delete-city"
        id="input-button"
        type="button"
        value="Delete"
        onClick={() => {
          cities.onClick('');
          document.getElementById('input').value = '';
        }}
      />

      <div className="autoComplete-conteiner" id="autoComplete-conteiner">
        <div className="arrows-conteiner">
          <ArrowDown
            id="arrow"
            className="arrowDown"
            style={{
              display: arrrowDownSee,
            }}
            onClick={() => {
              if (window.outerWidth >= 1200) {
                document.getElementById('seznam-map-conteiner').style.right =
                  '-2%';
              } else {
                document.getElementById(
                  'seznam-map-conteiner'
                ).style.maxHeight = '0px';
              }
              setArrowUpSee('block');
              setArrrowDownSee('none');
            }}
          />
          <ArrowUp
            id="arrow"
            className="arrowUp"
            style={{
              display: arrowUpSee,
            }}
            onClick={() => {
              if (window.outerHeight < '750') {
                document.getElementById(
                  'seznam-map-conteiner'
                ).style.maxHeight = '150px';
              } else if (window.outerHeight > 750 && window.outerWidth < 1200) {
                document.getElementById(
                  'seznam-map-conteiner'
                ).style.maxHeight = window.outerHeight - 370 + 'px';
              } else {
                document.getElementById('seznam-map-conteiner').style.right =
                  '-25%';
              }
              setArrowUpSee('none');
              setArrrowDownSee('block');
            }}
          />
        </div>
        <div className="seznam-map-conteiner" id="seznam-map-conteiner">
          {filteredCities.map((CitySeznam) => {
            return (
              <div className="mapOfSeznamContainer" key={CitySeznam.name}>
                <span>{CitySeznam.name}</span>

                {/* ({CitySeznam.nativeName}) */}
                <div
                  className="cityOfSeznam"
                  onClick={() => {
                    cities.onClick(CitySeznam.capital);
                    document.getElementById('input').value = CitySeznam.capital;
                  }}
                >
                  {CitySeznam.capital}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SeznamVisual;

//TODO: OnChange
