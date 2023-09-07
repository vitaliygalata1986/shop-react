import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodList } from './GoodList';

function Shop() {
  const [goods, setGoods] = useState([]); // list products
  const [loading, setloading] = useState([true]); // состояние загрузки

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
      {loading ? <Preloader /> : <GoodList goods={goods} />}
    </main>
  );
}

export { Shop };
