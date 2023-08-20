import * as actionTypes from '../actionTypes';

export const loginRequest = (username, password) => ({
    type: actionTypes.LOGIN_REQUEST,
    payload: { username, password },
});

export const loginSuccess = () => ({ type: actionTypes.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: actionTypes.LOGIN_FAILURE });
export const logout = () => ({ type: actionTypes.LOGOUT });
