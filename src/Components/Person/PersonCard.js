import React from 'react';
import SwapiService from "../../Services/Service";
import Loader from "../Loader/Loader";

import "./PersonCard.css";
const PersonCard = (props) => {
    let service = new SwapiService();
    const [person, setPerson] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [birthYear, setBirthYear] = React.useState(null);
    const [eyeColor, setEyeColor] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const {personId} = props;
    React.useEffect(()=>{
        if(!personId){
            return;
        };
        service
        .getPerson(personId)
        .then((person)=>{
            setPerson(personId);
            setName(person.name);
            setGender(person.gender);
            setBirthYear(person.birthYear);
            setEyeColor(person.eyeColor);
            setLoading(false)
        });
    }, [props]);
    if(loading){
        return <span>Select characters</span>
      }
    return (
        <div  className="detail-person">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} 
                    alt = "characters">
                </img>
                <ul className="detail-person-item">
                    <li>
                        <span>Name:</span>
                        <h2> {name}</h2>
                    </li>
                    <li>
                        <span>Gender: {gender}</span>
                    </li>
                    <li>
                        <span>Birth Year: {birthYear}</span>
                    </li>
                    <li>
                        <span>Eye Color: {eyeColor}</span>
                    </li>
                </ul>

        </div>
    );
};

export default PersonCard;