import { useState } from "react";
import ErrorModal from "./ErrorModal";
import "./NewPerson.css";
import NewPersonForm from "./NewPersonForm";

export default function NewPerson(props) {
  const [showModal, setShowModal] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContnet] = useState("");

  const savePersonDataHandler = (inputData) => {
    if (inputData.name === "" || inputData.age === "") {
      setTitle("Некорректный ввод");
      setContnet("Эти поля не могут быть пустыми");
      setShowModal(true);
      return;
    } else if (!/^\d+$/.test(inputData.age)) {
      setTitle("Некорректный возраст");
      setContnet("Возраст должен быть больше 0");
      setShowModal(true);
      return;
    }

    props.onAddPerson(inputData);
  };

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="new-person">
      <ErrorModal
        showModal={showModal}
        content={content}
        title={title}
        onCloseHandler={onCloseHandler}
      />
      <NewPersonForm onSavePersonData={savePersonDataHandler} />
    </div>
  );
}
