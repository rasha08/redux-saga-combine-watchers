import { put, takeLatest } from 'redux-saga/effects';
import {setUsers} from "../actions";
import {GET_USERS} from "../types";
import {apiUrl} from "../../config";

const usersEndpoint = 'users?_format=json&access-token=gnmLS6D7LX03eiadumz5CsMRQq5HR0PUa5VZ'

function* fetchUsers() {
    const users = yield fetch(`${apiUrl}/${usersEndpoint}`).then(res => res.json());
    yield put(setUsers(users.result))
}

function* getUsersWatcher() {
    yield takeLatest(GET_USERS, fetchUsers)
}

export const userWatchers = [getUsersWatcher]
