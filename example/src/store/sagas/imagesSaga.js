import { put, takeLatest } from 'redux-saga/effects';
import {setImages} from "../actions";
import {GET_IMAGES} from "../types";
import {apiUrl} from "../../config";

const imagesEndPoint = 'photos?_format=json&access-token=gnmLS6D7LX03eiadumz5CsMRQq5HR0PUa5VZ'

function* fetchImages() {
    const images = yield fetch(`${apiUrl}/${imagesEndPoint}`).then(res => res.json());
    yield put(setImages(images.result))
}

export function* getImagesWatcher() {
    yield takeLatest(GET_IMAGES, fetchImages)
}
