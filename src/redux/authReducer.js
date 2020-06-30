import {authAPI} from "../DAL/api";

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';

let initialData = {
    data: {
        id: "",
        login: "",
        email: "",

    },
    messages: [],
    resultCode: 0,
    isAuth: false
}


const authReducer = (state = initialData, action) => {
    console.log(state.isAuth)
    switch (action.type) {

        case TOGGLE_IS_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: action.value
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
            dispatch(toggleIsAuth(true, response.data));
            dispatch(authorize());
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