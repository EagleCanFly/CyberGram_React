import {authAPI} from "../DAL/api";

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH',
    TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR';

let initialData = {
    data: {
        id: "",
        login: "",
        email: "",

    },
    messages: [],
    resultCode: 0,
    isAuth: false,
    isError: false
}


const authReducer = (state = initialData, action) => {
    switch (action.type) {

        case TOGGLE_IS_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: action.value
            }
        }
        case TOGGLE_IS_ERROR: {
            return {
                ...state,
                isError: action.value
            }
        }
        default: {
            return state;
        }
    }
}

export const toggleIsAuth = (value, data) => {
    return {
        type: TOGGLE_IS_AUTH,
        value,
        data
    }
};
export const toggleIsError = (value, data) => {
    return {
        type: TOGGLE_IS_ERROR,
        value
    }
};

export const authorize = () => {
    return (dispatch) => {
        return authAPI.authRequest().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleIsAuth(true, response.data));
            }
        })
    }
}
export const login = (email, password) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password);
        if (response.data.resultCode === 0) {
            dispatch(toggleIsError(false));
            dispatch(toggleIsAuth(true, response.data));
            dispatch(authorize());
            return response;
        } else if (response.data.resultCode === 1) {
            dispatch(toggleIsError(true));
            return response;
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(toggleIsAuth(false, null));
        }
    }
}

export default authReducer;