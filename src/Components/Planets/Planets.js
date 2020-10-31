import React from "react";
import SwapiService from "../../Services/Service";
import PlanetCard from "./PlanetCard";
import Loader from "../Loader/Loader";
import "./Planets.css";

const Planets = (props) => {
  const [planetList, setPlanetList] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  React.useEffect(() => {
    let service = new SwapiService();
    service.getAllPlanets().then((planetList) => {
      setPlanetList(planetList);
    });
  }, []);

  if (!planetList) {
    return <Loader />;
  }
  const renderPlanet = (arr) => {
    return arr.map(({ name, id }) => {
      return (
        <li
          className={activeItem === id ? "planet-active" : "planet"}
          key={id}
          onClick={() => {
            props.onPlanetSelected(id);
            setActiveItem(id);
          }}
        >
          <a>{name}</a>
        </li>
      );
    });
  };
  return (
    <section className="planet-container">
      <ul className="planet-list">{renderPlanet(planetList)}</ul>
      <PlanetCard planetId={props.planetId} />
    </section>
  );
};

export default Planets;
