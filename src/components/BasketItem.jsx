function BasketItem({ id, displayName: name, priceProduct: price, quantity }) {
  return (
    <li className="collection-item">
      {name} x {quantity} = {price} грн.
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
