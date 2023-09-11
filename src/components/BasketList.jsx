import { BasketItem } from './BasketItem';

function BasketList({
  order,
  handleBasketShow = Function.prototype,
  removeItemFromBasket = Function.prototype,
  decQuantity,
  incQuantity,
}) {
  // console.log(order);

  const totalPrice = order.reduce((sum, item) => {
    return (sum += item.priceProduct * item.quantity);
  }, 0);

  // reduce принимает функцию, которой будет проходить по очередно, и изначальное значение - 0
  // в sum изначально попадет 0, и sum будем каждый раз нарасчивать, обходя каждый элемент корзины

  /*
  let totalPrice = 0;
  order.forEach((item) => (totalPrice += item.priceProduct * item.quantity));
  */

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            removeItemFromBasket={removeItemFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимость: {totalPrice} грн.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
