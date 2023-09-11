import { useEffect } from 'react';

function Alert(props) {
  const { name = '', closeAlert = Function.prototype } = props;

  // по таймеру будем его скрывать
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    // функция очистки
    return () => {
      clearTimeout(timerId); // когда придет новый товар, то нам нужно снять таймер и установить новый
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
