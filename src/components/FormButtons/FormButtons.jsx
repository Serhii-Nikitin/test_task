import React from 'react';
import PropTypes from 'prop-types';

export const FormButtons = ({ count, setCount }) => (
  <div className="good__buttons-container">
    <div className="good__counter">
      <button
        className="good__count-button"
        type="button"
        onClick={() => setCount(current => (
          (current <= 1)
            ? 1
            : current - 1
        ))}
      >
        -
      </button>
      <p className="good__count">
        {(count > 1)
          ? count
          : 1
        }
      </p>
      <button
        className="good__count-button"
        type="button"
        onClick={() => setCount(current => current + 1)}
      >
        +
      </button>
    </div>
    <button
      className="good__buy-button"
      type="submit"
    >
      купить
    </button>
  </div>
);

FormButtons.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
