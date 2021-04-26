import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoodType } from '../Types/Types';
import { GoodForm } from '../GoodForm';

export const Good = ({ good }) => {
  const [isGoodChoosen, setIsGoodChoosen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(good.imageUrl);

  return (
    <>
      <div key={good.id} className="goods-list__good good">
        <div className="good__new">new</div>

        <div
          className="good__image-wrapper"
        >
          <img
            src={selectedImg}
            alt="shampoo"
            className="good__image"
            onMouseEnter={() => setSelectedImg(good.imageHoverUrl)}
            onMouseLeave={() => setSelectedImg(good.imageUrl)}
          />
        </div>

        <div
          className="good__bag"
          role="button"
          tabIndex={0}
          onKeyPress={() => {
            setIsGoodChoosen(current => !current);
          }}
          onClick={() => {
            setIsGoodChoosen(current => !current);
          }}
        >
          {isGoodChoosen
            ? <img src={good.buttonUrl} alt="Vector" />
            : <img src={good.buttonUrl2} alt="Vector_1" />
          }
        </div>

        <h1 className="good__title">{good.title}</h1>

        <p className="good__info">{good.description}</p>

        <GoodForm
          good={good}
        />
      </div>
    </>
  );
};

Good.propTypes = {
  good: PropTypes.shape(GoodType).isRequired,
};
