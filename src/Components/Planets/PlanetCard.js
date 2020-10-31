import React from "react";
import SwapiService from "../../Services/Service";
import "./PlanetCard.css";


const PlanetCard = (props) => {
  let service = new SwapiService();
  const [name, setName] = React.useState(null);
  const [population, setPopulation] = React.useState(null);
  const [diameter, setDiameter] = React.useState(null);
  const [climate, setClimate] = React.useState(null);
  const { planetId } = props;
  const [loading, setLoading] = React.useState(true);

  function getPlanet() {
    if (!planetId) {
      return;
    }
    service.getPlanet(planetId).then((planet) => {
      setName(planet.name);
      setPopulation(planet.population);
      setDiameter(planet.diameter);
      setClimate(planet.climate);
      setLoading(false)
    });
  }
  React.useEffect(() => {
    getPlanet();
  },[props]);
  if(loading){
    return <span>Select planets</span>
  }
  return (
    <div className="detail-planet">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
        alt="planet"
      ></img>
      <ul className="detail-planet-item">
        <li>
          <span>Name:</span>
          <h2> {name}</h2>
        </li>
        <li>
          <span>Population: {population}</span>
        </li>
        <li>
          <span>Diameter: {diameter}</span>
        </li>
        <li>
          <span>Climate: {climate}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlanetCard;
