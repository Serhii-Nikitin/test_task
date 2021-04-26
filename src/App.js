import React, { useState } from 'react';
import './App.scss';
import goodsFromServer from './api/goods.json';
import { Good } from './components/Good';

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);

  return (
    <div className="page-content">
      <div className="goods-list">
        {goods.map(good => (
          <Good
            key={good.id}
            setGoods={setGoods}
            good={good}
          />
        ))}
      </div>
    </div>
  );
};
