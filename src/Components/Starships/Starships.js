import React from "react";
import SwapiService from "../../Services/Service";
import Loader from "../Loader/Loader";
import StarshipsCard from "./StarshipsCard";

import "./Starships.css";

const Starships = (props) => {
  const [starshipList, setStarshipList] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  React.useEffect(() => {
    let service = new SwapiService();
    service.getAllStarships().then((starshipList) => {
      setStarshipList(starshipList);
    });
  }, []);
  if (!starshipList) {
    return <Loader />;
  }
  const renderStarships = (arr) => {
    return arr.map(({ name, id }) => {
      return (
        <li
          className={activeItem === id ? "starship-active" : "starship"}
          key={id}
          onClick={() => {
            props.onStarshipSelected(id);
            setActiveItem(id);
          }}
        >
          <a>{name}</a>
        </li>
      );
    });
  };
  return (
    <section className="starship-container">
      <ul className="starship-list">{renderStarships(starshipList)}</ul>
      <StarshipsCard starshipId={props.starshipId} />
    </section>
  );
};

export default Starships;
