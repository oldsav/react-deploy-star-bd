import React, { useState, useEffect } from "react";
import SwapiService from "../../Services/Service";
import Loader from "../Loader/Loader";
import "./RandomPlanetBar.css";
const RandomPlanetBar = () => {
  let service  = new SwapiService();
  const [id, setId] = useState(null);
  const [planetName, setPlanetName] = useState(null);
  const [population, setPopulation] = useState(null);
  const [rotationPeriod, setRotationPeriod] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const updatePlanet = ()=>{
    const planetId = (Math.floor(Math.random() * 20) + 2);
      service
      .getPlanet(planetId)
      .then((planet)=>{
            setPlanetName(planet.name);
            setPopulation(planet.population);
            setRotationPeriod(planet.rotationPeriod);
            setDiameter(planet.diameter);
            setId(planetId);
            setLoading(false)
        })
        .catch((err)=>{});
  };
    const timer = setTimeout(updatePlanet, 5000);
    return () => clearTimeout(timer);
  });
  if(loading){
    return <Loader/>
  }
  return (
    <section className="random-planet-bar-container">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = "planet"></img>
      <ul className="planet-data" key = {id}>
        <li>
            <span>Planet name:</span>
          <h2>{planetName}</h2>
        </li>
        <li>
        <span>Population: </span>
            {population}
        </li>
        <li>
        <span>Rotation Period: </span>
            {rotationPeriod}
            </li>
        <li>
        <span>Diameter: </span>
            {diameter}
        </li>
      </ul>
    </section>
  );
};

export default RandomPlanetBar;
