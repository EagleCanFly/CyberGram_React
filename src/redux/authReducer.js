import {authAPI} from "../DAL/api";

const SET_LOGIN_DATA = 'SET_LOGIN_DATA',
    TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'

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
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
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

export const setLoginData = (data) => {
    return {
        type: SET_LOGIN_DATA,
        data,
    }
};
export const toggleIsAuth = (value,data) => {
    return {
        type: TOGGLE_IS_AUTH,
        value,
        data
    }
};

export const authorize = () => {

    return (dispatch) => {
       return  authAPI.authRequest().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleIsAuth(true, response.data));
                // dispatch(setLoginData(response.data));
            }
        })
    }
}
export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleIsAuth(true, response.data));
                dispatch(authorize());
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginData(null));
                dispatch(toggleIsAuth(false, response.data));
            }
        })
    }
}


export default authReducer;