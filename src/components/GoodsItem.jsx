function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
}) {
  let imageGoods = '';
  displayAssets.forEach((el) => (imageGoods = el.full_background));

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img alt={displayName} src={imageGoods} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right card__price">{price.regularPrice} грн.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
