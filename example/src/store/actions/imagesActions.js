import { GET_IMAGES, SET_IMAGES } from "../types";

export const getImages = () => ({ type: GET_IMAGES });

export const setImages = images => ({
    type: SET_IMAGES,
    payload: images
});
