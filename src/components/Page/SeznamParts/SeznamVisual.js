const SeznamVisual = (cities) => {
  console.log(cities);
  return (
    <div className="autoComplete-conteiner">
      <h1>{Object.values(cities.currentCity)}</h1>
      <>
        {cities.allCities.map((CitySeznam) => {
          return (
            <div className="mapOfSeznamContainer" key={CitySeznam.name}>
              <div>
                {CitySeznam.name} ({CitySeznam.nativeName})
                <div className="cityOfSeznam"
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
