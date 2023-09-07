import { GoodsItem } from './GoodsItem';

function GoodList({ goods = [] }) {
  // будем получать массив товаров, по умолчанию пустой массив

  if (!goods.length) {
    // если мы не сможем сделать setGoods(data.shop) в Shop.jsx, то вернем ниже надпись
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { GoodList };
