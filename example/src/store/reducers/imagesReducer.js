import { SET_IMAGES } from "../types";

const initialCarouselImage = { title: 'Cubble Web', url: 'https://cdn.dribbble.com/users/5976/screenshots/2574758/cobbleweb_logo_design_by_alex_tass.jpg', id: '90909' }

const initalState = {
  images: [initialCarouselImage]
};

export const imagesReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        ...{ images: action.payload }
      };
    default:
      return state;
  }
};
