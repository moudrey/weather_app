const SeznamVisual = (cities) => {
  console.log(cities);
  return (
    <div className="autoComplete-conteiner">
      <h1>{Object.values(cities.currentCity)}</h1>
      <>
        {cities.allCities.map((CitySeznam) => {
          return (
            <>
              <p key={CitySeznam.name}>
                {CitySeznam.name} ({CitySeznam.nativeName})
                <h5
                  onClick={() => {
                    cities.onClick(CitySeznam.capital);
                    document.getElementById('input').value = CitySeznam.capital;
                  }}
                >
                  {CitySeznam.capital}
                </h5>
              </p>
            </>
          );
        })}
      </>
    </div>
  );
};
export default SeznamVisual;

//TODO: OnChange
