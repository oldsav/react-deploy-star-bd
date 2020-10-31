import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import RandomPlanetBar from "../RandomPlanetBar/RandomPlanetBar";
import Person from "../Person/Person";
import PersonCard from "../Person/PersonCard";

import Planet from "../Planets/Planets";
import Starships from "../Starships/Starships";

import "./App.css";

const App = () => {
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const [selectedPalnet, setSelectedPlanet] = React.useState(null);
  const [selectedStarship, setSelectdStarship] = React.useState(null);
  const onPlanetSelected =(id)=>{
    setSelectedPlanet(id);
  };
  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  };
  const onStarshipSelected = (id) => {
    setSelectdStarship(id);
  };
  return (
    <div className="app-container">
      <Header />
      <RandomPlanetBar />
      <Switch>
        {/* <Route path="/person" component={ Person } /> */}
        <Route
          exact
          path="/person"
          render={(props) => <Person 
            onItemSelected={onPersonSelected}
            personId = { selectedPerson }
            onClick = {(onPersonSelected)=> onPersonSelected}
             />}
        />
        <Route
        exact
         path="/planets" 
         render = {(props)=> <Planet
          onPlanetSelected = {onPlanetSelected}
          planetId = {selectedPalnet}
          onClick = {(onPlanetSelected)=>onPlanetSelected}
         />}
         />
        <Route
        exact
        path="/starships" 
        render = {(props)=> <Starships
          onStarshipSelected = {onStarshipSelected}
         starshipId = {selectedStarship}
         onClick = {(onStarshipSelected)=>onStarshipSelected}
        />}
        />
      </Switch>
      {/* <PersonCard personId = { selectedPerson }/> */}
    </div>
  );
};

export default App;
