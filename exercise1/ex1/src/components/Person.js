import "./Person.css";
import Card from "./Card";

export default function Person(props) {
  return (
    <li>
      <Card className="person-item">
        <h2>
          {props.name} - {props.age} лет
        </h2>
      </Card>
    </li>
  );
}
