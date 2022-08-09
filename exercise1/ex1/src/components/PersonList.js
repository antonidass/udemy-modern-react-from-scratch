import Person from "./Person";
import "./PersonList.css";

export default function PersonList(props) {
  return (
    <ul className="person-list">
      {props.persons.map((person) => (
        <Person key={person.id} name={person.name} age={person.age} />
      ))}
    </ul>
  );
}
