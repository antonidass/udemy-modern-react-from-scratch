import { useState } from "react";

export default function CartItem(props) {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  const [count, setCount] = useState(props.count);

  const plusCountHandler = (event) => {
    setCount(count + 1);
    props.plusItem(event, props.id);
  };

  const minusCountHandler = (event) => {
    setCount(count - 1);
    props.minusItem(event, props.id);
  };

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{count}</div>
        <div>{formattedPrice}</div>
      </div>
      <button onClick={plusCountHandler}>+</button>
      <button onClick={minusCountHandler}>-</button>
    </li>
  );
}
