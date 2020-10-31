import React from "react";
import PersonCard from "./PersonCard";
import "./Person.css";
import Loader from "../Loader/Loader";
import SwapiService from "../../Services/Service";

const Person = (props) => {
  const [peopleList, setPeopleList] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  React.useEffect(() => {
    let service = new SwapiService();
    service
    .getAllPeople()
    .then((peopleList) => {
      setPeopleList(peopleList);
    });
  }, []);

  if (!peopleList) {
    return <Loader />;
  }
  const renderPerson = (arr) => {
    return arr.map(({name, id}) => {
      return (
        <li 
        className={activeItem === id? "persone-active":"person"} 
        key={id}
        onClick = { ()=> {
          props.onItemSelected(id);
          setActiveItem(id);
          }}>
          <a>{name}</a>
        </li>
      );
    });
  };
  return (
    <section className="persons-container">
      <ul className="person-list">{renderPerson(peopleList)}</ul>
      <PersonCard 
        personId = { props.personId }/>
    </section>
  );
};

export default Person;
