import React, { useState } from "react";
import NewPerson from "./components/NewPersons/NewPerson";
import Persons from "./components/Persons";

const INITIAL_PERSONS = [
  {
    id: "p1",
    name: "Anton",
    age: "21",
  },
  {
    id: "p2",
    name: "Ivan",
    age: "35",
  },
  {
    id: "p3",
    name: "Denis",
    age: "12",
  },
];

function App() {
  const [persons, setPersons] = useState(INITIAL_PERSONS);

  const addPersonHandler = (person) => {
    setPersons((prevPersons) => {
      return [person, ...prevPersons];
    });
  };

  return (
    <React.Fragment>
      <NewPerson onAddPerson={addPersonHandler} />
      <Persons persons={persons} />
    </React.Fragment>
  );
}

export default App;
