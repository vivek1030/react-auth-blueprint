import * as actionTypes from '../actionTypes';

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return { isAuthenticated: true };
        case actionTypes.LOGOUT:
            return { isAuthenticated: false };
        case actionTypes.LOGIN_FAILURE:
            return { isAuthenticated: false };
        default:
            return state;
    }
};

export default authReducer;
