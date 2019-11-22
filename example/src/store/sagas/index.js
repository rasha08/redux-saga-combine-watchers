import { all } from 'redux-saga/effects';
import { combineWatchers } from 'redux-saga-combine-watchers';

import {userWatchers} from "./usersSaga";
import {getImagesWatcher} from "./imagesSaga";

export function* rootSaga() {
    yield all(combineWatchers(userWatchers, getImagesWatcher))
}
