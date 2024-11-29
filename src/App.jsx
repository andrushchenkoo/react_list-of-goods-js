import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const sortGoods = (goods, sortType, isReverse) => {
  let sortedGoods = [...goods];

  switch (sortType) {
    case 'alphabet':
      sortedGoods = [...goods].sort((a, b) => a.localeCompare(b));
      break;
    case 'length':
      sortedGoods = [...goods].sort((a, b) => a.length - b.length);
      break;
    default:
      sortedGoods = [...goods];
  }

  if (isReverse) {
    sortedGoods.reverse();
  }

  return sortedGoods;
};

export const App = () => {
  const [activeSort, setActiveSort] = useState('');
  const [isReverse, setIsReverse] = useState(false);
  const goods = sortGoods(goodsFromServer, activeSort, isReverse);

  const sortAlphabetically = () => {
    setActiveSort('alphabet');
  };

  const sortByLength = () => {
    setActiveSort('length');
  };

  const goodsReverse = () => {
    setIsReverse(prev => !prev);
  };

  const goodsReset = () => {
    setActiveSort('');
    setIsReverse(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${activeSort === 'alphabet' ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${activeSort === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReverse === true ? '' : 'is-light'}`}
          onClick={goodsReverse}
        >
          Reverse
        </button>

        {(activeSort !== '' || isReverse) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={goodsReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
