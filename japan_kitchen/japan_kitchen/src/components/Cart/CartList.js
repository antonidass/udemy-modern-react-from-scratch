import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

export default function CartList(props) {
  const ctx = useContext(CartContext);

  const minusItemHandler = (event, id) => {
    console.log(id);
    const index = ctx.orderedItems.findIndex((x) => x.id == id);
    let temp = ctx.orderedItems;
    temp[index].count -= 1;
    ctx.setOrderedItems(temp);
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
  const plusItemHandler = (event, id) => {
    console.log(id);
    const index = ctx.orderedItems.findIndex((x) => x.id == id);
    let temp = ctx.orderedItems;
    temp[index].count += 1;
    ctx.setOrderedItems(temp);
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

  const mealList = ctx.orderedItems.map((meal) => (
    <CartItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      count={meal.count}
      minusItem={minusItemHandler}
      plusItem={plusItemHandler}
    />
  ));

  return <div>{mealList}</div>;
}
