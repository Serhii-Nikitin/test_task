import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ColorSelect } from '../ColorSelect';
import { VolumesList } from '../VolumesList';
import { FormButtons } from '../FormButtons';
import { GoodType } from '../Types/Types';

export const GoodForm = ({ good }) => {
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [selectedVolume, setSelectedVolume] = useState(100);
  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(1);
  const { colors, volumes } = good;

  return (
    <form
      className="good__form"
      onSubmit={(event) => {
        event.preventDefault();

        setSelectedColor('');
        setSelectedVolume(100);
        setCount(1);
      }}
    >
      <div className="good__wrapper">
        <ColorSelect
          colors={colors}
          isColorsOpen={isColorsOpen}
          setIsColorsOpen={setIsColorsOpen}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <p className="good__price">
          {`${(100 + selectedVolume) * count} грн`}
        </p>
      </div>
      {isColorsOpen
        ? ''
        : (
          <VolumesList
            volumes={volumes}
            selectedVolume={selectedVolume}
            setSelectedVolume={setSelectedVolume}
          />
        )
      }
      <FormButtons
        count={count}
        setCount={setCount}
      />
    </form>
  );
};

GoodForm.propTypes = {
  good: PropTypes.shape(GoodType).isRequired,
};
