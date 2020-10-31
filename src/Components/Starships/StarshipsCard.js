import React from "react";
import SwapiService from "../../Services/Service";
import "./StarshipsCard.css";

const StarshipsCard = (props) => {
  let service = new SwapiService();
  const [name, setName] = React.useState(null);
  const [model, setModel] = React.useState(null);
  const [manufacturer, setManufacturer] = React.useState(null);
  const [length, setLength] = React.useState(null);
  const [cargoCapacity, setCargoCapacity] = React.useState(null);
  const { starshipId } = props;
  const [loading, setLoading] = React.useState(true);

  function getStarships() {
    if (!starshipId) {
      return;
    }
    service.getStarships(starshipId).then((starship) => {
      setName(starship.name);
      setModel(starship.model);
      setManufacturer(starship.manufacturer);
      setLength(starship.length);
      setCargoCapacity(starship.cargoCapacity);
      setLoading(false)
    });
  };
  React.useEffect(() => {
    getStarships();
  },[props]);
  if(loading){
    return <span>Select starship</span>
  }

  return (
    <div className="detail-starship">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`}
        alt="starship"
      ></img>
      <ul className="detail-starship-item">
        <li>
          <span>Name:</span>
          <h2> {name}</h2>
        </li>
        <li>
          <span>Model: {model}</span>
        </li>
        <li>
          <span>Manufacturer: {manufacturer}</span>
        </li>
        <li>
          <span>Length: {length}</span>
        </li>
        <li>
          <span>Cargo capacity: {cargoCapacity}</span>
        </li>
      </ul>
    </div>
  );
};

export default StarshipsCard;
