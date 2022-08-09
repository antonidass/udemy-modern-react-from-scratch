import { useContext } from "react";
import CartContext from "../../context/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const onAddItemInCartHandler = (mealData) => {
    if (
      typeof ctx.orderedItems.find((x) => x.id == mealData.id) === "undefined"
    ) {
      ctx.orderedItems.push(mealData);
    } else {
      const index = ctx.orderedItems.findIndex((x) => x.id == mealData.id);
      ctx.orderedItems[index].count += mealData.count;
    }
    ctx.setCountAll(
      ctx.orderedItems.reduce((accumulator, object) => {
        return accumulator + object.count;
      }, 0)
    );
    ctx.setCostAll(
      ctx.orderedItems.reduce((accumulator, object) => {
        return accumulator + object.price * object.count;
      }, 0)
    );
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          name={props.name}
          price={props.price}
          onAddItemInCartHandler={onAddItemInCartHandler}
        />
      </div>
    </li>
  );
}
