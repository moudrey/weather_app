const SeznamVisual = (cities) => {
  const filteredCities = cities.allCities.filter((city) =>
    city.capital
      .toLowerCase()
      .includes(cities.currentCity.toLowerCase().toString())
  );
  return (
    <div className="autoComplete-conteiner">
      <input
        className="buttonInSeznam"
        type="button"
        value="X"
        onClick={() => {
          cities.onClick('');
          document.getElementById('input').value = '';
        }}
      />
      <>
        {filteredCities.map((CitySeznam) => {
          return (
            <div className="mapOfSeznamContainer" key={CitySeznam.name}>
              <div>
                {CitySeznam.name} ({CitySeznam.nativeName})
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
            </div>
          );
        })}
      </>
    </div>
  );
};
export default SeznamVisual;

//TODO: OnChange
