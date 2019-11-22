import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import PropTypes from 'prop-types'

import { getImages } from "../../store/actions";
import {image} from "../../shared/models";

const mapDispatchToProps = {
  getImages: getImages
};

const mapStateToProps = state => ({
  images: state.imagesReducer.images
});

// We want to run this effect only once at component mount event and the [] is equivalent of that
// eslint is complaining about not including all props in deps array but that will trigger this effect more times than once.
/* eslint-disable */
const ImagesCarousel = ({ images, getImages }) => {
  useEffect(() => {
    getImages();
  }, []);
  /* eslint-enable */

  return (
    <Carousel>
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img className="d-block w-100" src={image.url} alt={image.title} />

          <Carousel.Caption>
            <h3>{image.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ImagesCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(image)),
  getImages: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesCarousel);
