import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

function Shop() {
  const [goods, setGoods] = useState([]); // list products
  const [loading, setloading] = useState([true]); // состояние загрузки
  const [order, setOrder] = useState([]); // список заказов
  const [isBasketShow, setBasketShow] = useState(false); // изначально корзина не видна

  // функция показа корзины

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  // console.log('order=>', order);

  const removeItemFromBasket = (orderId) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== orderId);
    setOrder(newOrder);
  };

  const addToCard = (item) => {
    // console.log('item=>', item);
    // console.log('order=>', order);
    // проверим - а есть ли в стейте заказа данный товар для того, чтобы не создавать новый
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id); // если id товара, который мы добавляем найдется с id товара в нашем заказе, то получим index этого массива
    // иначе findIndex вернет -1
    // console.log('itemIndex=>', itemIndex);

    if (itemIndex < 0) {
      const newItem = {
        ...item, // унаследуем все ключи от item, которые получим
        quantity: 1, // добавили свойство quantity
      };

      setOrder([...order, newItem]); // получим имеющиеся, добавляем новый объект товара
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          // если товар был добавлен в корзину, то нам нужно точечно его обновить
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder); // новый сформированный массив отправляем в наш стейт
    }
  };

  useEffect(() => {
    // после монтирования будем вызывать fetch
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.shop && setGoods(data.shop); // проверяем - получили ли товары, иначе будет undefined
        setloading(false); // загрузка закончилась
      });
  }, []); // операцию выполняем один раз, массив зависимостей будет пустым

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodList goods={goods} addToCard={addToCard} />
      )}

      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeItemFromBasket={removeItemFromBasket}
        />
      )}
    </main>
  );
}

export { Shop };
