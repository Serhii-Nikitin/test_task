import React from 'react';
import PropTypes from 'prop-types';
import { ColorType } from '../Types/Types';

export const ColorSelect = ({
  colors,
  setIsColorsOpen,
  isColorsOpen,
  selectedColor,
  setSelectedColor,
}) => (
  <div
    className="good__color-select"
    onMouseLeave={() => {
      setIsColorsOpen(false);
    }}
  >
    <div
      className="good__select-button"
      onMouseEnter={() => {
        setIsColorsOpen(current => !current);
      }}
    >
      {selectedColor || 'Цвет'}
      <div className="good__image-container">
        <img
          src="../build/images/selected.svg"
          alt="select"
          className={!isColorsOpen
            ? 'good__no-selected'
            : 'good__selected'
          }
        />
      </div>
    </div>

    {isColorsOpen
      ? (
        <ul className="good__colors-list">
          {colors.map(color => (
            <li
              key={color.id}
              className="good__color"
            >
              <button
                className="good__color-button"
                type="button"
                onClick={() => {
                  setSelectedColor(color.colorName);
                  setIsColorsOpen(false);
                }}
              >
                {color.colorName}
              </button>
            </li>
          ))}
        </ul>
      ) : ''
    }
  </div>
);

ColorSelect.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape(ColorType).isRequired,
  ).isRequired,
  setIsColorsOpen: PropTypes.func.isRequired,
  isColorsOpen: PropTypes.bool.isRequired,
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};
