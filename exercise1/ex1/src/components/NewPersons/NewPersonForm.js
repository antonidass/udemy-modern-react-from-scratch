import "./NewPersonForm.css";
import React, { useState } from "react";
import Card from "../Card";

export default function NewPersonForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const personData = {
      id: Math.random(),
      name: name,
      age: age,
    };

    props.onSavePersonData(personData);
    setAge("");
    setName("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="new-person__control">
          <label>Имя</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-person__control">
          <label>Возраст</label>
          <input type="text" value={age} onChange={ageChangeHandler} />
        </div>
        <div className="new-person__actions">
          <button type="submit">Добавить Пользователя</button>
        </div>
      </form>
    </Card>
  );
}
