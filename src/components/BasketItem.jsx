function BasketItem({
  id,
  displayName: name,
  priceProduct: price,
  quantity,
  removeItemFromBasket = Function.prototype,
}) {
  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} грн.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeItemFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
