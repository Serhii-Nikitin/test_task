import PropTypes from 'prop-types';

export const VolumeType = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export const ColorType = {
  id: PropTypes.number.isRequired,
  colorName: PropTypes.string.isRequired,
};

export const GoodType = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageHoverUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  volumes: PropTypes.arrayOf(
    PropTypes.shape(VolumeType).isRequired,
  ).isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape(ColorType).isRequired,
  ).isRequired,
  price: 200,
  buttonUrl: PropTypes.string.isRequired,
  buttonUrl2: PropTypes.string.isRequired,
};
