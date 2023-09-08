function Cart({ quantity = 0 }) {
  return (
    <div className="cart blue darken-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {/* если в корзине нечего нет, то null, а null не отрисовывается */}
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
