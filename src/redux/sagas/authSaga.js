import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import * as authActions from '../actions/authActions';
import * as authService from '../../services/authService';

function* login(action) {
    try {
        const { username, password } = action.payload;
        yield call(authService.login, username, password);
        yield put(authActions.loginSuccess());
    } catch (error) {
        yield put(authActions.loginFailure());
    }
}

function* logout() {
    authService.logout();
    yield put(authActions.logout());
}

function* authSaga() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, login);
    yield takeLatest(actionTypes.LOGOUT, logout);
}

export default authSaga;
