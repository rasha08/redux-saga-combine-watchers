
# redux-saga-combine-watchers  
  
> Redux-Saga combine watchers util  
  
[![NPM](https://img.shields.io/npm/v/redux-saga-combine-watchers.svg)](https://www.npmjs.com/package/redux-saga-combine-watchers) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  
  
## Install  
  
```bash  
npm install --save redux-saga-combine-watchers  
```  

## About 
`combineWatchers` is a simple util, ultra small (***0.6 kb gzipped***) that helps you organize your saga watchers easily without worrying about the way that you export watchers from your saga files.

```tsx
type Watchers = GeneratorFunction | GeneratorFunction[]  
const combineWatchers = (...args: Watchers[]): Generator[]
```


## Example  
  
  ***store/sagas/usersSaga.js***
  
```js
import { put, takeLatest } from 'redux-saga/effects';  
import {setUsers, setSelectedUserDetails} from "../actions";  
import {GET_USERS, GET_CURRENT_USER} from "../types";  
import {apiUrl} from "../../config";  
  
const usersEndpoint = '...'  
  
function* fetchUsers() {  
  const users = yield fetch(`${apiUrl}/${usersEndpoint}`).then(res => res.json());  
  yield put(setUsers(users.result))  
}

function* fetchUserDetailInfo(action) {  
  const users = yield fetch(`${apiUrl}/${usersEndpoint}/${action.payload}`).then(res => res.json());  
  yield put(setSelectedUserDetails(users.result))  
} 
  
function* getUsersWatcher() {  
  yield takeLatest(GET_USERS, fetchUsers)  
}  
 
function* getCurrentUserWatcher() {  
  yield takeLatest(GET_CURRENT_USER, fetchUsers)  
}   
export const userWatchers = [getUsersWatcher, getCurrentUserWatcher]
```

   ***store/sagas/imagesSaga.js***

```js
import { put, takeLatest } from 'redux-saga/effects';  
import {setImages} from "../actions";  
import {GET_IMAGES} from "../types";  
import {apiUrl} from "../../config";  
  
const imagesEndPoint = '...'  
  
function* fetchImages() {  
  const images = yield fetch(`${apiUrl}/${imagesEndPoint}`).then(res => res.json());  
  yield put(setImages(images.result))  
}  
  
export function* getImagesWatcher() {  
  yield takeLatest(GET_IMAGES, fetchImages) 
```
   
   ***store/sagas/index.js***
```tsx
import { all } from 'redux-saga/effects';  
import { combineWatchers } from 'redux-saga-combine-watchers';

import {userWatchers} from "./usersSaga";  
import {getImagesWatcher} from "./imagesSaga";  
  
export function* rootSaga() {  
  yield all(combineWatchers(userWatchers, getImagesWatcher))  
}
```  
  
## License  
  
MIT © [rasha08](https://github.com/rasha08)

## Colaborators
[Aleksandar Ilic](https://github.com/clili93)
