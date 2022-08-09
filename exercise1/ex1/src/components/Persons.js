import PersonList from "./PersonList";
import "./Persons.css";
import Card from "./Card";

export default function Persons(props) {
  return (
    <div>
      <Card className="persons">
        <PersonList persons={props.persons} />
      </Card>
    </div>
  );
}
