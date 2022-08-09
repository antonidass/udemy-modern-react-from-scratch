import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useState } from "react";

export default function MealItemForm(props) {
  const [amount, setAmount] = useState("1");

  const onAddItemInCartHandler = (event) => {
    event.preventDefault();
    const data = {
      id: props.id,
      count: Number(amount),
      name: props.name,
      price: Number(props.price),
    };
    props.onAddItemInCartHandler(data);
  };

  const onChangeInputHandler = (event) => {
    setAmount(event.nativeEvent.target.value);
  };

  return (
    <form
      id={props.id}
      className={styles.form}
      onSubmit={onAddItemInCartHandler}
    >
      <Input
        label={"Количество"}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          value: { amount },
          step: "1",
          defaultValue: "1",
          onChange: onChangeInputHandler,
        }}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
