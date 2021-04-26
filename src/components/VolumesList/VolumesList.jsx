import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { VolumeType } from '../Types/Types';

export const VolumesList = ({
  volumes,
  selectedVolume,
  setSelectedVolume,
}) => (
  <>
    {volumes.map(volume => (
      <Fragment
        key={volume.id}
      >
        <input
          type="radio"
          id={volume.id}
          value="1"
          name="radio"
          className="good__radio"
          onClick={() => setSelectedVolume(volume.count)}
          checked={volume.count === selectedVolume}
          readOnly
        />
        <label htmlFor={volume.id}>
          {`${volume.count} мл`}
        </label>
      </Fragment>
    ))}
  </>
);

VolumesList.propTypes = {
  volumes: PropTypes.arrayOf(
    PropTypes.shape(VolumeType).isRequired,
  ).isRequired,
  selectedVolume: PropTypes.number.isRequired,
  setSelectedVolume: PropTypes.func.isRequired,
};
